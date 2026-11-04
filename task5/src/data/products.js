const adjectives = [
  'Classic', 'Modern', 'Compact', 'Premium', 'Rustic',
  'Smart', 'Eco', 'Vintage', 'Sleek', 'Sturdy',
];
const items = ['Lamp', 'Chair', 'Desk', 'Mug', 'Backpack', 'Notebook'];

const products = Array.from({ length: 60 }, (_, i) => ({
  id: i + 1,
  name: `${adjectives[i % 10]} ${items[Math.floor(i / 10)]}`,
  price: 10 + ((i * 37) % 90),
}));

export default products;