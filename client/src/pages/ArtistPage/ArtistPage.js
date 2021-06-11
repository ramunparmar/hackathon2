import React from 'react';
import { Component } from "react";
import axios from "axios";
import './ArtistPage.scss';
import foolsCover from '../../assets/images/Marketplace/fools.png';
import sugarCover from '../../assets/images/Marketplace/sugar.png';
import downUnderCover from '../../assets/images/Marketplace/down_under.png';

class ArtistPage extends Component {

    state = {
        artists: [],
    }

    getArtist() {
        axios
          .get(`http://localhost:5000/artists`)
          .then((artist) => {
            this.setState({
              artists: artist,
            });
          })
          .catch((err) => console.error(err));
      }
    
    componentDidMount() {
        this.getArtist();
    }
    

    render() {

        if (this.state.artist === []) {
            return <h1>Loading. . .</h1>;
          }

        return (
            <section className="artist">
              <div className="artist__hero">
                <p className="artist__genre">Indie-Rock</p>
              </div>
              <div>
                <div className="artist__header">
                  <h1 className="artist__header--title">The Scotts</h1>
                  <h2 className="artist__header--followers">33,420 followers</h2>
                  <h2 className="artist__header--social">@official_thescotts</h2>
                </div>
              </div>
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
                {console.log(this.state.artists.data)}
            </section>
    
        )
    }
}

export default ArtistPage;