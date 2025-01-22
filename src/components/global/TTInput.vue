<script lang="ts" setup>
import { TTMenuClass } from "@/components/global/TTMenu/TTMenuData";
</script>

<template>
  <input v-model="TTMenuClass.inputRef.value" class="w-full h-24 p-8 text-title text-4xl bg-backgroundBlocks rounded-3xl" placeholder="Search..." type="search">
</template>

<style scoped>
input:focus {
  border: 2px solid var(--title);
}
</style>