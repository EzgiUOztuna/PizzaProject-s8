import React from 'react';
import "./HomeCardPictures.css"
import menuData from '../assets/DummyData';

const HomeCardPictures = () => {
    return (
        <div className='cards-and-pictures'>

            <div className='terminal-pizza'>
                <img src='/Iteration-2-aseets/pictures/food-1.png' className='ter-piz' />
                <h2>{menuData.menuTitle.find(item => item.id === 4)?.name}</h2>
                <div className='subtitles-ter-piz'>
                    <span className="rating-pizza">4.9
                        <span className="rating-count-pizza">(200)</span>
                    </span>
                    <p>{menuData.menuTitle.find(item => item.id === 4)?.price}₺</p>
                </div>

            </div>

            <div className='absolute-pizza'>
                <img src='/Iteration-2-aseets/pictures/food-2.png' className='abs-piz' />
                <h2>{menuData.menuTitle.find(item => item.id === 1)?.name}</h2>
                <div className='subtitles-abs-piz'>
                    <span className="rating-abs">4.9
                        <span className="rating-count-abs">(200)</span>
                    </span>
                    <p>{menuData.menuTitle.find(item => item.id === 1)?.price}₺</p>
                </div>
            </div>

            <div className='tavuk-burger'>
                <img src='/Iteration-2-aseets/pictures/food-3.png' className='tvk-brgr' />
                <h2>{menuData.menuTitle.find(item => item.id === 5)?.name}</h2>
                <div className='subtitles-tvk-brgr'>
                    <span className="rating-brgr">4.9
                        <span className="rating-count-brgr">(200)</span>
                    </span>
                    <p>{menuData.menuTitle.find(item => item.id === 5)?.price}₺</p>
                </div>
            </div>






        </div>
    )

}

export default HomeCardPictures;
