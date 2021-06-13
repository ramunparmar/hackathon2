import React from "react";
import "./HomePage.scss";
import { Component } from "react";
import Logo from '../../assets/images/Logo/RECORDS.svg'
import djImage from "../../assets/images/Marketplace/dj_working.png";
import { Link } from "react-router-dom";
import ExclusiveDropCard from "../../components/ExclusiveDropCard/ExclusiveDropCard";
import LiveAuctionsCard from "../../components/LiveAuctionsCard/LiveAuctionsCard";
import foolsCover from '../../assets/images/Marketplace/fools.png';
import sugarCover from '../../assets/images/Marketplace/sugar.png';
import downUnderCover from '../../assets/images/Marketplace/down_under.png';


class HomePage extends Component {

  state = {
    toggleModal: true,
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
                    <img className="modal__header" src={Logo}/>
                    <h2 className="modal__subheader">A BrainStation x EY Hackathon Project</h2>
                    <div className="modal__team">
                      <div className="modal__team__member">
                        <div className="modal__team__member--header">EY Advisors</div>
                        <a href="https://www.linkedin.com/in/jcosta-scholar/" className="modal__link"><div className="modal__team__member--member">João Costa</div></a>
                        <a href="https://www.linkedin.com/in/chris-jozsa-b25983205/" className="modal__link"><div className="modal__team__member--member">Chris Jozsa</div></a>
                        <a href="https://www.linkedin.com/in/salah-mahdi/" className="modal__link"><div className="modal__team__member--member">Salah Mahdi</div></a>
                      </div>
                      <div className="modal__team__member">
                        <div className="modal__team__member--header">UX Design</div>
                        <a href="https://www.linkedin.com/in/ericcachola/" className="modal__link"><div className="modal__team__member--member">Eric Cachola</div></a>
                        <a href="https://www.linkedin.com/in/samantha-lim29/" className="modal__link"><div className="modal__team__member--member">Samantha Lim</div></a>
                        <a href="https://www.figma.com/proto/P5LHUirVCHbJfrqAkRqd2u/Brainstation-x-EY-Hackathon?page-id=0%3A1&node-id=16%3A335&viewport=169%2C624%2C0.4222502112388611&scaling=scale-down" className="modal__link"><button className="modal__team__member--button">Figma Prototype</button></a>
                      </div>
                      <div className="modal__team__member">
                        <div className="modal__team__member--header">Web Developers</div>
                        <a href="https://www.linkedin.com/in/ramunparmar/" className="modal__link"><div className="modal__team__member--member">Ramun Parmar</div></a>
                        <a href="https://www.linkedin.com/in/anthonyhenley/" className="modal__link"><div className="modal__team__member--member">Anthony Henley</div></a>
                      </div>
                      <div className="modal__team__member">
                        <div className="modal__team__member--header">Analytics</div>
                        <a href="https://www.linkedin.com/in/seansimkus/" className="modal__link"><div className="modal__team__member--member">Sean Simkus</div></a>
                      </div>
                    </div>
                  </div>
                  <div className="modal__CTA">☝️ Click team names for LinkedIn profile ☝️</div>
                  <div className='modal__button-container'>
                    <button onClick={this.closeModal} className='modal__cancel-btn'>
                      Let's Go!
                    </button>
                  </div>
                </div>
            </div>
          </section>
      ) : null}
      <section className="home">
        <img src={djImage} alt="hero image" className="home__dj-image" />
        <div className="home__exclusive-drops-container">
          <div className="home__exclusive-drops-header-container">
            <h2 className="home__exclusive-drops-header">
              Exclusive <strong>Records</strong> Drops
            </h2>
            <Link to="/" className="home__exclusive-drops-header-link">
              See All
            </Link>
          </div>
          <div className="home__exclusive-drops-cards">
            <ExclusiveDropCard />
          </div>
          </div>
          <div className="home__live-auctions-container">

          <div className="home__live-auctions-header-container">
            <h2 className="home__live-auctions-header">
              Live Auctions 🔥
            </h2>
            <Link to="/" className="home__live-auctions-header-link">
              See All
            </Link>
          </div>
          <div className="home__live-auctions-cards">
            <LiveAuctionsCard />
          </div>
          </div>

        <h2 className="home__top-songs-header">Top Songs 🔥</h2>
        <div className="home__top-songs">
        <div className="home__top-song">
            <div className="home__song">
              <p className="home__rank">1</p>
                <img src={foolsCover} alt="" className="home__song-image" />
                <div className="home__song-name">
                    <h4 className="home__song-header">Fools</h4>
                    <p className="home__song-artist-name">Troy Smith</p>
                </div>
            </div>
            <div className="home__song-bid">
                <div className="home__current-bid">
                    <h5 className="home__bid-header">Current Bid:</h5>
                    <p className="home__bid-amount">0.50 ETH</p>
                </div>
                <p className="home__bids-bought">12 bought in last hour</p>
            </div>
        </div>

        <div className="home__top-song">
            <div className="home__song">
              <p className="home__rank">2</p>
                <img src={sugarCover} alt="" className="home__song-image" />
                <div className="home__song-name">
                    <h4 className="home__song-header">Sugar</h4>
                    <p className="home__song-artist-name">Megan Swift</p>
                </div>
            </div>
            <div className="home__song-bid">
                <div className="home__current-bid">
                    <h5 className="home__bid-header">Current Bid:</h5>
                    <p className="home__bid-amount">0.26 ETH</p>
                </div>
                <p className="home__bids-bought">9 bought in last hour</p>
            </div>
        </div>

        <div className="home__top-song">
            <div className="home__song">
              <p className="home__rank">3</p>
                <img src={downUnderCover} alt="" className="home__song-image" />
                <div className="home__song-name">
                    <h4 className="home__song-header">Down Under</h4>
                    <p className="home__song-artist-name">Club 23</p>
                </div>
            </div>
            <div className="home__song-bid">
                <div className="home__current-bid">
                    <h5 className="home__bid-header">Current Bid:</h5>
                    <p className="home__bid-amount">0.75 ETH</p>
                </div>
                <p className="home__bids-bought">8 bought in last hour</p>
            </div>
        </div>
        </div>

      </section>
    </>
  );
      }
}

export default HomePage;
