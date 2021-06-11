import React from "react";
import purpleFlowersCover from "../../assets/images/Marketplace/purple_flowers.png";
import antisocialCover from "../../assets/images/Marketplace/antisocial.png";
import malibuAvatar from '../../assets/images/Marketplace/malibu.png';
import rickMahomesAvatar from '../../assets/images/Marketplace/rick_mahomes.png';
import "./LiveAuctionsCard.scss";

function LiveAuctionsCard() {
  return (
      <>
    <div className="live-auctions-card">
      <div className="live-auctions-card__image-container">
        <img
          src={purpleFlowersCover}
          alt="song cover"
          className="live-auctions-card__image"
        />
      </div>
      <div className="live-auctions-card__song-container">
        <h3 className="live-auctions-card__song-name">Purple Flowers</h3>
        <div className="live-auctions-card__artist-container">
          <img
            src={malibuAvatar}
            alt="artist avatar"
            className="live-auctions-card__artist-image"
          />
          <h4 className="live-auctions-card__artist-name">Malibu</h4>
        </div>
      </div>
      <div className="live-auctions-card__bid-section">
        <div className="live-auctions-card__bid-container">
          <h5 className="live-auctions-card__bid-header">Current Bid</h5>
          <p className="live-auctions-card__bid-details">0.44 ETH</p>
        </div>
        <div className="live-auctions-card__time-container">
          <h5 className="live-auctions-card__bid-header">Ending in</h5>
          <p className="live-auctions-card__bid-details">21h 28m 21s</p>
        </div>
      </div>
    </div>

    <div className="live-auctions-card">
      <div className="live-auctions-card__image-container">
        <img
          src={antisocialCover}
          alt="song cover"
          className="live-auctions-card__image"
        />
      </div>
      <div className="live-auctions-card__song-container">
        <h3 className="live-auctions-card__song-name">Antisocial</h3>
        <div className="live-auctions-card__artist-container">
          <img
            src={rickMahomesAvatar}
            alt="artist avatar"
            className="live-auctions-card__artist-image"
          />
          <h4 className="live-auctions-card__artist-name">Rick Mahomes</h4>
        </div>
      </div>
      <div className="live-auctions-card__bid-section">
        <div className="live-auctions-card__bid-container">
          <h5 className="live-auctions-card__bid-header">Current Bid</h5>
          <p className="live-auctions-card__bid-details">0.25 ETH</p>
        </div>
        <div className="live-auctions-card__time-container">
          <h5 className="live-auctions-card__bid-header">Ending in</h5>
          <p className="live-auctions-card__bid-details">11h 29m 37s</p>
        </div>
      </div>
    </div>
    </>

    
    
  );
}

export default LiveAuctionsCard;
