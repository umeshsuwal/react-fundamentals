import { useEffect, useState } from 'react';

function ProductList({ products, onSelect }) {
  const [search, setSearch] = useState('');
  const [sortBy, setSortBy] = useState('name');
  const [filtered, setFiltered] = useState([]);

  console.count('list renders');

  // This state update is intentional: stage 0 demonstrates the derived-state effect.
  /* eslint-disable react-hooks/set-state-in-effect */
  useEffect(() => {
    let result = products.filter((p) =>
      p.name.toLowerCase().includes(search.toLowerCase())
    );
    result = result.sort((a, b) => (a[sortBy] > b[sortBy] ? 1 : -1));
    setFiltered(result);
    document.title = `Showing ${result.length} products`;
  }, [products, search, sortBy]);
  /* eslint-enable react-hooks/set-state-in-effect */

  return (
    <div>
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search products"
        aria-label="Search products"
      />
      <select
        value={sortBy}
        onChange={(e) => setSortBy(e.target.value)}
        aria-label="Sort by"
      >
        <option value="name">Name</option>
        <option value="price">Price</option>
      </select>

      {filtered.map((p) => (
        <ProductRow
          key={p.id}
          product={p}
          onClick={() => onSelect(p.id)}
        />
      ))}
    </div>
  );
}

function ProductRow({ product, onClick }) {
  console.log('Rendering row', product.id);
  console.count('row renders');
  return <div onClick={onClick}>{product.name}</div>;
}

export default ProductList;
