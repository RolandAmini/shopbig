<script setup lang="ts">
const route = useRoute();
const { data: product } = await useFetch(`/api/products/${route.params.slug}`);
const { add } = useCart();

useSeoMeta({
  title: () => `${product.value?.name} | Shop`,
  description: () => product.value?.description,
});
</script>

<template>
  <main v-if="product" class="mx-auto max-w-2xl p-6">
    <NuxtLink to="/" class="text-sm text-gray-600 underline">Back to products</NuxtLink>
    <h1 class="mt-4 text-3xl font-bold">{{ product.name }}</h1>
    <p class="mt-2 text-xl">${{ product.price }}</p>
    <p class="mt-4 text-gray-700">{{ product.description }}</p>
    <button
      class="mt-6 rounded bg-black px-4 py-2 text-white"
      @click="add(product)"
    >
      Add to cart
    </button>
  </main>
</template>