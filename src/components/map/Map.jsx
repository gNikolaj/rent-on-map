import React from 'react';
import './Map.css';
import {GoogleMap} from "@react-google-maps/api";
import {defaultTheme} from "./Theme";

const containerStyle = {
    width: '100%',
    height: '100%'
};

const center = {
    lat: 48.5132,
    lng: 32.2597
};

const  defaultOptions = {
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

const Map = () => {

    const mapRef = React.useRef(undefined);

    const onLoad = React.useCallback(function callback(map) {
        mapRef.current = map;
    }, [])

    const onUnmount = React.useCallback(function callback(map) {
        mapRef.current = undefined;
    }, [])

    return (
        <div className='map'>
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={10}
                onLoad={onLoad}
                onUnmount={onUnmount}
                options={defaultOptions}
            >
                { /* Child components, such as markers, info windows, etc. */ }
                <></>
            </GoogleMap>
        </div>
    );
};

export default Map;
