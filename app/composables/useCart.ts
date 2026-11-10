type CartItem = { id: number; slug: string; name: string; price: number; qty: number };

export const useCart = () => {
  const items = useState<CartItem[]>("cart", () => []);

  const add = (p: { id: number; slug: string; name: string; price: number }) => {
    const found = items.value.find((i) => i.id === p.id);
    if (found) found.qty++;
    else items.value.push({ ...p, qty: 1 });
  };

  const remove = (id: number) => {
    items.value = items.value.filter((i) => i.id !== id);
  };

  const clear = () => {
    items.value = [];
  };

  const count = computed(() => items.value.reduce((n, i) => n + i.qty, 0));
  const total = computed(() => items.value.reduce((n, i) => n + i.price * i.qty, 0));

  return { items, add, remove, clear, count, total };
};