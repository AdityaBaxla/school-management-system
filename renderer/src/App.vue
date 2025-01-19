<template>
  <!-- <div class="p-6 bg-gray-100 min-h-screen">
    <h1 class="text-2xl font-bold mb-4">Student Management</h1>
    <button
      class="px-4 py-2 bg-blue-500 text-white rounded shadow"
      @click="addStudent"
    >
      Add Student
    </button>
    <button @click="testPing">Test Ping</button>
  </div> -->
  <div>
    <RouterLink to="/">home</RouterLink>
    <RouterLink to="/router">test</RouterLink>
    <RouterView />
    <button @click="addStudent">Add Student</button>
    <button @click="testPing">Test Ping</button>
    <Button>Click me</Button>
    <h1 class="text-3xl font-bold underline">Hello world!</h1>
  </div>
</template>

<script>
import { Button } from "@/components/ui/button";

export default {
  methods: {
    addStudent() {
      window.electronAPI.sendMessage("Add a new student");
      console.log("wow");
    },
    testPing() {
      window.api.test();
    },
  },
};
</script>

<style>
/* Add custom styles if nee ded */
</style>
