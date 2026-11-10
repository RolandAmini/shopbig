<script setup lang="ts">
interface Product {
  id: number;
  name: string;
  price: number;
}

const products: Product[] = [
  { id: 1, name: "Gold ring", price: 120 },
  { id: 2, name: "Silver necklace", price: 85 },
  { id: 3, name: "Pearl earrings", price: 60 },
];
</script>

<template>
  <main class="mx-auto max-w-4xl p-6">
    <h1 class="mb-6 text-3xl font-bold">Our products</h1>
    <ul class="grid gap-4 sm:grid-cols-3">
      <li v-for="p in products" :key="p.id" class="rounded-lg border p-4 shadow-sm">
        <h2 class="font-semibold text-lg">{{ p.name }}</h2>
        <p class="text-gray-600">${{ p.price }}</p>
      </li>
    </ul>
  </main>
</template>