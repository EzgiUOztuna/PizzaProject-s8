import React from 'react';
import "./HomeSecenekler.css";

const secenekler = [
    { icon: '/Iteration-2-aseets/icons/1.svg', label: 'YENİ! Kore' },
    { icon: '/Iteration-2-aseets/icons/2.svg', label: 'Pizza' },
    { icon: '/Iteration-2-aseets/icons/3.svg', label: 'Burger' },
    { icon: '/Iteration-2-aseets/icons/4.svg', label: 'Kızartmalar' },
    { icon: '/Iteration-2-aseets/icons/5.svg', label: 'Fast food' },
    { icon: '/Iteration-2-aseets/icons/6.svg', label: 'Gazlı İçecek' },
];

const HomeSecenekler = () => {

    return (
        <div className='secenekler'>
            {secenekler.map((secenek, index) => {
                return (
                    <div className={secenek.label.toLocaleLowerCase()} key={index}>
                        <img src={secenek.icon} alt='secenek.label' />
                        <p>{secenek.label}</p>
                    </div>
                );
            })}
        </div>
    )

}


export default HomeSecenekler;