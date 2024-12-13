import React from "react";
import "./OrderFormMenuDetails.css"

const MenuDetails = () => {
    const initialPrice = 85.50;

    return (
        <div>
            {/* 📌 MAIN - BAŞLIK / PRICE / RATING'LER */}
            <p p className='titleOne'> Position Absolute Acı Pizza </p>

            <div className="price-rating-container">
                <span className="price">{initialPrice}₺</span>
                <span className="rating">4.9
                    <span className="rating-count">(200)</span>
                </span>
            </div>

            {/* 📌 MAIN - PARAGRAF */}
            <p className='desc'>
                Frontent Dev olarak hala position:absolute kullanıyorsan bu çok acı pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan kökenli lezzetli bir yemektir. . Küçük bir pizzaya bazen pizzetta denir.
            </p>
        </div>
    )
}

export default MenuDetails;



