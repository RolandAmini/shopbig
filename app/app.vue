<script setup lang="ts">
const { count } = useCart();
</script>

<template>
  <div class="flex min-h-screen flex-col">
    <header class="bg-ink text-white">
      <nav class="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <NuxtLink to="/" class="font-display text-xl font-semibold">Jewellery Shop</NuxtLink>
        <NuxtLink to="/cart" class="rounded-full bg-gold px-4 py-1.5 text-sm font-semibold text-ink">
          Cart ({{ count }})
        </NuxtLink>
      </nav>
    </header>
    <div class="flex-1">
      <NuxtPage />
    </div>
    <footer class="bg-ink px-6 py-8 text-center text-sm text-white/70">
      Demo store built with Nuxt and Tailwind.
    </footer>
  </div>
</template>