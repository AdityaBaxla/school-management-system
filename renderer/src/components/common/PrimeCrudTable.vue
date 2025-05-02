<template>
  <div>
    <div class="card">
      <!-- Create Button -->
      <div class="flex justify-content-between mb-3">
        <Button label="Create" @click="toggleCreateMode" :class="{}" />
      </div>

      <!-- DataTable with integrated create form -->
      <DataTable
        :value="createMode ? [newItemData, ...localItems] : localItems"
        editMode="row"
        dataKey="id"
        v-model:editingRows="editingRows"
        @row-edit-save="onRowEditSave"
        ref="dataTable"
        currentPageReportTemplate="Showing {first} to {last} of {totalRecords} products"
      >
        <template v-for="col in normalizedColumns" :key="col.field">
          <Column :field="col.field" :header="col.header">
            <!-- Create Form Template -->
            <template #body="slotProps">
              <!-- Create Mode first row -->
              <div v-if="createMode && slotProps.data === newItemData">
                <div v-if="!col.editable">-</div>
                <Select
                  v-else-if="col.type === 'dropdown'"
                  v-model="newItemData[col.field]"
                  :options="col.options"
                  optionLabel="label"
                  optionValue="value"
                  placeholder="Select"
                  class="w-full"
                  @keydown.tab="focusNextInput($event, col.field)"
                  ref="inputRefs"
                />
                <InputNumber
                  v-else-if="col.type === 'number'"
                  v-model="newItemData[col.field]"
                  class="w-full"
                  @keydown.enter="createItem"
                  @keydown.tab="focusNextInput($event, col.field)"
                  ref="inputRefs"
                />
                <InputText
                  v-else
                  v-model="newItemData[col.field]"
                  class="w-full"
                  @keydown.enter="createItem"
                  @keydown.tab="focusNextInput($event, col.field)"
                  ref="inputRefs"
                />
              </div>

              <!-- Regular data rows -->
              <template v-else>
                <span v-if="col.type === 'dropdown'">
                  {{
                    col.options.find(
                      (opt) => opt.value === slotProps.data[col.field]
                    )?.label || ""
                  }}
                </span>
                <span v-else>
                  {{ slotProps.data[col.field] }}
                </span>
              </template>
            </template>

            <!-- Editor Template for edit mode -->
            <template #editor="{ data, field }">
              <!-- Skip the newItemData row -->
              <template v-if="data !== newItemData">
                <div :key="`editor-${data.id}-${field}`">
                  <div v-if="!col.editable">-</div>
                  <Select
                    v-else-if="col.type === 'dropdown'"
                    v-model="editData[data.id][field]"
                    :options="col.options"
                    optionLabel="label"
                    optionValue="value"
                    placeholder="Select"
                    class="w-full"
                  />
                  <InputNumber
                    v-else-if="col.type === 'number'"
                    v-model="editData[data.id][field]"
                  ></InputNumber>
                  <InputText
                    v-else
                    v-model="editData[data.id][field]"
                    class="w-full"
                  />
                </div>
              </template>
            </template>
          </Column>
        </template>

        <!-- Action Column -->

        <Column
          :rowEditor="!createMode"
          style="width: 10%; min-width: 8rem"
          bodyStyle="text-align:center"
          header="Actions"
        >
          <template v-if="createMode" #body="slotProps">
            <!-- Create row actions -->
            <div
              v-if="createMode && slotProps.data === newItemData"
              class="flex justify-content-center"
            >
              <Button label="Save" @click="createItem" />
              <Button label="Cancel" text @click="cancelCreate" />
            </div>
            <!-- Normal row editor buttons will be handled by rowEditor -->
          </template>
        </Column>
      </DataTable>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch, onMounted, nextTick } from "vue";
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import InputText from "primevue/inputtext";
import Select from "primevue/select";
import Button from "primevue/button";
import { InputNumber } from "primevue";

const props = defineProps({
  items: {
    type: Array,
    default: () => [],
  },
  columns: {
    type: Array,
    default: () => [],
  },
});

const emit = defineEmits(["row-edit-save", "item-create"]);
const dataTable = ref(null);
const inputRefs = ref([]);

// Create mode state
const createMode = ref(false);

const newItemData = ref({
  // Add a temporary ID for the DataTable's benefit
  id: "new-item-temp-id",
});

// Create a local copy of the items for display
const localItems = ref([]);

// Create a separate object to track edit data
const editData = ref({});

// Track which rows are currently being edited
const editingRows = ref([]);

// Initialize and sync localItems with props.items
watch(
  () => props.items,
  (newItems) => {
    if (newItems && newItems.length) {
      localItems.value = JSON.parse(JSON.stringify(newItems));
    }
  },
  { immediate: true, deep: true }
);

// Reset new item data when we toggle create mode
watch(
  createMode,
  (isCreateMode) => {
    if (isCreateMode) {
      // Initialize empty object with all fields
      // Keep the temp ID
      const tempId = newItemData.value.id;
      newItemData.value = { id: tempId };

      normalizedColumns.value.forEach((col) => {
        // Set default values based on column type
        if (col.type === "dropdown" && col.options.length) {
          newItemData.value[col.field] = "";
        } else if (col.type === "number") {
          newItemData.value[col.field] = null;
        } else {
          newItemData.value[col.field] = "";
        }
      });

      // Focus the first input field after DOM update
      nextTick(() => {
        if (inputRefs.value && inputRefs.value.length) {
          const firstInput = inputRefs.value[0];
          if (firstInput && firstInput.$el) {
            const inputElement = firstInput.$el.querySelector("input");
            if (inputElement) {
              inputElement.focus();
            } else {
              firstInput.$el.focus();
            }
          }
        }
      });
    }
  },
  { immediate: true }
);

const normalizedColumns = computed(() =>
  props.columns.map((col) => ({
    ...col,
    type: col.type || "text",
    options: col.options || [],
    editable: col.editable === false ? false : true,
  }))
);

// Initialize editData when a row enters edit mode
watch(
  editingRows,
  (newEditingRows) => {
    if (newEditingRows.length > 0) {
      // For each newly editing row, initialize its edit data
      newEditingRows.forEach((row) => {
        // Skip the newItemData row
        if (row.id === newItemData.value.id) return;

        if (!editData.value[row.id]) {
          // Find the item in localItems
          const item = localItems.value.find((i) => i.id === row.id);
          if (item) {
            // Create a deep copy for editing
            editData.value[row.id] = JSON.parse(JSON.stringify(item));
          }
        }
      });
    }
  },
  { immediate: true, deep: true }
);

const onRowEditSave = (event) => {
  // Skip the newItemData row
  if (event.data.id === newItemData.value.id) return;

  const rowId = event.data.id;

  // If we have edit data for this row
  if (editData.value[rowId]) {
    // Get the index of the item in the local items array
    const index = localItems.value.findIndex((item) => item.id === rowId);

    if (index !== -1) {
      // Update the local item with the edited data
      const updatedItem = {
        ...localItems.value[index],
        ...editData.value[rowId],
      };
      localItems.value[index] = updatedItem;

      // Emit the updated data
      emit("row-edit-save", updatedItem);

      // Clean up edit data
      delete editData.value[rowId];
    }
  }
};

// Toggle create mode
const toggleCreateMode = () => {
  createMode.value = !createMode.value;
};

// Cancel create operation
const cancelCreate = () => {
  createMode.value = false;
};

// Handle tab key to focus next input
const focusNextInput = (event, currentField) => {
  // Don't need to prevent default - we want the natural tab behavior

  // We'll handle focusing the first field when all fields are completed in a separate logic
  const fields = normalizedColumns.value.map((col) => col.field);
  const currentIndex = fields.indexOf(currentField);

  // If this is the last field and tab is pressed, submit the form
  if (currentIndex === fields.length - 1) {
    // Prevent default to avoid moving focus away
    event.preventDefault();
    createItem();
  }
};

// Create new item
const createItem = () => {
  // Create a copy of the current data to avoid reference issues
  const newItem = { ...newItemData.value };

  // Remove the temporary ID
  delete newItem.id;

  // Emit event with the new item
  emit("item-create", newItem);

  // Clear the form for next entry
  normalizedColumns.value.forEach((col) => {
    if (col.type === "dropdown") {
      newItemData.value[col.field] = "";
    } else if (col.type === "number") {
      newItemData.value[col.field] = null;
    } else {
      newItemData.value[col.field] = "";
    }
  });

  // Focus the first input again for rapid data entry
  nextTick(() => {
    if (inputRefs.value && inputRefs.value.length) {
      const firstInput = inputRefs.value[0];
      if (firstInput && firstInput.$el) {
        const inputElement = firstInput.$el.querySelector("input");
        if (inputElement) {
          inputElement.focus();
        } else {
          firstInput.$el.focus();
        }
      }
    }
  });
};
</script>
