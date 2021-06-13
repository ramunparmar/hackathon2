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
                    <div className="explore__recommendations--image scott"/>
                    <p className="explore__recommendations--title scotts">The Scotts</p>
                </div>
                <div className="explore__recommendations__card">
                    <div className="explore__recommendations--image cory"/>
                    <p className="explore__recommendations--title">Cory Thomas</p>
                </div>
                <div className="explore__recommendations__card">
                    <div className="explore__recommendations--image ashley"/>
                    <p className="explore__recommendations--title">Ashley Kelsey</p>
                </div>
            </div>
            <h2 className="explore__subheader">Browse Genres</h2>
            <div className="explore__genres">
                <div className="explore__genres--card favourites">Your Favourites</div>
                <div className="explore__genres--card rb">R&B</div>
                <div className="explore__genres--card hiphop">Hip Hop</div>
                <div className="explore__genres--card country">Country</div>
                <div className="explore__genres--card folk">Folk & Acoustic</div>
                <div className="explore__genres--card chill">Chill</div>
            </div>
        </section>
        </>
    )
}

export default ExplorePage;