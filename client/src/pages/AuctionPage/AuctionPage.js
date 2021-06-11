import React from 'react';
import { Component } from "react";
import axios from "axios";

class AuctionPage extends Component {

    state = {
        products: [],
    }

    getProduct() {
        axios
          .get(`http://localhost:5000/auction`)
          .then((product) => {
            this.setState({
              products: product,
            });
          })
          .catch((err) => console.error(err));
      }
    
    componentDidMount() {
        this.getProduct();
    }
    

    render() {

        if (this.state.product === []) {
            return <h1>Loading. . .</h1>;
          }

        return (
            <section className="auction">
                <h1 className="auction__header">Auction Page</h1>
                {console.log(this.state.products.data)}
            </section>
    
        )
    }
}

export default AuctionPage;