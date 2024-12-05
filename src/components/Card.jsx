import React from "react";
import "./Card.css"
import { Link } from 'react-router-dom';
const Card = () => {

    return (
        <div className="cards">
            <div className="first-col">
                <h1> Özel Lezzetus</h1>
                <p>Position Absolute Acı Burger</p>
                <Link to="/order">
                    <button>SİPARİŞ VER</button>
                </Link>
                <img src="Assets/Iteration-2-aseets/cta/kart-1.png" className="first-col-img" />

            </div>

            <div className="sec-col">
                <div className="sec-col-one">
                    <h1> Hackathlon Burger Menü</h1>
                    <Link to="/order">
                        <button>SİPARİŞ VER</button>
                    </Link>
                    <img src="Assets/Iteration-2-aseets/cta/kart-2.png" />
                </div>
                <div className="sec-col-two">
                    <h1><span style={{ color: "#D80027" }}>Çoooook</span> hızlı npm gibi kurye </h1>
                    <Link to="/order">
                        <button>SİPARİŞ VER</button>
                    </Link>

                    <img src="Assets/Iteration-2-aseets/cta/kart-3.png" />
                </div>
            </div>

        </div>
    )


}

export default Card;