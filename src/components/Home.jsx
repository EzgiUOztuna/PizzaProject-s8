import React from 'react';
import "./Home.css";
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import Card from './Card';
import CardPictures from './CardPictures';

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

            <div className='secenekler'>

                <div className='kore'>
                    <img src='Assets/Iteration-2-aseets/icons/1.svg' />
                    <p>YENİ! Kore</p>
                </div>

                <div className='pizza'>
                    <img src='Assets/Iteration-2-aseets/icons/2.svg' />
                    <p>Pizza</p>
                </div>

                <div className='burger'>
                    <img src='Assets/Iteration-2-aseets/icons/3.svg' />
                    <p>Burger</p>
                </div>

                <div className='kızartma'>
                    <img src='Assets/Iteration-2-aseets/icons/4.svg' />
                    <p>Kızartmalar</p>
                </div>

                <div className='fastfood'>
                    <img src='Assets/Iteration-2-aseets/icons/5.svg' />
                    <p>Fast food</p>
                </div>

                <div className='icecek'>
                    <img src='Assets/Iteration-2-aseets/icons/6.svg' />
                    <p>Gazlı İçecek</p>
                </div>
            </div>

            <Card />

            <p className='paket'>en çok paketlenen menüler</p>

            <h1 className='baslik-bir'>Acıktıran Kodlara Doyuran Lezzetler</h1>

            <div className='secenekler-eng'>

                <div className='ramen'>
                    <img src='Assets/Iteration-2-aseets/icons/1.svg' />
                    <p>Ramen</p>
                </div>

                <div className='pizza-eng'>
                    <img src='Assets/Iteration-2-aseets/icons/2.svg' />
                    <p>Pizza</p>
                </div>

                <div className='burger-eng'>
                    <img src='Assets/Iteration-2-aseets/icons/3.svg' />
                    <p>Burger</p>
                </div>

                <div className='frenchfries'>
                    <img src='Assets/Iteration-2-aseets/icons/4.svg' />
                    <p>French fries</p>
                </div>

                <div className='fastfood-eng'>
                    <img src='Assets/Iteration-2-aseets/icons/5.svg' />
                    <p>Fast food</p>
                </div>

                <div className='softdrinks'>
                    <img src='Assets/Iteration-2-aseets/icons/6.svg' />
                    <p>Soft drinks</p>
                </div>
            </div>

            <CardPictures />

        </div >
    );
}