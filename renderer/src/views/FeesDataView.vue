<template>
  <PrimeCrudTable
    :items="users"
    :columns="[
      { field: 'name', header: 'Name' },
      { field: 'email', header: 'Email' },
      {
        field: 'role',
        header: 'Role',
        sortable: false,
        type: 'dropdown',
        options: [
          { label: 'Admin', value: 1 },
          { label: 'User', value: 2 },
        ],
      },
    ]"
    @row-edit-save="createData"
  />
</template>

<script setup>
import { ref } from "vue";
const users = ref([
  { id: 1, name: "John Doe", email: "abc@gmail.com", role: 1 },
  { id: 2, name: "Jane Smith", email: "bcd@g.com", role: 2 },
]);

const createData = (payload) => {
  console.log(payload);
  const filteredPayload = {};
  Object.keys(payload).forEach((key) => {
    if (payload[key] !== undefined) filteredPayload[key] = payload[key];
  });

  console.log("Creating data with payload:", filteredPayload);
};

import PrimeCrudTable from "@/components/common/PrimeCrudTable.vue";
</script>
