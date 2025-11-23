import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import './Header.css';

function Header({ onSearch, cartItemCount, onCartClick }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    const fetchSuggestions = async () => {
      if (searchTerm.trim().length > 0) {
        try {
          const response = await axios.get(`/api/search?q=${searchTerm}`);
          setSuggestions(response.data);
          setShowSuggestions(true);
        } catch (error) {
          console.error('Error fetching suggestions:', error);
          setSuggestions([]);
        }
      } else {
        setSuggestions([]);
        setShowSuggestions(false);
      }
    };

    const debounceTimer = setTimeout(fetchSuggestions, 300);
    return () => clearTimeout(debounceTimer);
  }, [searchTerm]);

  const handleSuggestionClick = (product) => {
    setSearchTerm(product.name);
    setShowSuggestions(false);
    setSuggestions([]);
    onSearch([product]);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (suggestions.length > 0) {
      onSearch(suggestions);
    }
    setShowSuggestions(false);
  };

  const clearSearch = () => {
    setSearchTerm('');
    setSuggestions([]);
    setShowSuggestions(false);
    onSearch([]);
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo" onClick={clearSearch}>
          <h1>🛒 ShopHub</h1>
        </div>
        
        <div className="search-container" ref={searchRef}>
          <form onSubmit={handleSearch} className="search-form">
            <input
              type="text"
              className="search-input"
              placeholder="Search for products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onFocus={() => searchTerm && setShowSuggestions(true)}
            />
            {searchTerm && (
              <button 
                type="button" 
                className="clear-button"
                onClick={clearSearch}
              >
                ✕
              </button>
            )}
            <button type="submit" className="search-button">
              🔍
            </button>
          </form>
          
          {showSuggestions && suggestions.length > 0 && (
            <div className="suggestions-dropdown">
              {suggestions.map((product) => (
                <div
                  key={product._id}
                  className="suggestion-item"
                  onClick={() => handleSuggestionClick(product)}
                >
                  <img src={product.image} alt={product.name} className="suggestion-image" />
                  <div className="suggestion-info">
                    <span className="suggestion-name">{product.name}</span>
                    <span className="suggestion-price">${product.price}</span>
                  </div>
                  <span className="suggestion-category">{product.category}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="cart-icon" onClick={onCartClick}>
          🛒
          {cartItemCount > 0 && (
            <span className="cart-badge">{cartItemCount}</span>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
