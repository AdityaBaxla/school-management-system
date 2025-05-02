<template>
  <PrimeCrudTable
    :items="users"
    :columns="[
      { field: 'name', header: 'Name' },
      { field: 'email', header: 'Email' },
      { field: 'role', header: 'Role', sortable: false },
    ]"
  />
</template>

<script setup>
import { ref } from "vue";
const users = ref([
  { id: 1, name: "John Doe", email: "abc@gmail.com", role: "Admin" },
  { id: 2, name: "Jane Smith", email: "bcd@g.com", role: "User" },
]);

import PrimeCrudTable from "@/components/common/PrimeCrudTable.vue";
</script>
