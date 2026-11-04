import { useState, useCallback } from 'react';
import ProductList from './components/ProductList';
import products from './data/products';

function App() {
  const [selectedId, setSelectedId] = useState(null);

  const handleSelect = useCallback((id) => setSelectedId(id), []);

  return (
    <div style={{ padding: '1rem' }}>
      <h1>Products</h1>
      <p>Selected product id: {selectedId ?? 'none'}</p>
      <ProductList products={products} onSelect={handleSelect} />
    </div>
  );
}

export default App;