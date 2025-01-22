<script lang="ts" setup>
import { TTMenuClass } from "@/components/global/TTMenu/TTMenuData";

const handleScroll = () => {
  const scrollContainer = document.querySelector('.overflow-y-scroll');
  if (!scrollContainer) return;

  const { scrollTop, scrollHeight, clientHeight } = scrollContainer;
  if (scrollTop + clientHeight >= scrollHeight - 100) TTMenuClass.loadData(false);
};

onMounted(() => {
  const scrollContainer = document.querySelector('.overflow-y-scroll');
  if (scrollContainer) scrollContainer.addEventListener('scroll', handleScroll);

  TTMenuClass.loadData(true);
});

onUnmounted(() => {
  const scrollContainer = document.querySelector('.overflow-y-scroll');
  if (scrollContainer) scrollContainer.removeEventListener('scroll', handleScroll);
});
</script>

<template>
  <div class="h-full text-title sm:p-2 max-sm:px-1 max-sm:py-4">
    <div class="h-full overflow-y-scroll scrollbar scrollbar-w-2 scrollbar-thumb-rounded-full scrollbar-thumb-other scrollbar-h-2">
      <!-- <div v-if="TTMenuClass.error.value" class="text-xl text-red-600">{{ TTMenuClass.error.value }}</div> -->
      <div>
        <ul v-auto-animate="{ duration: 250 }" class="grid grid-rows-1 gap-6">
          <li v-for="product in TTMenuClass.filter.value" :key="product.id" class="flex items-center gap-1 sm:gap-4">
            <NuxtImg :src="product.images[0]" width="100"/>
            <div class="flex flex-col gap-2">
              <div>
                <h1 class="text-lg font-bold">{{ product.title }}</h1>
                <h3 class="truncate w-full max-w-md text-md text-description">{{ product.description }}</h3>
              </div>
              <div class="flex gap-8 font-bold">
                <p class="text-discount">Discount {{ product.discountPercentage }} %</p>
                <p class="text-other">{{ product.brand }}</p>
              </div>
              <div class="flex gap-6 font-bold">
                <p class="text-other">$ {{ product.price }}</p>
                <p class="text-other">R {{ product.rating }}</p>
                <p class="text-sm rounded-xl px-2.5 py-0.75 bg-categoryBg text-categoryText">{{ product.category }}</p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>