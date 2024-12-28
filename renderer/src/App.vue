<template>
  <div class="p-6 bg-gray-100 min-h-screen">
    <h1 class="text-2xl font-bold mb-4">Student Management</h1>
    <button
      class="px-4 py-2 bg-blue-500 text-white rounded shadow"
      @click="addStudent"
    >
      Add Student Not here
    </button>
  </div>
</template>

<script>
export default {
  methods: {
    addStudent() {
      window.electronAPI.sendMessage("Add a new student");
    },
  },
};
</script>

<style>
/* Add custom styles if needed */
</style>
