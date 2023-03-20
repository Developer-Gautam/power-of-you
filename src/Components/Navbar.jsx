import React from 'react'

const Navbar = () => {
    return (
        <div style={{ display: "flex", gap: "40px", alignItems: "center" }}>
            <h1>Grocery Shopping</h1>
            <button><a href='/cart'>cart</a></button>
        </div>
    )
}

export default Navbar