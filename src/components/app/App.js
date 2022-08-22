import Header from "../header/Header";
import LeftMenu from "../left-menu/LeftMenu";
import Map from "../map/Map";
import AdsList from "../ads-list/AdsList";

import './App.css';
import {useJsApiLoader} from "@react-google-maps/api";

const API_KEY = process.env.REACT_APP_API_KEY;

const libraries = ['places'];

function App() {
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: API_KEY,
        libraries
    })
    return (
        <div className="App">
            <Header isLoaded={isLoaded}/>
            <div className='main-content'>
                <LeftMenu/>
                {isLoaded ? <Map/> : <h2>Loading</h2>}
                <AdsList/>
            </div>
        </div>
    );
}

export default App;
