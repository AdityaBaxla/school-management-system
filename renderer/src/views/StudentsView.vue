<template>
  <div>
    <PrimeCrudTable
      :items="students"
      :columns="displayFields"
      :showInputRow="true"
      title="Students"
      @item-create="createStudent"
      @row-edit-save="editStudent"
      :loading="loading"
      :error="error"
    ></PrimeCrudTable>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import PrimeCrudTable from "@/components/common/PrimeCrudTable.vue";
import api from "@/services/api";

const students = ref([]);
const loading = ref(false);
const error = ref(null);
const creating = ref(false);
const newStudent = ref({ firstName: "", age: null, roll_no: null, class: "" });

const displayFields = [
  { header: "ID", field: "id", editable: false },
  // { header: "Name", field: "name" },
  { header: "First Name", field: "firstName" },
  { header: "Last Name", field: "lastName" },
  { header: "Admission #", field: "admissionNumber" },
  { header: "Class Section", field: "section" },
  // { header: "Adhaar No.", field: "adhaarNo" },
  // { header: "Date of Admission", field: "dateOfAdmission" },
  // { header: "Date of Birth", field: "dateOfBirth" },
  // { header: "Status", field: "status" },
  // { header: "Roll No.", field: "rollNo" },
  // { header: "Parent #", field: "parentContact" },
];

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

async function createStudent(newStudent) {
  // simple validation
  try {
    // this returns the created student object (or throws)
    console.log("Creating student with data:", newStudent);
    const created = await api.student.create({ ...newStudent });

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

async function editStudent(student) {
  // simple validation
  try {
    // this returns the created student object (or throws)
    console.log("Editing student with data:", student);
    const edited = await api.student.update(student.id, { ...student });

    // update your local list in‐place, or re-fetch
    // students.value.push(created);
    await fetchStudents();
  } catch (err) {
    console.error("editStudent error:", err);
    alert(`Failed to edit student: ${err.message || err}`);
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
