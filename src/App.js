import './App.css';
import { Fragment, useState } from 'react';
import { ProductCard } from './components/ProductCard';
import { ProductsList } from './components/ProductsList';
import { ProductFilter } from './components/ProductFilter';

function App() {
  const products = [
    {
      imageSrc: 'images/iphone.png',
      title: 'iPhone 15 Pro',
      spec: [
        'A17 Pro Chip with 6-core GPU',
        '3x to 5x Telephoto Camera',
        'Upto 29 hours of video playback',
      ],
      count: 50,
      price: 999
    },
    {
      imageSrc: 'images/airpods.png',
      title: 'Airpods Pro 2',
      spec: [
        'Noise Cancellation',
        'Dust, sweat and water resistant',
        'Upto 6 hours of listening'
      ],
      count: 0,
      price: 249
    },
    {
      imageSrc: 'images/apple-watch.png',
      title: 'Apple Watch 9',
      spec: [
        '41mm to 45mm case range',
        'Always-on retina Display',
        'Upto 18 hours normal use'
      ],
      count: 16,
      price: 399
    }
  ];

  const [filters, setFilters] = useState({
    minPrice: 0,
    maxPrice: 999
  })

  function handleClick(product) {
    alert(`You clicked ${product.title}, price is $${product.price} and count is ${product.count}`);
  }

  function handleFilter(key, value) {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [key]: value
    }))
  }

  return (
    <div className="App">
      <ProductsList>
        {
          products.map((product) => 
            <ProductCard key={product.title} product={product} onClick={handleClick} />
          )
        }
      </ProductsList>

      <h2>Products that cost Less than $500</h2>
      <ProductFilter filters={filters} onFilter={handleFilter} />
      {
        products.filter(({price}) => price >= filters.minPrice && price <= filters.maxPrice).map(({title, price}) => (
          <Fragment key={title}>
            <hr style={{borderColor: 'slategray'}} />
            <p key={title}>{title} costs {price}</p>
          </Fragment>
        ))
      }
    </div>
  );
}

export default App;
