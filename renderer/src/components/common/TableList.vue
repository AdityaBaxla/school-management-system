<template>
  <div>
    <h2 v-if="title" class="text-xl font-semibold mb-4">{{ title }}</h2>
    <table class="min-w-full border-collapse">
      <thead>
        <tr class="bg-gray-200">
          <th
            v-for="(config, field) in columnsConfig"
            :key="config.label"
            class="px-4 py-2 text-left capitalize"
          >
            {{ config.label }}
          </th>
          <th class="px-4 py-2 text-left">Actions</th>
        </tr>
      </thead>
      <tbody>
        <!-- Input row for new item -->
        <tr v-if="showInputRow" class="border-t bg-gray-50">
          <td
            v-for="(config, field) in columnsConfig"
            :key="'input-' + field"
            class="px-4 py-2"
          >
            <template v-if="config.type === 'select'">
              <select
                v-model="newItem[field]"
                class="w-full border rounded px-2 py-1"
              >
                <option
                  v-for="opt in config.options"
                  :key="opt.value"
                  :value="opt.value"
                >
                  {{ opt.label }}
                </option>
              </select>
            </template>

            <template v-else>
              <input
                v-model="newItem[field]"
                :placeholder="config.label"
                class="w-full border rounded px-2 py-1"
                :type="config.type || 'text'"
              />
            </template>
          </td>

          <td class="px-4 py-2">
            <button
              @click="createItem"
              class="bg-green-500 text-white px-3 py-1 rounded"
            >
              Add
            </button>
          </td>
        </tr>

        <tr v-for="(item, index) in items" :key="index" class="border-t">
          <td
            v-for="(label, field) in columnsConfig"
            :key="field"
            class="px-4 py-2"
          >
            {{ item[field] }}
          </td>
          <td class="px-4 py-2">
            <!-- Add any edit/delete buttons here if needed -->
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref } from "vue";
const props = defineProps({
  items: { type: Array, default: () => [] },
  columnsConfig: { type: Object, required: true },
  showInputRow: { type: Boolean, default: false },
  title: { type: String, default: "" },
});

const emit = defineEmits(["create-item"]);

const newItem = ref({});

function createItem() {
  emit("create-item", { ...newItem.value });
  newItem.value = {};
}
</script>
