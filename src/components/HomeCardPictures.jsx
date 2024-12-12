import React from 'react';
import "./HomeCardPictures.css"

const HomeCardPictures = () => {
    return (
        <div className='cards-and-pictures'>

            <div className='terminal-pizza'>
                <img src='Assets/Iteration-2-aseets/pictures/food-1.png' className='ter-piz' />
                <h2>Terminal Pizza</h2>
                <div className='subtitles-ter-piz'>
                    <span className="rating-pizza">4.9
                        <span className="rating-count-pizza">(200)</span>
                    </span>
                    <p>60₺</p>
                </div>

            </div>

            <div className='absolute-pizza'>
                <img src='Assets/Iteration-2-aseets/pictures/food-2.png' className='abs-piz' />
                <h2>Position Absolute Acı Pizza</h2>
                <div className='subtitles-abs-piz'>
                    <span className="rating-abs">4.9
                        <span className="rating-count-abs">(200)</span>
                    </span>
                    <p>60₺</p>
                </div>
            </div>

            <div className='tavuk-burger'>
                <img src='Assets/Iteration-2-aseets/pictures/food-3.png' className='tvk-brgr' />
                <h2>useEffect Tavuklu Burger</h2>
                <div className='subtitles-tvk-brgr'>
                    <span className="rating-brgr">4.9
                        <span className="rating-count-brgr">(200)</span>
                    </span>
                    <p>60₺</p>
                </div>
            </div>






        </div>
    )

}

export default HomeCardPictures;
