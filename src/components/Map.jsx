import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const Map = ({ meteorites }) => {
    return (
        <section className="leaflet-container">
            <MapContainer
                center={[51.505, -0.09]} //coordinates to put Europe as a center
                zoom={2}
                scrollWheelZoom={true}
                style={{ width: "100%" }}
            >
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {meteorites
                    .filter((meteorite) => meteorite.geolocation)
                    .map((meteorite) => (
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
                    ))}
            </MapContainer>
        </section>
    );
};

export default Map;
