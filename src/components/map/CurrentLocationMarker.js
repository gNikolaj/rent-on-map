import React from 'react';
import {MarkerF} from "@react-google-maps/api";

const CurrentLocationMarker = ({position}) => {
    return (
        <MarkerF position={position}/>
    );
};

export default CurrentLocationMarker;
