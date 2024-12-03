import React from 'react';
import "./Confirmation.css";
export default function Confirmation() {

    document.body.classList.add('confirmation-bg');

    return (
        <div className='conf'>
            <img className="confirmation-logo" src='Assets/Iteration-1-assets/confirmation-logo copy.svg' />
            <h1>TEBRİKLER! SİPARİŞİNİZ ALINDI!</h1>

        </div >
    );

}