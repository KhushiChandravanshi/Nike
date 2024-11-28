import React, { useState } from 'react';
import './Header.css';

const Header = () => {
    const [cartCount, setCartCount] = useState(0);
    const [query, setQuery] = useState('');

    const handleSearch = () => {
        alert(`You searched for: ${query}`);
    };

    const handleAddToCart = () => {
        setCartCount(cartCount + 1);
        alert("Item added to cart!");
    };

    const handleOpenCart = () => {
        alert(`You have ${cartCount} items in your cart.`);
    };

    return (
        <>
            <header>
                <img src="https://i.ibb.co/RcHvfrJ/nike.png" alt="logo" width="120px" height="50px" />
                <div className="search-container">
                    <input
                        type="text"
                        id="searchInput"
                        placeholder="Search..."
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                    />
                    <button onClick={handleSearch}>Search</button>
                </div>
                <div className="eye">
                    <div className="mouse">
                        <button onClick={handleAddToCart} className="add">Add to Cart</button>
                        <button onClick={handleOpenCart} className="cart">Cart (<span id="cartCount">{cartCount}</span>)</button>
                    </div>
                </div>
                <select className="cart black">
                    <option className="cart blue">Login</option>
                    <option className="cart blue">Logout</option>
                </select>
                <details className="her">
                    <summary><button className="cart">Seller</button></summary>
                    <h3 className="khushi">khushi chandravanshi</h3>
                </details>
                <span className="glyphicon glyphicon-qrcode edit"></span>
                <span className="glyphicon glyphicon-bell delete"></span>
            </header>
        </>
    );
}

export default Header;
