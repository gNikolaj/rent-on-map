import React from 'react';
import {MarkerF} from "@react-google-maps/api";

const CustomMarker = ({position}) => {
    return (
        <MarkerF position={position}/>
    );
};

export default CustomMarker;
