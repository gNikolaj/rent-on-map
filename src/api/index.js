import axios from "axios";

export const getAds = async () => {
    const {data} = await axios.get('http://localhost:8080/places');
    return data;
}

export const postAd = (product) => {
    return axios.post('http://localhost:8080/places', product);
}