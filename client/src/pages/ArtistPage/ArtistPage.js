import React from 'react';
import { Component } from "react";
import axios from "axios";
import './ArtistPage.scss';

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
                {console.log(this.state.artists.data)}
            </section>
    
        )
    }
}

export default ArtistPage;