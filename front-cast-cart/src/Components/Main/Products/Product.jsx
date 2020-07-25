import React from "react";

const Product = ({ AllProducts }) => {
    if (AllProducts.length === 0) {
        return null;
    }
    const products = AllProducts[0].Products;
    return (
        <>
            <h1 style={{ textAlign: "center" }}>Product</h1>
            <div className="row">
                {products.map((product) => (
                    <div
                        className="m-1 col-md-4 text-center"
                        key={product.id}
                        style={{ border: "1px solid royalblue" }}
                    >
                        <img
                            className="m-2 col-md-8"
                            src={product.image}
                            alt="img"
                            width="75%"
                            height="55%"
                        />
                        <h1>{product.title}</h1>
                        <h1>{product.price}</h1>
                        <button className="btn btn-primary">Add to Cart</button>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Product;
