import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import MeteoritesList from "./components/MeteoritesList";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Icon } from "leaflet";
import { MarkerClusterGroup } from "react-leaflet-markercluster";
import "react-leaflet-markercluster/dist/styles.min.css";

function App() {
    const [meteorites, setMeteorites] = useState([]);

    useEffect(() => {
        axios
            .get("https://data.nasa.gov/resource/gh4g-9sfh.json")
            .then((response) => {
                setMeteorites(response.data);
            })
            .catch((err) => {
                console.log("Error fetching meteorite data: ", err);
            });
    }, []);

    return (
        <div className="app-container">
            <Header />
            <SearchBar setMeteorites={setMeteorites} />
            <div className="leaflet-container">
                <MapContainer
                    center={[51.505, -0.09]} //coordinates to put Europe as a center
                    zoom={2}
                    scrollWheelZoom={true}
                    style={{ minHeight: "100vh", minWidth: "100vw" }}
                >
                    <TileLayer
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    {meteorites.map((meteorite) =>
                        meteorite.geolocation ? (
                            <Marker
                                key={meteorite.id}
                                position={[parseFloat(meteorite.reclat), parseFloat(meteorite.reclong)]}
                            >
                                <Popup>
                                    <div className="single-meteorite">
                                        <p>
                                            <span>Name: </span> {meteorite.name}
                                        </p>

                                        <p>
                                            <span>Year discovered: </span> {new Date(meteorite.year).getFullYear()}
                                        </p>

                                        <p>
                                            <span>Mass in grams: </span>
                                            {meteorite.mass}
                                        </p>

                                        <p>
                                            <span>Classification: </span> {meteorite.recclass}
                                        </p>
                                    </div>
                                </Popup>
                            </Marker>
                        ) : (
                            ""
                        )
                    )}
                </MapContainer>
            </div>
            <MeteoritesList meteorites={meteorites} />
        </div>
    );
}

export default App;
