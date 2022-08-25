import React from 'react';
import {MarkerF} from "@react-google-maps/api";
import icon from '../../assets/img/marker.png';

const CurrentLocationMarker = ({position}) => {
    return (
        <MarkerF position={position} icon={icon}/>
    );
};

export default CurrentLocationMarker;
