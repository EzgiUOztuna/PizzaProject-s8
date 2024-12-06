import React from 'react';
import "./Confirmation.css";
import "../components/OrderForm.jsx";
import Footer from './Footer.jsx';

const Confirmation = (props) => {
    const { formData } = props;

    document.body.classList.add('confirmation-bg');

    return (
        <div className='general-conf'>
            <div className='conf'>
                <h1>Teknolojik Yemekler</h1>
                <h3>lezzetin yolda</h3>
                <p>SİPARİŞ ALINDI</p>

                <hr className='conf-section-divider' />

                <h4>Position Absolute Acı Pizza</h4>

                <div className='conf-pizza-boyutu'>
                    <h3>Boyut:</h3>
                    <p>{formData.pizzaBoyutu}</p>
                </div>

                <div className='conf-hamur-kalinligi'>
                    <h3>Hamur:</h3>
                    <p>{formData.hamurKalınlıgı}</p>
                </div>

                <div className='conf-ek-malzemeler'>
                    <h3>Ek Malzemeler:</h3>
                    <p>{formData.ekMalzemeler.map((malzeme, index) => malzeme).join(', ')}</p>
                </div>

                <div className='conf-toplam-fiyat'>
                    <h5>Sipariş Toplamı</h5>
                    <div className='conf-secimler'>
                        <h3>Seçimler</h3>
                        <p>{formData.ekMalzemeler.length * 5}₺</p>
                    </div>
                    <div className='conf-toplam'>
                        <h3>Toplam</h3>
                        <p>{(formData.toplamFiyat * formData.siparisAdeti).toFixed(2)}₺</p>
                    </div>
                </div>
            </div>
            <Footer />
        </div >

    );
};




export default Confirmation;