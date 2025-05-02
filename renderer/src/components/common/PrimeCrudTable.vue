<template>
  <DataTable
    :value="items"
    editMode="row"
    dataKey="id"
    v-model:editingRows="editingRows"
    @rowEditInit="onRowEditInit"
    @rowEditSave="onRowEditSave"
    @rowEditCancel="onRowEditCancel"
  >
    <template v-for="col in normalizedColumns" :key="col.field">
      <Column :field="col.field" :header="col.header">
        <!-- Editor Template -->
        <template #editor="{ data, field }">
          <Select
            v-if="col.type === 'dropdown'"
            v-model="data[field]"
            :options="col.options"
            optionLabel="label"
            optionValue="value"
            placeholder="Select"
            class="w-full"
          />
          <InputText v-else v-model="data[field]" class="w-full" />
        </template>
        <!-- Body Template -->
        <template #body="{ data }">
          <span v-if="col.type === 'dropdown'">
            {{
              col.options.find((opt) => opt.value === data[col.field])?.label ||
              ""
            }}
          </span>
          <span v-else>
            {{ data[col.field] }}
          </span>
        </template>
      </Column>
    </template>
    <!-- Row Editor Column -->
    <Column
      :rowEditor="true"
      headerStyle="width:7rem"
      bodyStyle="text-align:center"
    />
  </DataTable>
</template>

<script setup>
import { ref, computed } from "vue";
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import InputText from "primevue/inputtext";
import Select from "primevue/select";

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

const editingRows = ref([]);

const normalizedColumns = computed(() =>
  props.columns.map((col) => ({
    ...col,
    type: col.type || "text",
    options: col.options || [],
  }))
);

const onRowEditInit = (event) => {
  // Optional: Store a copy of the original data if needed
};

const onRowEditSave = (event) => {
  // Handle saving the edited data
};

const onRowEditCancel = (event) => {
  // Revert changes if necessary
};
</script>
