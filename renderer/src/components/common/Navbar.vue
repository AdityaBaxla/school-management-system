<template>
  <Menubar :model="items" />
</template>

<script setup>
import { ref } from "vue";
import Menubar from "primevue/menubar";

const items = ref([
  {
    label: "Dashboard",
    icon: "pi pi-home",
    to: "/",
  },
  {
    label: "Students",
    icon: "pi pi-users",
    to: "/dashboard/students",
  },
  {
    label: "Staff",
    icon: "pi pi-id-card",
    to: "/dashboard/staff",
  },
  {
    label: "Academics",
    icon: "pi pi-book",
    items: [
      {
        label: "Academic Years",
        icon: "pi pi-calendar",
        to: "/academic-years",
      },
      { label: "Classes", icon: "pi pi-th-large", to: "/classes" },
      { label: "Sections", icon: "pi pi-th-large", to: "/sections" },
      { label: "Enrollments", icon: "pi pi-user-plus", to: "/enrollments" },
    ],
  },
  {
    label: "Fees",
    icon: "pi pi-wallet",
    items: [
      { label: "Fee Types", icon: "pi pi-tags", to: "/fee-types" },
      { label: "Fee Structure", icon: "pi pi-table", to: "/dashboard/fees" },
      { label: "Invoices", icon: "pi pi-file", to: "/fee-invoices" },
      { label: "Payments", icon: "pi pi-credit-card", to: "/fee-payments" },
    ],
  },
  {
    label: "Configurations",
    icon: "pi pi-cog",
    to: "/configurations",
  },
  {
    label: "Jobs",
    icon: "pi pi-cog",
    to: "/jobs",
  },
]);
</script>

<style scoped>
/* Optional styling */
</style>
