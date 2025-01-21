<script lang="ts" setup>
import type { IProduct } from "~/components/global/TTMenu/TTMenuTypes";
import { fetchProducts } from "@/components/global/TTMenu/TTMenuData";

const products = ref<IProduct[]>([]);
const loading = ref(true);
const error = ref<string | null>(null);

const loadProducts = async () => {
  loading.value = true;
  error.value = null;

  const data = await fetchProducts();
  if (data && data.products) products.value = data.products;
  else error.value = 'Failed to load products';

  loading.value = false;
};

onMounted(loadProducts);
</script>

<template>
  <div class="h-full text-title sm:p-2 max-sm:px-1 max-sm:py-4">
    <div class="h-full overflow-y-scroll scrollbar scrollbar-w-2 scrollbar-thumb-rounded-full scrollbar-thumb-other scrollbar-h-2">
      <div v-if="loading">Loading...</div>
      <div v-else-if="error" class="text-xl text-red-600">{{ Error }}</div>
      <div v-else>
        <ul class="grid grid-rows-1 gap-6">
          <li v-for="product in products" :key="product.id" class="flex items-center gap-1 sm:gap-4">
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