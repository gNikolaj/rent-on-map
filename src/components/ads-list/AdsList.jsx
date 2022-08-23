import React from 'react';
import './AdsList.css';
import AdComponent from "../ad-component/AdComponent";

const AdsList = ({toggleMode}) => {
    return (
        <div className='ad-list'>
            <button className='add-button' onClick={toggleMode}>Add</button>
            <button className='add-button' onClick={toggleMode}>Delete</button>
            <AdComponent/>
            <AdComponent/>
            <AdComponent/>
        </div>
    );
};

export default AdsList;
