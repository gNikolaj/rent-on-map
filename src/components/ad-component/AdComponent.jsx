import React from 'react';

import FLAT from '../../assets/img/flat.jpg'

import './AdComponent.css';

const AdComponent = () => {
    return (
        <div className='ad-right-component'>
            <img src={FLAT} alt="flat_picture"/>
            <span> This is flat</span>
        </div>
    );
};

export default AdComponent;
