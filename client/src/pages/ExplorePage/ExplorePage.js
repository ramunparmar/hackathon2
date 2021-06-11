import React from 'react';
import './ExplorePage.scss';
import Band from '../../assets/images/Artist/thescotts.png';

function ExplorePage() {
    return (
        <>
        <section className="explore">
            <h1 className="explore__header">Explore</h1>
            <div className="explore__search">
                <input
                type='text'
                placeholder='Artists, songs or genres'
                className='explore__search-box'
                />
            </div>
            <h2 className="explore__subheader">Recommended Artists For You</h2>
            <div className="explore__recommendations">
                <div className="explore__recommendations__card">
                    <div className="explore__recommendations--image"/>
                    <p className="explore__recommendations--title">The Scotts</p>
                </div>
                <div className="explore__recommendations__card">
                    <div className="explore__recommendations--image"/>
                    <p className="explore__recommendations--title">The Scotts</p>
                </div>
                <div className="explore__recommendations__card">
                    <div className="explore__recommendations--image"/>
                    <p className="explore__recommendations--title">The Scotts</p>
                </div>
            </div>
            <h2 className="explore__subheader">Browse Genres</h2>
            <div className="explore__genres">
                <div className="explore__genres--card">Your Favourites</div>
                <div className="explore__genres--card">Your Favourites</div>
                <div className="explore__genres--card">Your Favourites</div>
                <div className="explore__genres--card">Your Favourites</div>
            </div>
        </section>
        </>
    )
}

export default ExplorePage;