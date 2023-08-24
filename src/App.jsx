import { useEffect, useState } from "react";
import getMeteoriteData from "./utils/getMeteoriteData";
import Header from "./components/Header";
import MeteoritesTable from "./components/MeteoritesTable";
import MapComponent from "./components/MapComponent";
import Footer from "./components/Footer";
import LoadingSkeleton from "./components/LoadingSkeleton";
import "./index.css";

function App() {
    const [meteorites, setMeteorites] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);

    const [flyToLocation, setFlyToLocation] = useState(null);

    useEffect(() => {
        setIsLoading(true);
        getMeteoriteData()
            .then((data) => {
                setMeteorites(data);
                setIsError(false);
                setIsLoading(false);
            })
            .catch((err) => {
                console.log("Error fetching meteorite data: ", err);
                setIsError(true);
            });
    }, []);

    return (
        <div className="app-container">
            <Header />
            {!isError ? (
                <main>
                    {isLoading ? (
                        <LoadingSkeleton />
                    ) : (
                        <MapComponent meteorites={meteorites} flyToLocation={flyToLocation} />
                    )}
                    {!isLoading ? <MeteoritesTable meteorites={meteorites} setFlyToLocation={setFlyToLocation} /> : ""}
                </main>
            ) : (
                <div className="flex h-[78vh] w-full items-start justify-center mt-20">
                    <p className="flex w-[80%] max-w-[400px] items-center justify-center bg-red-600 text-white font-bold text-center p-4 rounded">
                        Oops! Something went wrong. Please try again.
                    </p>
                </div>
            )}

            <Footer />
        </div>
    );
}

export default App;
