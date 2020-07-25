import React from "react";

const Cart = ({ CartItems }) => {
    return (
        <>
            <h1 style={{ textAlign: "center" }}>Cart</h1>
            <h2>
                {CartItems.length === 0
                    ? "The Cart is Empty!"
                    : `You Have ${CartItems.length} Items in The Cart!`}
            </h2>
        </>
    );
};

export default Cart;
