import React from "react";
import fracturesCover from "../../assets/images/Marketplace/fractures.png";
import desiresCover from "../../assets/images/Marketplace/desires.png";
import griffinAvatar from '../../assets/images/Marketplace/griffin.png';
import theCrewAvatar from '../../assets/images/Marketplace/the_crew.png';
import "./ExclusiveDropCard.scss";

function ExclusiveDropCard() {
  return (
      <>
    <div className="exclusive-drop-card">
      <div className="exclusive-drop-card__image-container">
        <img
          src={fracturesCover}
          alt="song cover"
          className="exclusive-drop-card__image"
        />
      </div>
      <div className="exclusive-drop-card__song-container">
        <h3 className="exclusive-drop-card__song-name">Fractures</h3>
        <div className="exclusive-drop-card__artist-container">
          <img
            src={griffinAvatar}
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

    <div className="exclusive-drop-card">
      <div className="exclusive-drop-card__image-container">
        <img
          src={desiresCover}
          alt="song cover"
          className="exclusive-drop-card__image"
        />
      </div>
      <div className="exclusive-drop-card__song-container">
        <h3 className="exclusive-drop-card__song-name">Desires</h3>
        <div className="exclusive-drop-card__artist-container">
          <img
            src={theCrewAvatar}
            alt="artist avatar"
            className="exclusive-drop-card__artist-image"
          />
          <h4 className="exclusive-drop-card__artist-name">The Crew</h4>
        </div>
      </div>
      <div className="exclusive-drop-card__bid-section">
        <div className="exclusive-drop-card__bid-container">
          <h5 className="exclusive-drop-card__bid-header">Current Bid</h5>
          <p className="exclusive-drop-card__bid-details">4.20 ETH</p>
        </div>
        <div className="exclusive-drop-card__time-container">
          <h5 className="exclusive-drop-card__bid-header">Ending in</h5>
          <p className="exclusive-drop-card__bid-details">18h 39m 42s</p>
        </div>
      </div>
    </div>
    </>

    
    
  );
}

export default ExclusiveDropCard;
