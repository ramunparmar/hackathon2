import React from "react";
import "./HomePage.scss";
import djImage from "../../assets/images/Marketplace/dj_working.png";
import { Link } from "react-router-dom";
import ExclusiveDropCard from "../../components/ExclusiveDropCard/ExclusiveDropCard";
import LiveAuctionsCard from "../../components/LiveAuctionsCard/LiveAuctionsCard";
import foolsCover from '../../assets/images/Marketplace/fools.png';
import sugarCover from '../../assets/images/Marketplace/sugar.png';
import downUnderCover from '../../assets/images/Marketplace/down_under.png';


function HomePage() {
  return (
    <>
      <section className="home">
        <img src={djImage} alt="hero image" className="home__dj-image" />
        <div className="home__exclusive-drops-container">
          <div className="home__exclusive-drops-header-container">
            <h2 className="home__exclusive-drops-header">
              Exclusive <strong>Record</strong> Drops
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
              Live Auctions
            </h2>
            <Link to="/" className="home__live-auctions-header-link">
              See All
            </Link>
          </div>
          <div className="home__live-auctions-cards">
            <LiveAuctionsCard />
          </div>
          </div>

        <h2 className="home__top-songs-header">Top Songs</h2>
        <div className="home__top-songs">
        <div className="home__top-song">
            <div className="home__song">
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

export default HomePage;
