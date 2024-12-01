import { BrowserRouter as Router, Link } from 'react-router-dom';
import React from 'react';
import "./OrderForm.css"

export default function OrderForm() {

    return (
        <>
            <div className='header-container'>
                <img src="/Assets/Iteration-1-assets/logo.svg" alt="Logo" className="logo" />
                <Router>
                    <div className='links-container'>
                        <Link to="/"> {/*buralara geri dönebiliriz 📍*/}
                            Anasayfa
                        </Link>
                        <Link to="/" style={{ fontWeight: 700, minWidth: '105px' }}>Sipariş Oluştur {/*buralara geri dönebiliriz 📍*/}
                        </Link>
                    </div>
                </Router>
            </div>
            <p className='titleOne'>Position Absolute Acı Pizza</p>
            <div className="price-rating-container">
                <span className="price">85.50₺</span>
                <span className="rating">4.9
                    <span className="rating-count">(200)</span>
                </span>
            </div>
            <p className='desc'>
                Frontent Dev olarak hala position:absolute kullanıyorsan bu çok acı pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan kökenli lezzetli bir yemektir. . Küçük bir pizzaya bazen pizzetta denir.
            </p>

        </>
    );
}
