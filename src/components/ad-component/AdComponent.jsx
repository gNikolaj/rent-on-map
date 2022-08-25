import React, {useEffect, useRef} from "react";

import FLAT from '../../assets/img/flat.jpg'
import './AdComponent.css';

const AdComponent = ({title, price, address, isSelected}) => {

    const border = isSelected ? 'ad-right-component-border-highlighted' : 'ad-right-component-border';
    const placeRef = useRef();


    useEffect(() => {
        if (isSelected) {
            placeRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [isSelected]);


    return (
        <div ref={placeRef} className={'ad-right-component ' + border}>
            <img src={FLAT} alt="flat_picture"/>
            <span>{title}</span>
            <span>{price}</span>
            <span>{address}</span>
        </div>

    );
};

export default AdComponent;
