import { Link } from 'react-router-dom';
import React, { useRef, useState } from 'react';
import "./OrderForm.css";
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import Footer from './Footer.jsx';
import MenuDetails from './OrderFormMenuDetails.jsx';
import menuData from "../assets/DummyData.js";

const OrderForm = ({ setFormData, formData, menuData }) => {

    const pizzaBoyutuRef = useRef(null); //scroll özelliği için.
    const hamurKalınlıgıRef = useRef(null);

    const [siparisAdeti, setSiparisAdeti] = useState(1);
    const [error, setError] = useState(""); //Hata mesajını tutucak.
    const [malzemeHatasi, setMalzemeHatasi] = useState("");

    const history = useHistory();

    /* 📌 HANDLE SUBMIT */
    const handleSubmit = (event) => {
        event.preventDefault();

        if (!formData.boyut) {
            setError("Lütfen pizza boyutunu seçiniz!");
            pizzaBoyutuRef.current.scrollIntoView({ behavior: "smooth" });
            return;
        }
        if (!formData.hamur) {
            setError("Lütfen hamur kalınlığını seçiniz!");
            hamurKalınlıgıRef.current.scrollIntoView({ behavior: "smooth" });
            return;
        }
        if (formData.ekMalzemeler.length < 4) {
            setMalzemeHatasi("En az 4 malzeme seçmelisiniz.");
            return;
        }
        //Seçimler geçerliyse hata sıfırlansın ve sipariş işlensin.
        setError("");
        setMalzemeHatasi("");

        const siparisDetaylari = {
            boyut: formData.boyut,
            hamur: formData.hamur,
            ekMalzemeler: formData.ekMalzemeler,
            siparisAdeti,
            price: (formData.price * siparisAdeti).toFixed(2),
        };

        console.log("Gönderilecek sipariş detayları:", siparisDetaylari);

        /* 📌 API'ye POST isteği gönder */
        axios.post("https://reqres.in/api/pizza", siparisDetaylari)
            .then((response) => {
                console.log("Sipariş Özeti:", response.data); // Gelen yanıtı console'a yaz
                setFormData(siparisDetaylari);
                history.push("/confirmation");
            })
            .catch((error) => {
                console.error("Sipariş oluşturulurken bir hata oluştu:", error);
            })
    };


    const handleMalzemeChange = (event) => {
        let { value, checked } = event.target;
        let updatedEkMalzemeler = [...formData.ekMalzemeler];

        if (checked) {
            if (updatedEkMalzemeler.length < 10) {
                updatedEkMalzemeler.push(value); // Malzeme ekle
            } else {
                alert("En fazla 10 malzeme seçebilirsiniz.");
                return;
            }
        } else {
            updatedEkMalzemeler = updatedEkMalzemeler.filter((item) => item !== value); // Seçtiğim malzemeyi kaldırmak istersem.
        }

        if (updatedEkMalzemeler.length < 4) { // Minimum malzeme kontrolü
            setMalzemeHatasi("En az 4 malzeme seçmelisiniz.");
        } else {
            setMalzemeHatasi(""); // Hata yoksa mesajı sıfırla
        }

        // Her ek malzeme seçildiğinde 5 TL ekle
        let newPrice = menuData.menuTitle[0].price + updatedEkMalzemeler.length * 5;

        // Formu güncelle
        setFormData({
            ...formData,
            ekMalzemeler: updatedEkMalzemeler,
            price: newPrice,
        });
    };



    return (
        <>
            {/* 📌 RED-HEADER */}
            <div className='header-container'>
                <img src="/Assets/Iteration-1-assets/logo.svg" alt="Logo" className="logo" />
            </div >

            <div className='new-container' >
                <img src="Assets/Iteration-2-aseets/pictures/form-banner.png" className="new-banner" />

                <div className='links-container'>
                    <Link to="/">
                        Anasayfa
                    </Link>
                    <Link to="/order" style={{ fontWeight: 500, minWidth: '105px', color: "#ce2829" }}>
                        Sipariş Oluştur
                    </Link>
                </div>
                <MenuDetails />
            </div>

            {/* 📌 MAIN - BOYUT SEÇME */}
            <form onSubmit={handleSubmit}>
                <div className='boyut-hamur' >

                    <div className='boyut-secim' ref={pizzaBoyutuRef} >
                        <h2>Boyut Seç <span style={{ color: "red" }}>*</span></h2>
                        <label className='small'>
                            <input
                                type="radio"
                                value="S"
                                checked={formData.boyut === "S"}
                                onChange={(yeniBoyut) => setFormData({ ...formData, boyut: yeniBoyut.target.value }) || setError("")}
                            /> <span>S</span>
                        </label>
                        <label>
                            <input
                                type="radio"
                                value="M"
                                checked={formData.boyut === "M"}
                                onChange={(yeniBoyut) => setFormData({ ...formData, boyut: yeniBoyut.target.value }) || setError("")}
                            />
                            <span>M</span>
                        </label>
                        <label>
                            <input
                                type="radio"
                                value="L"
                                checked={formData.boyut === "L"}
                                onChange={(yeniBoyut) => setFormData({ ...formData, boyut: yeniBoyut.target.value }) || setError("")}
                            />
                            <span>L</span>
                        </label>
                        {error === "Lütfen pizza boyutunu seçiniz!" && (
                            <p style={{ color: "red" }}>{error}</p>
                        )}
                    </div>


                    {/* 📌 MAIN - HAMUR KALINLIĞI SEÇME */}
                    <div className='hamur-secim' ref={hamurKalınlıgıRef}>
                        <h2>Hamur Seç<span style={{ color: "red" }}>*</span></h2>
                        <select
                            value={formData.hamur}
                            onChange={(yeniHamur) => setFormData({ ...formData, hamur: yeniHamur.target.value }) || setError("")}
                        >
                            <option value="">-Hamur Kalınlığı Seç-</option>
                            <option value="İnce">İnce</option>
                            <option value="Orta">Orta</option>
                            <option value="Kalın">Kalın</option>
                        </select>
                        {error === "Lütfen hamur kalınlığını seçiniz!" && (
                            <p style={{ color: "red" }}>{error}</p>
                        )}
                    </div>
                </div>



                {/* 📌 MAIN - EK MALZEMELERİ SEÇME */}
                <div className='ek-malzemeler'>
                    <h2>Ek Malzemeler</h2>
                    <p>En fazla 10 malzeme seçebilirsiniz. 5₺</p>
                    {menuData.ekMalzemelerListesi.map((malzeme) => (
                        <label key={malzeme}>
                            <input
                                type="checkbox"
                                value={malzeme}
                                checked={formData.ekMalzemeler.includes(malzeme)}
                                onChange={handleMalzemeChange}
                            />
                            {malzeme}
                        </label>
                    ))}
                    {malzemeHatasi && <p style={{ color: "red" }}>{malzemeHatasi}</p>}
                </div>

                {/* 📌 MAIN - SİPARİŞ NOTU */}
                <div className='siparis-notu' >
                    <h2>Sipariş Notu</h2>
                    <textarea
                        placeholder='Siparişine eklemek istediğin bir not var mı?'
                        rows="3"
                        cols="50"></textarea>
                </div>


                <hr className='section-divider' />

                {/* 📌 FOOTER - SİPARİŞ COUNTER */}
                <div className="siparis-counter-container">
                    <div className="counter">
                        <button
                            type="button"
                            className="decrement"
                            onClick={() => siparisAdeti > 1 && setSiparisAdeti(siparisAdeti - 1)}>
                            -
                        </button>
                        <span className="count">{siparisAdeti}</span>
                        <button
                            type="button"
                            className="increment"
                            onClick={() => { setSiparisAdeti(siparisAdeti + 1) }}>
                            +
                        </button>
                    </div>


                    {/* 📌 FOOTER - SİPARİŞ TOPLAMI */}
                    <div className="siparis-toplam">
                        <h2>Sipariş Toplamı</h2>
                        <div className='secimler'>
                            <h3>Seçimler</h3>
                            <p>{formData.ekMalzemeler.length * 5}₺</p>

                        </div>

                        <div className='toplam'>
                            <h3>Toplam</h3>
                            <p>{(formData.price * siparisAdeti).toFixed(2)}₺</p>

                        </div>
                    </div>
                </div>

                {/* 📌 FOOTER - SİPARİŞ VER BUTONU */}
                <button className="siparis-ver" onClick={handleSubmit}>
                    SİPARİŞ VER
                </button>
            </form >

            <Footer />

        </>
    );
};


export default OrderForm;