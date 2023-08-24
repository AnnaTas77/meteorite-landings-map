import { useEffect, useState } from "react";
import getMeteoriteData from "../getMeteoriteData";
import Header from "./components/Header";
import MeteoritesTable from "./components/MeteoritesTable";
import MapComponent from "./components/MapComponent";
import Footer from "./components/Footer";
import LoadingSkeleton from "./components/LoadingSkeleton";
import "./index.css";

function App() {
    const [meteorites, setMeteorites] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const [flyToLocation, setFlyToLocation] = useState(null);

    useEffect(() => {
        setIsLoading(true);
        getMeteoriteData()
            .then((data) => {
                setMeteorites(data);
                setIsLoading(false);
            })
            .catch((err) => {
                console.log("Error fetching meteorite data: ", err);
            });
    }, []);

    return (
        <div className="app-container">
            <Header />

            <main>
                {isLoading ? (
                    <LoadingSkeleton />
                ) : (
                    <MapComponent meteorites={meteorites} flyToLocation={flyToLocation} />
                )}
                {!isLoading ? <MeteoritesTable meteorites={meteorites} setFlyToLocation={setFlyToLocation} /> : ""}
            </main>

            <Footer />
        </div>
    );
}

export default App;
