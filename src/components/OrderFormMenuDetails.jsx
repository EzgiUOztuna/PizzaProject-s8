import React, { useEffect, useState } from "react";
import "./OrderFormMenuDetails.css"
import menuData from '../assets/DummyData.js';

const MenuDetails = () => {

    const [menuName, setMenuName] = useState("");
    const [menuPrice, setMenuPrice] = useState();

    useEffect(() => {
        const item = menuData.menuTitle.find(item => item.id === 1);
        if (item) {
            setMenuName(item.name);
            setMenuPrice(item.price);
        }
    }, []);


    return (
        <div>
            {/* 📌 MAIN - BAŞLIK / PRICE / RATING'LER */}
            <p className='titleOne'> {menuName} </p>

            <div className="price-rating-container">
                <span className="price">{menuPrice}₺</span>
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



