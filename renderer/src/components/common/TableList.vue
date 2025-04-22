<template>
    <div>
      <h2 v-if="title" class="text-xl font-semibold mb-4">{{ title }}</h2>
      <table class="min-w-full border-collapse">
        <thead>
          <tr class="bg-gray-200">
            <th
              v-for="col in dynamicColumns"
              :key="col"
              class="px-4 py-2 text-left capitalize"
            >
              {{ col }}
            </th>
            <th class="px-4 py-2 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          <!-- Input row for new item -->
          <tr v-if="showInputRow && dynamicColumns.length" class="border-t bg-gray-50">
            <td
              v-for="col in dynamicColumns"
              :key="'input-' + col"
              class="px-4 py-2"
            >
              <template v-if="col !== 'id'">
                <input
                  v-model="newItem[col]"
                  :placeholder="col"
                  class="w-full border rounded px-2 py-1"
                />
              </template>
              <template v-else>&mdash;</template>
            </td>
            <td class="px-4 py-2">
              <button
                @click="onCreate"
                class="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600"
              >
                Add
              </button>
            </td>
          </tr>
  
          <!-- Data rows -->
          <tr
            v-for="(item, index) in items"
            :key="item.id || index"
            class="border-t hover:bg-gray-50"
          >
            <template v-if="editingRow === index">
              <td
                v-for="col in dynamicColumns"
                :key="col"
                class="px-4 py-2"
              >
                <template v-if="col !== 'id'">
                  <input
                    v-model="editItem[col]"
                    class="w-full border rounded px-2 py-1"
                  />
                </template>
                <template v-else>{{ item[col] }}</template>
              </td>
              <td class="px-4 py-2">
                <button
                  @click="onUpdate(index)"
                  class="px-2 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 mr-2"
                >
                  Save
                </button>
                <button
                  @click="onCancel"
                  class="px-2 py-1 bg-gray-400 text-white rounded hover:bg-gray-500"
                >
                  Cancel
                </button>
              </td>
            </template>
            <template v-else>
              <td
                v-for="col in dynamicColumns"
                :key="col"
                class="px-4 py-2"
              >
                {{ item[col] }}
              </td>
              <td class="px-4 py-2">
                <button
                  @click="startEdit(index)"
                  class="px-2 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600 mr-2"
                >
                  Edit
                </button>
                <button
                  @click="() => emit('delete-item', item)"
                  class="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                >
                  Delete
                </button>
              </td>
            </template>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script setup>
  import { ref, reactive, computed, watch } from 'vue';
  
  // Props: items array, optional columns, showInputRow, and title
  const props = defineProps({
    items: { type: Array, default: () => [] },
    columns: { type: Array, default: () => [] },
    showInputRow: { type: Boolean, default: false },
    title: { type: String, default: '' }
  });
  
  // Events: create-item, update-item, delete-item
  const emit = defineEmits(['create-item', 'update-item', 'delete-item']);
  
  // State for new and editing rows
  const newItem = reactive({});
  const editItem = reactive({});
  const editingRow = ref(null);
  
  // Determine columns dynamically if not provided
  const dynamicColumns = computed(() => {
    return props.columns.length
      ? props.columns
      : props.items.length
      ? Object.keys(props.items[0])
      : [];
  });
  
  // Initialize newItem keys when columns change
  watch(
    dynamicColumns,
    (cols) => {
      cols.forEach((col) => {
        if (col !== 'id') newItem[col] = '';
      });
    },
    { immediate: true }
  );
  
  // Emit creation and reset inputs
  function onCreate() {
    const payload = { ...newItem };
    emit('create-item', payload);
    dynamicColumns.value.forEach((col) => {
      if (col !== 'id') newItem[col] = '';
    });
  }
  
  // Start editing a specific row
  function startEdit(index) {
    editingRow.value = index;
    const itemCopy = props.items[index];
    Object.keys(itemCopy).forEach((k) => (editItem[k] = itemCopy[k]));
  }
  
  // Confirm update and clear editing state
  function onUpdate(index) {
    emit('update-item', { ...editItem });
    editingRow.value = null;
  }
  
  // Cancel editing
  function onCancel() {
    editingRow.value = null;
  }
  </script>
  
  <style scoped>
  table {
    border: 1px solid #ccc;
  }
  th,
  td {
    border: 1px solid #ddd;
  }
  input {
    outline: none;
  }
  button {
    cursor: pointer;
  }
  </style>
  