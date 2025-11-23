import React, { useState } from 'react';
import './ProductCard.css';

function ProductCard({ product, onAddToCart }) {
  const [isAdding, setIsAdding] = useState(false);

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<span key={i} className="star full">⭐</span>);
    }
    if (hasHalfStar) {
      stars.push(<span key="half" className="star half">⭐</span>);
    }
    while (stars.length < 5) {
      stars.push(<span key={stars.length} className="star empty">☆</span>);
    }
    return stars;
  };

  const handleAddToCart = () => {
    setIsAdding(true);
    onAddToCart(product);
    setTimeout(() => setIsAdding(false), 600);
  };

  return (
    <div className="product-card">
      <div className="product-image-container">
        <img src={product.image} alt={product.name} className="product-image" />
        <div className="product-badge">{product.category}</div>
      </div>
      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        <div className="product-rating">
          {renderStars(product.rating)}
          <span className="rating-value">({product.rating})</span>
        </div>
        <div className="product-price">${product.price.toFixed(2)}</div>
        <button 
          className={`add-to-cart-btn ${isAdding ? 'adding' : ''}`}
          onClick={handleAddToCart}
          disabled={isAdding}
        >
          {isAdding ? '✓ Added!' : '🛒 Add to Cart'}
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
