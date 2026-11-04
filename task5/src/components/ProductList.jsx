import React, { useCallback, useEffect, useMemo, useState } from 'react';

const ProductRow = React.memo(function ProductRow({ product, onSelect }) {
  console.log('Rendering row', product.id);
  console.count('row renders');
  return <div onClick={() => onSelect(product.id)}>{product.name}</div>;
});

function ProductList({ products, onSelect }) {
  const [search, setSearch] = useState('');
  const [sortBy, setSortBy] = useState('name');

  console.count('list renders');

  const filtered = useMemo(() => {
    let result = products.filter((p) =>
      p.name.toLowerCase().includes(search.toLowerCase())
    );
    result = result.sort((a, b) => (a[sortBy] > b[sortBy] ? 1 : -1));
    return result;
  }, [products, search, sortBy]);

  useEffect(() => {
    document.title = `Showing ${filtered.length} products`;
  }, [filtered.length]);

  const handleSelect = useCallback((id) => onSelect(id), [onSelect]);

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
          onSelect={handleSelect}
        />
      ))}
    </div>
  );
}

export default ProductList;
