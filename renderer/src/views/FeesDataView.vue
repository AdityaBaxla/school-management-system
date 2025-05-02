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
  />
</template>

<script setup>
import { ref } from "vue";
const users = ref([
  { id: 1, name: "John Doe", email: "abc@gmail.com", role: 1 },
  { id: 2, name: "Jane Smith", email: "bcd@g.com", role: 2 },
]);

import PrimeCrudTable from "@/components/common/PrimeCrudTable.vue";
</script>
