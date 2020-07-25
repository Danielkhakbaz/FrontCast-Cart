import React, { Component } from "react";
import Product from "./Components/Main/Products/Product";
import Cart from "./Components/Main/Cart/Cart";
import FakeDataBase from "./Services/FakeDataBase.json";

class App extends Component {
    state = {
        Products: [],
        CartItems: [],
    };
    componentDidMount() {
        const Products = [FakeDataBase];
        this.setState({ Products });
    }
    render() {
        const { Products, CartItems } = this.state;
        return (
            <>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-8">
                            <Product AllProducts={Products} />
                        </div>
                        <div className="col-4">
                            <Cart CartItems={CartItems} />
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default App;
