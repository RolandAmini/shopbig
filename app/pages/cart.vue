<script setup lang="ts">
const { items, remove, clear, total } = useCart();
const done = ref(false);

const checkout = () => {
  clear();
  done.value = true;
};
</script>

<template>
  <main class="mx-auto max-w-2xl p-6">
    <h1 class="mb-6 text-3xl font-bold">Your cart</h1>

    <p v-if="done" class="rounded border p-4">Thank you! This is a demo checkout, no payment was made.</p>

    <p v-else-if="!items.length">Your cart is empty.</p>

    <div v-else>
      <ul class="divide-y">
        <li v-for="i in items" :key="i.id" class="flex items-center justify-between py-3">
          <span>{{ i.name }} x {{ i.qty }}</span>
          <span>
            ${{ i.price * i.qty }}
            <button class="ml-4 text-sm underline" @click="remove(i.id)">Remove</button>
          </span>
        </li>
      </ul>
      <p class="mt-4 text-xl font-semibold">Total: ${{ total }}</p>
      <button class="mt-4 rounded bg-black px-4 py-2 text-white" @click="checkout">
        Checkout (demo)
      </button>
    </div>
  </main>
</template>