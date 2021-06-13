import React from 'react';
import { Component } from "react";
import BackArrow from '../../assets/icons/arrow_back_purple.svg';
import Bookmark from '../../assets/icons/bookmark.svg';
import Fortmatic from '../../assets/images/Make Offer/fortmatic.png';
import Metamask from '../../assets/images/Make Offer/metamask.png';
import './AuctionPage.scss';

class AuctionPage extends Component {

    state = {
        // products: [],
        toggleModal: false,
    }

    openModal = () => {
      this.setState({
        toggleModal: true,
      });
    };

    closeModal = () => {
      this.setState({
        toggleModal: false,
      });
    };

    // getProduct() {
    //     axios
    //       .get(`http://localhost:5000/auction`)
    //       .then((product) => {
    //         this.setState({
    //           products: product,
    //         });
    //       })
    //       .catch((err) => console.error(err));
    //   }
    
    // componentDidMount() {
    //     this.getProduct();
    // }
    

    render() {

        if (this.state.product === []) {
            return <h1>Loading. . .</h1>;
          }

        return (

          <>

          {this.state.toggleModal ? (
                <section className='modal'>
                  <div className="modal__outer-container">
                    <div className='modal__wrapper'>
                      <div className='modal__text-container'>
                        <button onClick={this.closeModal} className='modal__close-btn'>
                          X
                        </button>
                        <h1 className="modal__header">Select a Wallet</h1>
                        <h2 className="modal__subheader">Please select a wallet to continue:</h2>
                        <div className="modal__wallet__option">
                          <img className="modal__wallet__option--image" src={Metamask}/>
                          <p>Metamask</p>
                        </div>
                        <div className="modal__wallet__option">
                          <img className="modal__wallet__option--image" src={Fortmatic}/>
                          <p>Fortmatic</p>
                        </div>
                      </div>
                      <div className='modal__button-container'>
                        <button onClick={this.closeModal} className='modal__cancel-btn'>
                          Cancel
                        </button>
                      </div>
                    </div>
                </div>
              </section>
          ) : null}

            <section className="auction">
              <div className="auction__container">
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
                    <h1 className="auction__item__details--list-1">Outside</h1>
                    <h2 className="auction__item__details--list-2">The Scotts</h2>
                    <p className="auction__item__details--list-3"> This song was created as a digital asset to be sold on the NFT marketplace. Only twenty NFTs will ever be released associated with this song.</p>
                    <div className="auction__item__bid">
                      <button onClick={this.openModal} className="auction__item__button">Make an Offer</button>
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className="auction__offers">
                <h1 className="auction__offers__header">Offer History</h1>
                <div>Offer 1</div>
                <div>Offer 2</div>
                <div>Offer 3</div>
              </div> */}
                {/* {console.log(this.state.products.data)} */}
              </div>
            </section>
        </>
    
        )
    }
}

export default AuctionPage;