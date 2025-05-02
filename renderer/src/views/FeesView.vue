<template>
  <div>
    <h2>All Fees</h2>
    <TableList
      :items="fees"
      :columnsConfig="feeColumnsConfig"
      :showInputRow="true"
      title="Fees"
      @create-item="onCreate"
    />
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import api from "@/services/api";
import TableList from "@/components/common/TableList.vue";

const fees = ref([]);

const academicYears = ref([
  { name: "2023-2024", id: 1 },
  { name: "2024-2025", id: 2 },
]);
const feeTypes = ref([
  { name: "Tuition", id: 1 },
  { name: "Library", id: 2 },
  { name: "Sports", id: 3 },
]);

const feeColumnsConfig = {
  name: { label: "Name", type: "text" },
  amount: { label: "Amount", type: "number" },
  feeTypeId: {
    label: "Fee Type",
    type: "select",
    options: feeTypes.value.map((f) => ({ label: f.name, value: f.id })),
  },
  academicYearName: {
    label: "Academic Year",
    type: "select",
    options: academicYears.value.map((y) => ({ label: y.name, value: y.id })),
  },
};

async function fetchFees() {
  fees.value = await api.fee.getAll();
  console.log(fees.value);
}

function onCreate(payload) {
  const filteredPayload = {};
  Object.keys(feeColumnsConfig).forEach((key) => {
    if (payload[key] !== undefined) filteredPayload[key] = payload[key];
  });

  api.fee.create(filteredPayload).then(() => {
    fetchFees();
  });
}

onMounted(() => {
  fetchFees();
});
</script>
