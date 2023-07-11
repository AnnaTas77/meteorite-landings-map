import { useEffect, useState } from "react";
import axios from "axios";
import getMeteoriteData from "../getMeteoriteData";
import Header from "./components/Header";
import MeteoritesList from "./components/MeteoritesList";
import Map from "./components/Map";

function App() {
    const [meteorites, setMeteorites] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

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
                {isLoading ? <p className="loading">Loading...</p> : <Map meteorites={meteorites} />}
                {!isLoading ? <MeteoritesList meteorites={meteorites} /> : ""}
            </main>
        </div>
    );
}

export default App;
