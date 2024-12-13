import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import "./OrderForm.css";
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import Footer from './Footer.jsx';
import MenuDetails from './OrderFormMenuDetails.jsx';

const initialPrice = 85.50;

const OrderForm = (props) => {
    const { setFormData } = props;

    const [pizzaBoyutu, setPizzaBoyutu] = useState("");
    const [hamurKalınlıgı, setHamurKalınlıgı] = useState(""); // Hamur seçimi yapılacak.
    const [error, setError] = useState(""); //Hata mesajını tutucak.
    const [ekMalzemeler, setEkMalzemeler] = useState([]);
    const [toplamFiyat, setToplamFiyat] = useState(initialPrice);
    const [malzemeHatasi, setMalzemeHatasi] = useState("");
    const [siparisAdeti, setSiparisAdeti] = useState(1);

    const ekMalzemelerListesi = ["Pepperoni", "Tavuk Izgara", "Mısır", "Sarımsak", "Ananas", "Sosis", "Soğan", "Sucuk", "Biber", "Kabak", "Kanada Jambonu", "Domates", "Jalepeno"];

    const history = useHistory();

    /* 📌 HANDLE SUBMIT */
    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!pizzaBoyutu) {
            setError("Lütfen pizza boyutunu seçiniz!");
            return;
        }
        if (!hamurKalınlıgı) {
            setError("Lütfen hamur kalınlığını seçiniz!");
            return;
        }
        if (ekMalzemeler.length < 4) {
            setMalzemeHatasi("En az 4 malzeme seçmelisiniz.");
            return;
        }
        //Seçimler geçerliyse hata sıfırlansın ve sipariş işlensin.
        setError("");
        setMalzemeHatasi("");

        const siparisDetaylari = {
            pizzaBoyutu, hamurKalınlıgı, ekMalzemeler, siparisAdeti, toplamFiyat: (toplamFiyat * siparisAdeti).toFixed(2),
        };

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


    /* 📌 HANDLE DECREASE - (-) BUTONU İÇİN */
    const handleDecrease = (e) => {
        if (siparisAdeti > 1) {
            setSiparisAdeti(siparisAdeti - 1);
        }
    };

    /* 📌 HANDLE INCREASE - (+) BUTONU İÇİN */
    const handleIncrease = () => {
        setSiparisAdeti(siparisAdeti + 1);
    }

    /* 📌 HANDLE CHANGE'LER */
    const handlePizzaBoyutChange = (yeniBoyut) => {
        if (yeniBoyut) {
            setError(""); // Hata mesajını sıfırlayın
        }
        setPizzaBoyutu(yeniBoyut.target.value);
    }

    const handleHamurKalınlıgıChange = (yeniHamurKalınlıgı) => {
        if (yeniHamurKalınlıgı) {
            setError(""); // Hata mesajını sıfırlayın
        }
        setHamurKalınlıgı(yeniHamurKalınlıgı.target.value);
    }

    const handleMalzemeChange = (e) => {
        const { value, checked } = e.target;
        let updatedMalzemeler = [...ekMalzemeler];

        if (checked) {
            if (updatedMalzemeler.length < 10) {
                updatedMalzemeler.push(value); // Malzeme ekle
            } else {
                alert("En fazla 10 malzeme seçebilirsiniz.");
                return;
            }
        } else {
            updatedMalzemeler = updatedMalzemeler.filter((item) => item !== value); // Seçtiğim malzemeyi kaldırmak istersem.
        }

        if (updatedMalzemeler.length < 4) { // Minimum malzeme kontrolü
            setMalzemeHatasi("En az 4 malzeme seçmelisiniz.");
        } else {
            setMalzemeHatasi(""); // Hata yoksa mesajı sıfırla
        }
        setEkMalzemeler(updatedMalzemeler);

        setToplamFiyat(initialPrice + updatedMalzemeler.length * 5);

    }

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

                    <div className='boyut-secim'>
                        <h2>Boyut Seç <span style={{ color: "red" }}>*</span></h2>
                        <label className='small'>
                            <input
                                type="radio"
                                value="S"
                                checked={pizzaBoyutu === "S"}
                                onChange={handlePizzaBoyutChange}
                            /> <span>S</span>
                        </label>
                        <label>
                            <input
                                type="radio"
                                value="M"
                                checked={pizzaBoyutu === "M"}
                                onChange={handlePizzaBoyutChange}
                            />
                            <span>M</span>
                        </label>
                        <label>
                            <input
                                type="radio"
                                value="L"
                                checked={pizzaBoyutu === "L"}
                                onChange={handlePizzaBoyutChange}
                            />
                            <span>L</span>
                        </label>
                    </div>


                    {/* 📌 MAIN - HAMUR KALINLIĞI SEÇME */}
                    <div className='hamur-secim'>
                        <h2>Hamur Seç<span style={{ color: "red" }}>*</span></h2>
                        <select
                            value={hamurKalınlıgı}
                            onChange={handleHamurKalınlıgıChange}
                        >
                            <option value="">-Hamur Kalınlığı Seç-</option>
                            <option value="İnce">İnce</option>
                            <option value="Orta">Orta</option>
                            <option value="Kalın">Kalın</option>
                        </select>

                    </div>
                </div>
                {error && <p style={{ color: "red" }}>{error}</p>}


                {/* 📌 MAIN - EK MALZEMELERİ SEÇME */}
                <div className='ek-malzemeler'>
                    <h2>Ek Malzemeler</h2>
                    <p>En fazla 10 malzeme seçebilirsiniz. 5₺</p>
                    {ekMalzemelerListesi.map((malzeme) => (
                        <label key={malzeme}>
                            <input
                                type="checkbox"
                                value={malzeme}
                                checked={ekMalzemeler.includes(malzeme)}
                                onChange={handleMalzemeChange}
                            />
                            {malzeme}
                        </label>
                    ))}
                    {malzemeHatasi && <p style={{ color: "red" }}>{malzemeHatasi}</p>}
                </div>

                {/* 📌 MAIN - SİPARİŞ NOTU */}
                <div className='siparis-notu'>
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
                            onClick={handleDecrease}>
                            -
                        </button>
                        <span className="count">{siparisAdeti}</span>
                        <button
                            type="button"
                            className="increment"
                            onClick={handleIncrease}>
                            +
                        </button>
                    </div>


                    {/* 📌 FOOTER - SİPARİŞ TOPLAMI */}
                    <div className="siparis-toplam">
                        <h2>Sipariş Toplamı</h2>
                        <div className='secimler'>
                            <h3>Seçimler</h3>
                            <p>{ekMalzemeler.length * 5}₺</p>
                        </div>

                        <div className='toplam'>
                            <h3>Toplam</h3>
                            <p>{(toplamFiyat * siparisAdeti).toFixed(2)}₺</p>
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