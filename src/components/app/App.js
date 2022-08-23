import Header from "../header/Header";
import LeftMenu from "../left-menu/LeftMenu";
import Map from "../map/Map";
import AdsList from "../ads-list/AdsList";

import './App.css';
import {useJsApiLoader} from "@react-google-maps/api";
import {useCallback, useState} from "react";

const API_KEY = process.env.REACT_APP_API_KEY;

const defaultCenter = {
    lat: 48.5132,
    lng: 32.2597
};

const libraries = ['places'];

const App = () => {

    const [center, setCenter] = useState(defaultCenter);

    const {isLoaded} = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: API_KEY,
        libraries
    });
    
    const onPlaceSelect = useCallback(
        (coordinates) => {
            setCenter(coordinates);
        },
        [],
    );

    return (
        <div className="App">
            <Header isLoaded={isLoaded} onSelect={onPlaceSelect}/>
            <div className='main-content'>
                <LeftMenu/>
                {isLoaded ? <Map center={center}/> : <h2>Loading</h2>}
                <AdsList/>
            </div>
        </div>
    );
}

export default App;
