<template>
  <div>
    <h2>All Fees</h2>
    <TableList
      :items="fees"
      :columns="fees ? [] : ['#', 'name', 'amount']"
      :showInputRow="true"
      :title="'Fees'"
      @create-item="onCreate"
    />
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import api from "@/services/api";
import TableList from "@/components/common/TableList.vue";

const fees = ref([]);

async function fetchFees() {
  fees.value = await api.fee.getAll();
  // console.log(res.dataValues);
}

// async function getFees(){
//   try {
//     const res = await api.fees.getAll();
//     console.log(res);
//     fees.value = res;
//   } catch (err) {
//     console.error(err);
//   }
// }

function onCreate(payload) {
  console.log("Creating fee:", payload);
  api.fee.create(payload).then(() => {
    fetchFees();
  });
}

onMounted(() => {
  fetchFees();
});
</script>
