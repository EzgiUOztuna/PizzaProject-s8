import { BrowserRouter as Router, Link } from 'react-router-dom';
import React, { useState } from 'react';
import "./OrderForm.css"

export default function OrderForm() {
    const [pizzaBoyutu, setPizzaBoyutu] = useState(""); // Pizza boyutunu tutucak.
    const [hamurKalınlığı, setHamurKalınlığı] = useState(""); // Hamur seçimi yapılacak.
    const [error, setError] = useState(""); //Hata mesajını tutucak.
    const [ekMalzemeler, setEkMalzemeler] = useState([]);
    const [toplamFiyat, setToplamFiyat] = useState(85.50);
    const ekMalzemelerListesi = ["Pepperoni",
        "Tavuk Izgara",
        "Mısır",
        "Sarımsak",
        "Ananas",
        "Sosis",
        "Soğan",
        "Sucuk",
        "Biber",
        "Kabak",
        "Kanada Jambonu",
        "Domates",
        "Jalepeno"];

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!pizzaBoyutu) {
            setError("Lütfen pizza boyutunu seçiniz!");
            return;
        }

        if (!hamurKalınlığı) {
            setError("Lütfen hamur kalınlığını seçiniz!");
            return;
        }

        //Seçimler geçerliyse hata sıfırlansın ve sipariş işlensin.
        setError("");
        console.log("Pizza Boyutu:", pizzaBoyutu);
        console.log("Hamur Kalınlığı:", hamurKalınlığı || "Seçim yapılmadı");
        console.log("Ek Malzemeler:", ekMalzemeler);

        alert("Sipariş başarıyla oluşturuldu!");
    };

    const handlePizzaBoyutChange = (e) => setPizzaBoyutu(e.target.value);
    const handleHamurKalınlıgıChange = (e) => setHamurKalınlığı(e.target.value);

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
                            value={hamurKalınlığı}
                            onChange={handleHamurKalınlıgıChange}
                        >
                            <option value="">Hamur Kalınlığı</option>
                            <option value="İnce">İnce</option>
                            <option value="Orta">Orta</option>
                            <option value="Kalın">Kalın</option>
                        </select>
                    </div>
                </div>

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
                </div>









                {error && <p style={{ color: "red" }}>{error}</p>}

                {/* Form Gönderme 
                <button type="submit">SİPARİŞ VER</button>*/}

            </form >

        </>
    );
}
