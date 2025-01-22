<script lang="ts" setup>
import { TTMenuClass } from "@/components/global/TTMenu/TTMenuData";

// class="w-full h-24 p-8 text-title text-4xl bg-backgroundBlocks rounded-3xl"
</script>

<template>
  <UInput v-model="TTMenuClass.inputRef.value" placeholder="Search..."/>
</template>

<style scoped>
input:focus {
  border: 2px solid var(--title);
}
</style>