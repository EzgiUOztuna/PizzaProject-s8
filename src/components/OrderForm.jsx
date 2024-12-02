import { BrowserRouter as Router, Link } from 'react-router-dom';
import React, { useState } from 'react';
import "./OrderForm.css"
import axios from 'axios';
import { useHistory } from 'react-router-dom';

export default function OrderForm() {
    const [pizzaBoyutu, setPizzaBoyutu] = useState(""); // Pizza boyutunu tutucak.
    const [hamurKalınlıgı, setHamurKalınlıgı] = useState(""); // Hamur seçimi yapılacak.
    const [error, setError] = useState(""); //Hata mesajını tutucak.
    const [ekMalzemeler, setEkMalzemeler] = useState([]);
    const [toplamFiyat, setToplamFiyat] = useState(85.50);
    const [malzemeHatasi, setMalzemeHatasi] = useState("");
    const [siparisAdeti, setSiparisAdeti] = useState(1);

    const history = useHistory();

    const ekMalzemelerListesi = ["Pepperoni", "Tavuk Izgara", "Mısır", "Sarımsak", "Ananas", "Sosis", "Soğan", "Sucuk", "Biber", "Kabak", "Kanada Jambonu", "Domates", "Jalepeno"];

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

        try {
            // API'ye POST isteği gönder
            const response = await axios.post("https://reqres.in/api/pizza", siparisDetaylari);

            // Gelen yanıtı console'a yaz
            console.log("Sipariş Özeti:", response.data);

            history.push("/confirmation");
        } catch (error) {
            console.error("Sipariş oluşturulurken bir hata oluştu:", error);
            alert("Bir hata oluştu, lütfen tekrar deneyin.");
        }
    };


    const handlePizzaBoyutChange = (e) => setPizzaBoyutu(e.target.value);
    const handleHamurKalınlıgıChange = (e) => setHamurKalınlıgı(e.target.value);

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
            updatedMalzemeler = updatedMalzemeler.filter((item) => item !== value); // Malzeme kaldır
        }

        // Minimum malzeme kontrolü
        if (updatedMalzemeler.length < 4) {
            setMalzemeHatasi("En az 4 malzeme seçmelisiniz.");
        } else {
            setMalzemeHatasi(""); // Hata yoksa mesajı sıfırla
        }
        setEkMalzemeler(updatedMalzemeler);
        setToplamFiyat(85.50 + updatedMalzemeler.length * 5);

    }


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

            <form onSubmit={handleSubmit}>
                <div className='boyut-hamur' >
                    <div className='boyut-secim'>
                        <h2>Boyut Seç <span style={{ color: "red" }}>*</span></h2>
                        <label>
                            <input
                                type="radio"
                                value="Küçük"
                                checked={pizzaBoyutu === "Küçük"}
                                onChange={handlePizzaBoyutChange}
                            />
                            Küçük
                        </label>
                        <label>
                            <input
                                type="radio"
                                value="Orta"
                                checked={pizzaBoyutu === "Orta"}
                                onChange={handlePizzaBoyutChange}
                            />
                            Orta
                        </label>
                        <label>
                            <input
                                type="radio"
                                value="Büyük"
                                checked={pizzaBoyutu === "Büyük"}
                                onChange={handlePizzaBoyutChange}
                            />
                            Büyük
                        </label>
                    </div>

                    <div className='hamur-secim'>
                        <h2>Hamur Seç<span style={{ color: "red" }}>*</span></h2>
                        <select
                            value={hamurKalınlıgı}
                            onChange={handleHamurKalınlıgıChange}
                        >
                            <option value="">Hamur Kalınlığı</option>
                            <option value="İnce">İnce</option>
                            <option value="Orta">Orta</option>
                            <option value="Kalın">Kalın</option>
                        </select>
                    </div>
                </div>
                {error && <p style={{ color: "red" }}>{error}</p>}

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

                <div className='siparis-notu'>
                    <h2>Sipariş Notu</h2>
                    <textarea
                        placeholder='Siparişine eklemek istediğin bir not var mı?'
                        rows="3"
                        cols="50"></textarea>
                </div>

                <hr className='section-divider' />




                <div className="siparis-counter-container">
                    <div className="counter">
                        <button
                            className="decrement"
                            onClick={() => {
                                if (siparisAdeti > 0) setSiparisAdeti(siparisAdeti - 1);
                            }}
                        >
                            -
                        </button>
                        <span className="count">{siparisAdeti}</span>
                        <button
                            className="increment"
                            onClick={() => setSiparisAdeti(siparisAdeti + 1)}
                        >
                            +
                        </button>
                    </div>


                    {/* Sipariş Toplamı */}
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
                {/* Sipariş Ver Butonu */}
                <button className="siparis-ver" onClick={handleSubmit}>
                    SİPARİŞ VER
                </button>
            </form >

        </>
    );
};
