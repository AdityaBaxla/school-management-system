<template>
  <div>
    <h2>All Fees</h2>
    <TableList
      :items="[{ name: 'why', fees: 20 }]"
      :columns="['name', 'fees']"
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
  fees.value = await api.fees.getAll();
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
  api.fees.create(payload).then(() => {
    fetchFees();
  });
}

onMounted(() => {
  fetchFees();
});
</script>
