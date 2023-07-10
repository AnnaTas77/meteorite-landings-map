import { useEffect, useState } from "react";
import axios from "axios";
import Header from "./components/Header";
import MeteoritesList from "./components/MeteoritesList";
import Map from "./components/Map";

function App() {
    const [meteorites, setMeteorites] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        axios
            .get("https://data.nasa.gov/resource/gh4g-9sfh.json")
            .then((response) => {
                setMeteorites(response.data);
                setIsLoading(false);
            })
            .catch((err) => {
                console.log("Error fetching meteorite data: ", err);
            });
    }, []);

    return (
        <div className="app-container">
            <Header />
            {isLoading ? <p>Loading...</p> : <Map meteorites={meteorites} />}
            <MeteoritesList meteorites={meteorites} />
        </div>
    );
}

export default App;
