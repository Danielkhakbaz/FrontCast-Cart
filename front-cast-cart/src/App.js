import React, { Component } from "react";
import Product from "./Components/Main/Products/Product";
import Cart from "./Components/Main/Cart/Cart";
import FakeDataBase from "./Services/FakeDataBase.json";

class App extends Component {
    state = {
        products: [],
        cartItems: [],
    };
    componentDidMount() {
        const products = [FakeDataBase];
        this.setState({ products });
    }
    render() {
        const { products, cartItems } = this.state;
        return (
            <>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-8">
                            <Product allProducts={products} />
                        </div>
                        <div className="col-4">
                            <Cart cartItems={cartItems} />
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default App;
