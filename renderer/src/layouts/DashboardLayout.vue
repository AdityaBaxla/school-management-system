<template>
  <div class="p-6 min-h-screen">
    <h1 class="text-2xl font-bold mb-4">Student Management</h1>
    <Navbar />
    <router-view></router-view>
  </div>
</template>

<script>
import { Button } from "@/components/ui/button";
import NavbarComponent from "@/components/NavbarComponent.vue";
import Navbar from "@/components/common/Navbar.vue";

export default {
  methods: {},
  components: {
    Button,
    NavbarComponent,
    Navbar,
  },
};
</script>

<style>
/* Add custom styles if nee ded */
</style>
