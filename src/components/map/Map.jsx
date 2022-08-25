import React, {useCallback} from 'react';
import './Map.css';
import {GoogleMap} from "@react-google-maps/api";
import {defaultTheme} from "./Theme";
import CurrentLocationMarker from "./CurrentLocationMarker";
import CustomMarker from "./CustomMarker";

const containerStyle = {
    width: '100%',
    height: '100%'
};

export const MODES = {
    MOVE: 0,
    SET_MARKER: 1
}

const defaultOptions = {
    panControl: true,
    zoomControl: true,
    mapTypeControl: false,
    scaleControl: false,
    streetViewControl: false,
    rotateControl: false,
    clickableIcons: false,
    keyboardShortcuts: false,
    scrollwheel: true,
    disableDoubleClickZoom: true,
    fullscreenControl: false,
    styles: defaultTheme
}

const Map = ({center, mode, places, onMarkerAdd, onChoosePlace}) => {
    const mapRef = React.useRef(undefined);

    const onLoad = React.useCallback(function callback(map) {
        mapRef.current = map;
    }, [])

    const onUnmount = React.useCallback(function callback(map) {
        mapRef.current = undefined;
    }, [])

    const onClick = useCallback((loc) => {
        if(mode === MODES.SET_MARKER) {
            const lat = loc.latLng.lat();
            const lng = loc.latLng.lng();
            onMarkerAdd({lat, lng})
        }
    }, [mode, onMarkerAdd])

    return (
        <div className='map'>
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={10}
                onLoad={onLoad}
                onUnmount={onUnmount}
                onClick={onClick}
                options={defaultOptions}
            >
                <CurrentLocationMarker position={center}/>
                {places.map(item => {
                    const pos = {
                        lat: item.lat,
                        lng: item.lng
                    };
                    return <CustomMarker position={pos} adInMarker={item} onChoosePlace={onChoosePlace} key={item.id}/>
                })}
            </GoogleMap>
        </div>
    );
};

export default Map;
