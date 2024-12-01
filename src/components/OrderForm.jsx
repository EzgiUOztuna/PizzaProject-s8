import { BrowserRouter as Router, Link } from 'react-router-dom';
import React from 'react';
import "./OrderForm.css"

export default function OrderForm() {

    return (

        <div className='header-container'>
            <img src="/Assets/Iteration-1-assets/logo.svg" alt="Logo" className="logo" />
            <Router>
                <div className='links-container'>
                    <Link to="/"> {/*buralara geri dönebiliriz 📍*/}
                        Anasayfa -
                    </Link>
                    <Link to="/">Sipariş Oluştur {/*buralara geri dönebiliriz 📍*/}
                    </Link>
                </div>
            </Router>
        </div>

    );
}
