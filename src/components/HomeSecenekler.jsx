import React from 'react';
import "./HomeSecenekler.css";


const HomeSecenekler = () => {

    return (
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
    )

}


export default HomeSecenekler;
