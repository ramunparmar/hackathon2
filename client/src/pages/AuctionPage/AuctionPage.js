import React from 'react';
import { Component } from "react";
import BackArrow from '../../assets/icons/arrow_back_purple.svg';
import Bookmark from '../../assets/icons/bookmark.svg';
import axios from "axios";
import './AuctionPage.scss';

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
              <nav className="auction__nav">
                  <img className="auction__icon" src={BackArrow} alt="menu"/>
                  <h1>Details</h1>
                  <img className="auction__icon" src={Bookmark} alt="user"/>
              </nav>
              <div className="auction__item">
                <div className="auction__item__container">
                  <div className="auction__item__preview">
                  ▶ Preview
                  </div>
                  <div className="auction__item__details">
                    <h1>Outside</h1>
                    <h2>The Scotts</h2>
                    <p>This song was created as a digital asset to be sold on the NFT marketplace. Only twenty NFTs will ever be released associated with this song.</p>
                  </div>
                  <div className="auction__item__bid">
                    
                  </div>
                  <div className="auction__item__button">
                    <button>Make an Offer</button>
                  </div>
                </div>
              </div>
              <div className="auction__offers">
                <h1 className="auction__offers__header">Offer History</h1>
                <div>Offer 1</div>
                <div>Offer 2</div>
                <div>Offer 3</div>
              </div>
                {console.log(this.state.products.data)}
            </section>
    
        )
    }
}

export default AuctionPage;