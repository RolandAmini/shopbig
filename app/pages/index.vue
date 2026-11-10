<script setup lang="ts">
const { data: products } = await useFetch("/api/products");
</script>

<template>
  <main class="mx-auto max-w-4xl p-6">
    <h1 class="mb-6 text-3xl font-bold">Our products</h1>
    <ul class="grid gap-4 sm:grid-cols-3">
      <li v-for="p in products" :key="p.id">
        <NuxtLink
          :to="`/products/${p.slug}`"
          class="block rounded-lg border p-4 hover:bg-gray-50"
        >
          <h2 class="font-semibold">{{ p.name }}</h2>
          <p class="text-gray-600">${{ p.price }}</p>
        </NuxtLink>
      </li>
    </ul>
  </main>
</template>