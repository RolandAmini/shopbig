<script setup lang="ts">
const { data: products } = await useFetch("/api/products");

useSeoMeta({
  title: "Jewellery Shop | Gold, Silver and Pearl Pieces",
  description: "Browse our collection of gold rings, silver necklaces and pearl earrings.",
  ogTitle: "Jewellery Shop | Gold, Silver and Pearl Pieces",
  ogDescription: "Browse our collection of gold rings, silver necklaces and pearl earrings.",
});
</script>

<template>
  <section class="bg-ink text-white">
    <div class="mx-auto max-w-5xl px-6 py-16 sm:py-24">
      <h1 class="font-display max-w-xl text-4xl font-semibold sm:text-6xl">
        Gold, silver and pearl, made to wear every day.
      </h1>
      <p class="mt-4 max-w-md text-white/80">Three pieces, simply made and ready to ship.</p>
      <a href="#collection" class="mt-8 inline-block rounded-full bg-gold px-6 py-3 font-semibold text-ink">
        See the collection
      </a>
    </div>
  </section>

  <main id="collection" class="mx-auto max-w-5xl px-6 py-12">
    <h2 class="font-display mb-8 text-3xl font-semibold text-ink">The collection</h2>
    <ul class="grid gap-6 sm:grid-cols-3">
      <li v-for="p in products" :key="p.id">
        <NuxtLink :to="`/products/${p.slug}`" class="block overflow-hidden rounded-xl bg-white ring-1 ring-line">
          <NuxtImg
            :src="p.image"
            :alt="p.name"
            width="600"
            height="400"
            format="webp"
            loading="lazy"
            class="aspect-[3/2] w-full object-cover"
          />
          <div class="p-4">
            <h3 class="font-display text-lg font-semibold text-ink">{{ p.name }}</h3>
            <p class="mt-1 font-semibold text-gold-dark">${{ p.price }}</p>
          </div>
        </NuxtLink>
      </li>
    </ul>
  </main>
</template>