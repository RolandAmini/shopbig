<script setup lang="ts">
const { count } = useCart();
</script>

<template>
  <header class="border-b">
    <nav class="mx-auto flex max-w-4xl justify-between p-4">
      <NuxtLink to="/" class="font-bold">Shop</NuxtLink>
      <NuxtLink to="/cart">Cart ({{ count }})</NuxtLink>
    </nav>
  </header>
  <NuxtPage />
</template>