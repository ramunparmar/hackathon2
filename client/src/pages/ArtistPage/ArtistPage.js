import React from 'react';
import { Component } from "react";
import axios from "axios";

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
                <h1 className="artist__header">Artist Page</h1>
                {console.log(this.state.artists.data)}
            </section>
    
        )
    }
}

export default ArtistPage;