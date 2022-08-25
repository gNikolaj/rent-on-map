import AdComponent from "../ad-component/AdComponent";

import {Button} from "@mui/material";

import './AdsList.css';

const AdsList = ({places, selectedPlace, toggleMode}) => {

    return (
        <div className='ad-list'>
            <div className='add-button'>
                <Button variant="contained" onClick={toggleMode}>Add Marker</Button>
            </div>
            {places.map((item) => {
                return <AdComponent
                    title={item.title}
                    price={item.price}
                    address={item.address}
                    isSelected={selectedPlace && selectedPlace.id === item.id}
                    key={item.id}
                />
            })}
        </div>
    );
};

export default AdsList;
