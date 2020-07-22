import React from "react";

const Cart = ({ cartItems }) => {
    return (
        <>
            <h1 style={{ textAlign: "center" }}>Cart</h1>
            <h2>
                {cartItems.length === 0
                    ? "The Cart is Empty!"
                    : `You Have ${cartItems.length} Items in The Cart!`}
            </h2>
        </>
    );
};

export default Cart;
