import axios from "axios";

export const getAds = async () => {
    const {data} = await axios.get('https://rent-on-map.herokuapp.com/api/places');
    return data;
}

export const postAd = (product) => {
    return axios.post('https://rent-on-map.herokuapp.com/api/places', product);
}