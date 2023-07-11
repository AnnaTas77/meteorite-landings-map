import axios from "axios";

const getMeteoriteData = () => {
    return axios.get("https://data.nasa.gov/resource/gh4g-9sfh.json").then((response) => {
        return response.data;
    });
};

export default getMeteoriteData;
