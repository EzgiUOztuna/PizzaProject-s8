import React from 'react';
import "./Confirmation.css";
import "../components/OrderForm.jsx";

const Confirmation = (props) => {
    const { formData } = props;
    console.log(formData);
    if (!formData) {
        return <p>Loading...</p>; // Ya da başka bir yedek mesaj
    }

    document.body.classList.add('confirmation-bg');

    return (
        <div className='conf'>
            <h1>Teknolojik Yemekler</h1>
            <h3>lezzetin yolda</h3>
            <p>SİPARİŞ ALINDI</p>

            <hr className='conf-section-divider' />

            <h4>Position Absolute Acı Pizza</h4>
            <div className='conf-pizza-boyutu'>Boyut: {formData.pizzaBoyutu}</div>
            <div className='conf-hamur-kalinligi'>Hamur: {formData.hamurKalınlıgı}</div>
            <div className='conf-ek-malzemeler'>
                <h5>Ek Malzemeler:</h5>
                <ul>
                    {formData.ekMalzemeler.map((malzeme, index) => (
                        <li key={index}>{malzeme}</li>
                    ))}
                </ul>
            </div>

            <div className='conf-toplam-fiyat'>
                <h5>Sipariş Toplamı</h5>
                <p>{formData.toplamFiyat}₺</p>
            </div>
        </div >
    );
};


export default Confirmation;