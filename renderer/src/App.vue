<template>
  <div class="p-6 bg-gray-100 min-h-screen">
    <h1 class="text-2xl font-bold mb-4">Student Management</h1>
    <NavbarComponent />
    <router-view></router-view>
  </div>
</template>

<script>
import { Button } from "@/components/ui/button";
import NavbarComponent from "@/components/NavbarComponent.vue";

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
  components: {
    Button,
    NavbarComponent,
  },
};
</script>

<style>
/* Add custom styles if nee ded */
</style>
