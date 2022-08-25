import React from 'react';
import {MarkerF} from "@react-google-maps/api";
import icon from '../../assets/img/placeMarker.png';

const CustomMarker = ({position, adInMarker, onChoosePlace}) => {
    return (
        <MarkerF position={position} icon={icon} onClick={() => {onChoosePlace(adInMarker)}}/>
    );
};

export default CustomMarker;
