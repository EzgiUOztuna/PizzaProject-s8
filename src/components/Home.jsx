import React from 'react';
import "./Home.css";
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import HomeCard from './HomeCard';
import HomeCardPictures from './HomeCardPictures';
import Footer from './Footer';
import HomeSecenekler from './HomeSecenekler';
import HomeSeceneklerEng from './HomeSeceneklerEng';

export default function Home() {
    return (
        <div className="container">
            <div className='new-image'>
                <p className='firsat'>fırsatı kaçırma</p>
                <p className='paragraf-home'>KOD ACIKTIRIR PİZZA, DOYURUR</p>
                <img className="home-logo" src="/Iteration-1-assets/home-logo.svg" />
                <Link to="/order">
                    <button className='button-home'>ACIKTIM</button>
                </Link>
            </div>
            <img className="home-banner" src="/Iteration-1-assets/home-banner.png" />
            <HomeSecenekler />
            <div className='for-background-color'>
                <HomeCard />
                <p className='paket'>en çok paketlenen menüler</p>
                <h1 className='baslik-bir'>Acıktıran Kodlara Doyuran Lezzetler</h1>
                <HomeSeceneklerEng />
                <HomeCardPictures />
            </div>
            <Footer />
        </div >
    );
}
