<template>
  <DataTable :value="props.items" editable>
    <template v-for="col in props.columns" :key="col.field">
      <Column :field="col.field" :header="col.header"></Column>
    </template>
  </DataTable>
</template>

<script setup>
import { DataTable, Column } from "primevue";

const props = defineProps({
  items: {
    type: Array,
    default: () => [{ id: 1, name: "aditya" }],
  },
  columns: {
    type: Array,
    default: () => [
      { field: "id", header: "ID", type: "number", options: [] },
      { field: "name", header: "Name" },
    ],
  },
});
</script>
