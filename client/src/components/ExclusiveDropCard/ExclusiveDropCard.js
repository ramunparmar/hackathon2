import React from "react";
import albumCover from "../../assets/album-cover.jpg";
import "./ExclusiveDropCard.scss";

function ExclusiveDropCard() {
  return (
    <div className="exclusive-drop-card">
      <div className="exclusive-drop-card__image-container">
        <img
          src={albumCover}
          alt="song cover"
          className="exclusive-drop-card__image"
        />
      </div>
      <div className="exclusive-drop-card__song-container">
        <h3 className="exclusive-drop-card__song-name">Fractures</h3>
        <div className="exclusive-drop-card__artist-container">
          <img
            src={albumCover}
            alt="artist avatar"
            className="exclusive-drop-card__artist-image"
          />
          <h4 className="exclusive-drop-card__artist-name">Griffin</h4>
        </div>
      </div>
      <div className="exclusive-drop-card__bid-section">
        <div className="exclusive-drop-card__bid-container">
          <h5 className="exclusive-drop-card__bid-header">Current Bid</h5>
          <p className="exclusive-drop-card__bid-details">2.10 ETH</p>
        </div>
        <div className="exclusive-drop-card__time-container">
          <h5 className="exclusive-drop-card__bid-header">Ending in</h5>
          <p className="exclusive-drop-card__bid-details">23h 49m 28s</p>
        </div>
      </div>
    </div>
  );
}

export default ExclusiveDropCard;
