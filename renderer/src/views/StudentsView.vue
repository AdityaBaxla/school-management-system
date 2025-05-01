<template>
  <div>
    <h2>All Students</h2>
    <table class="min-w-full border-collapse">
      <thead>
        <tr class="bg-gray-200">
          <th class="px-4 py-2 text-left">#</th>
          <!-- <th class="px-4 py-2 text-left">Admission #</th> -->
          <th class="px-4 py-2 text-left">Name</th>
          <th class="px-4 py-2 text-left">Roll No.</th>
          <th class="px-4 py-2 text-left">Class</th>
          <!-- <th class="px-4 py-2 text-left">Section</th>
            <th class="px-4 py-2 text-left">Adhaar No.</th>
            <th class="px-4 py-2 text-left">Date of Admission</th>
            <th class="px-4 py-2 text-left">Status</th> -->
          <th class="px-4 py-2 text-left">Actions</th>
        </tr>
      </thead>
      <tbody>
        <!-- New‐student input row -->
        <tr class="border-t bg-gray-50">
          <td class="px-4 py-2 text-gray-500">—</td>
          <td class="px-4 py-2">
            <input
              v-model="newStudent.firstName"
              type="text"
              placeholder="Name"
              class="w-full border rounded px-2 py-1"
            />
          </td>
          <td class="px-4 py-2">
            <input
              v-model.number="newStudent.rollNo"
              type="number"
              placeholder="Age"
              class="w-full border rounded px-2 py-1"
            />
          </td>
          <td class="px-4 py-2">
            <input
              v-model="newStudent.class"
              type="text"
              placeholder="Class"
              class="w-full border rounded px-2 py-1"
            />
          </td>
          <td class="px-4 py-2">
            <button
              @click="createStudent"
              :disabled="creating"
              class="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50"
            >
              {{ creating ? "Adding…" : "Add" }}
            </button>
          </td>
        </tr>

        <!-- Existing students -->
        <tr
          v-for="student in students"
          :key="student.id"
          class="border-t hover:bg-gray-50"
        >
          <td class="px-4 py-2">{{ student.id }}</td>
          <td class="px-4 py-2">{{ student.firstName }}</td>
          <td class="px-4 py-2">{{ student.rollNo }}</td>
          <td class="px-4 py-2">{{ student.class }}</td>
          <td class="px-4 py-2">—</td>
        </tr>
      </tbody>
    </table>

    <p v-if="loading" class="mt-4">Loading…</p>
    <p v-if="error" class="mt-4 text-red-600">Error: {{ error }}</p>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import api from "@/services/api";

const students = ref([
  { id: 1, name: "dummy", age: 10, class: "X" },
  { id: 2, name: "bunny", age: 20, class: "V" },
]);
const loading = ref(false);
const error = ref(null);
const creating = ref(false);
const newStudent = ref({ firstName: "", age: null, roll_no: null, class: "" });

async function fetchStudents() {
  loading.value = true;
  error.value = null;
  try {
    const res = await api.student.getAll();
    console.log(res);
    students.value = res;
  } catch (err) {
    error.value = err.message;
  } finally {
    loading.value = false;
  }
}

async function createStudent() {
  // simple validation
  // if (
  //   !newStudent.value.first_name ||
  //   newStudent.value.rollNo == null ||
  //   !newStudent.value.class
  // ) {
  //   return alert("Please fill out all fields.");
  // }

  creating.value = true;
  try {
    // this returns the created student object (or throws)
    const created = await api.student.create({ ...newStudent.value });

    // reset form
    newStudent.value = { first_name: "", rollNo: null, class: "" };

    // update your local list in‐place, or re-fetch
    // students.value.push(created);
    await fetchStudents();
  } catch (err) {
    console.error("createStudent error:", err);
    alert(`Failed to add student: ${err.message || err}`);
  } finally {
    creating.value = false;
  }
}

onMounted(fetchStudents);
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
