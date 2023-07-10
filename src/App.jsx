import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import MeteoriteList from "./components/MeteoriteList";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Icon } from "leaflet";
import axios from "axios";

function App() {
    const [meteorites, setMeteorites] = useState([]);

    useEffect(() => {
        axios
            .get("https://data.nasa.gov/resource/gh4g-9sfh.json")
            .then((response) => {
                setMeteorites(response.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    const position = [51.505, -0.09];
    return (
        <div className="app-container">
            <Header />
            <SearchBar setMeteorites={setMeteorites} />
            <div className="leaflet-container">
                <MapContainer
                    center={position}
                    zoom={13}
                    scrollWheelZoom={true}
                    style={{ minHeight: "100vh", minWidth: "100vw" }}
                >
                    <TileLayer
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={position}>
                        <Popup>
                            A pretty CSS3 popup. <br /> Easily customizable.
                        </Popup>
                    </Marker>
                </MapContainer>
            </div>
            {/* <MeteoriteList meteorites={meteorites} /> */}
        </div>
    );
}

export default App;
