import React from 'react';
import './Filters.css';

function Filters({ selectedCategory, onCategoryChange, priceRange, onPriceRangeChange }) {
  const categories = ['All', 'Electronics', 'Clothing', 'Sports', 'Home & Kitchen', 'Books'];
  const priceRanges = [
    { label: 'All Prices', min: 0, max: Infinity },
    { label: 'Under $50', min: 0, max: 50 },
    { label: '$50 - $100', min: 50, max: 100 },
    { label: '$100 - $500', min: 100, max: 500 },
    { label: 'Over $500', min: 500, max: Infinity }
  ];

  return (
    <div className="filters">
      <div className="filter-group">
        <h3>Category:</h3>
        <select 
          value={selectedCategory} 
          onChange={(e) => onCategoryChange(e.target.value)}
          className="category-select"
        >
          {categories.map(category => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      <div className="filter-group">
        <h3>Price Range:</h3>
        <select 
          value={priceRange} 
          onChange={(e) => onPriceRangeChange(e.target.value)}
          className="category-select"
        >
          {priceRanges.map((range, index) => (
            <option key={index} value={index}>
              {range.label}
            </option>
          ))}
        </select>
      </div>

      <div className="filter-stats">
        <span className="filter-icon">🔍</span>
        <span>Find your perfect product</span>
      </div>
    </div>
  );
}

export default Filters;
