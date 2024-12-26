import React from 'react';
import "./Footer.css";

const Footer = () => {

    return (
        <div className='footer'>
            <div className='footer-first-col'>
                <h1>Teknolojik Yemekler</h1>
                <div className='location'>
                    <img src="/Iteration-2-aseets/footer/icons/icon-1.png" />
                    <p>341 Londonderry Road, Istanbul Türkiye</p>
                </div>

                <div className='email'>
                    <img src="/Iteration-2-aseets/footer/icons/icon-2.png" />
                    <p>aciktim@teknolojikyemekler.com</p>
                </div>

                <div className='phone'>
                    <img src="/Iteration-2-aseets/footer/icons/icon-3.png" />
                    <p>+90 216 123 45 67</p>
                </div>
            </div>

            <div className='footer-second-col'>
                <h1>Hot Menu</h1>
                <ul>Terminal Pizza</ul>
                <ul>5 Kişilik Hackathlon Pizza</ul>
                <ul>useEffect Tavuklu Pizza</ul>
                <ul>Beyaz  Console Frosty</ul>
                <ul>Testler Geçti Mutlu Burger</ul>
                <ul>Position Absolute Acı Burger</ul>
            </div>

            <div className='footer-third-col'>
                <h1>Instagram</h1>
                <div className='instagram-grid'>
                    <img src="/Iteration-2-aseets/footer/insta/li-0.png" />
                    <img src="/Iteration-2-aseets/footer/insta/li-1.png" />
                    <img src="/Iteration-2-aseets/footer/insta/li-2.png" />
                    <img src="/Iteration-2-aseets/footer/insta/li-3.png" />
                    <img src="/Iteration-2-aseets/footer/insta/li-4.png" />
                    <img src="/Iteration-2-aseets/footer/insta/li-5.png" />
                </div>
            </div>
            <hr className='footer-section-divider' />

            <div className='footer-last'>
                <p>© 2023 Teknolojik Yemekler. </p>
                <img src="/Iteration-2-aseets/footer/insta/Twitter.svg" className='twitter' />
            </div>
        </div >
    )

}



export default Footer;