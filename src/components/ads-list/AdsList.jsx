import React from 'react';
import './AdsList.css';
import AdComponent from "../ad-component/AdComponent";

const AdsList = () => {
    return (
        <div className='ad-list'>
            <button className='add-button'>Add</button>
            <AdComponent/>
            <AdComponent/>
            <AdComponent/>
        </div>
    );
};

export default AdsList;
