import {useJsApiLoader} from "@react-google-maps/api";
import React, {useCallback, useEffect, useState} from "react";

import Modal from "../modal-window/Modal";
import AdsList from "../ads-list/AdsList";

import Map, {MODES} from "../map/Map";
import {getAds, postAd} from "../../api";

import { defaultCenter, libraries} from "../../utils";

import './App.css';
import SearchInput from "../search-input/SearchInput";

const App = () => {
    const [center, setCenter] = useState(defaultCenter);
    const [mode, setMode] = useState(MODES.MOVE);
    const [showModal, setShowModal] = useState(false);
    const [places, setPlaces] = useState([]);
    const [newMarker, setNewMarker] = useState({});
    const [selectedPlace, setSelectedPlace] = useState(null);

    const {isLoaded} = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: 'AIzaSyAyJnDs_s80VtU0DPKAr8bNfDahtQx65qU',
        libraries
    });

    const onPlaceSelect = (coordinates) => {
        setCenter(coordinates);
    };

    const toggleMode = useCallback(() => {
        switch (mode) {
            case MODES.MOVE:
                setMode(MODES.SET_MARKER);
                break;
            case MODES.SET_MARKER:
                setMode(MODES.MOVE);
                break;
            default:
                setMode(MODES.MOVE);
        }
    }, [mode]);

    const onMarkerAdd = (coordinates) => {
        setNewMarker(coordinates);
        setShowModal(true);
        setMode(MODES.MOVE);
    };

    const addProduct = (product) => {
        postAd(product).then(() => {
            getAds().then((data) => {
                setPlaces(data);
            });
        });
    };

    const onChoosePlace = (place) => {
        setSelectedPlace(place);
    }

    useEffect(() => {
        getAds().then((data) => {
            setPlaces(data);
        });
    }, []);

    return (
        <div className="App">
            {showModal && <Modal addProduct={addProduct} setShowModal={setShowModal} newMarker={newMarker}/>}
            {isLoaded ? <Map center={center} mode={mode} places={places} onMarkerAdd={onMarkerAdd}
                             onChoosePlace={onChoosePlace}/> :
                <h2>Loading</h2>}
            <SearchInput isLoaded={isLoaded} onSelect={onPlaceSelect}/>
            <AdsList places={places} selectedPlace={selectedPlace} toggleMode={toggleMode}/>
        </div>
    );
}

export default App;
