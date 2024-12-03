import React from 'react';
import "./Home.css";
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

export default function Home() {
    return (
        <div className="image">
            <img className="home-banner" src='/Assets/Iteration-1-assets/home-banner.png' />
            <img className="home-logo" src='/Assets/Iteration-1-assets/home-logo.svg' />
            <p className='paragraf-home'>KOD ACIKTIRIR PİZZA,DOYURUR
            </p>
            <Link to="/order">
                <button className='button-home'>ACIKTIM</button>
            </Link>

        </div >
    );
}