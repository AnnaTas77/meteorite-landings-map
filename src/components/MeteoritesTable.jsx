import { useState } from "react";

function MeteoritesTable({ meteorites, setFlyToLocation }) {
    const filteredMeteorites = meteorites
        .filter((meteorite) => meteorite.geolocation)
        .filter((meteorite) => meteorite.mass)
        .map((meteorite) => {
            let year;
            if (meteorite.year) {
                const dateStr = meteorite.year;
                const dateObj = new Date(dateStr);
                year = dateObj.getFullYear();
            } else {
                year = "N/A";
            }
            meteorite.yearNumber = year;
            meteorite.mass = Math.round(parseFloat(meteorite.mass).toFixed(2));
            return meteorite;
        });

    const [meteoritesToShow, setMeteoritesToShow] = useState(filteredMeteorites);
    const [nameOrdering, setNameOrdering] = useState("asc");

    function sortByTable(columnName) {
        let meteoritesToShowCopy = [...meteoritesToShow];

        if (nameOrdering === "asc") {
            meteoritesToShowCopy.sort((a, b) => {
                if (a[columnName] < b[columnName]) {
                    return 1;
                }
                if (a[columnName] > b[columnName]) {
                    return -1;
                }
                return 0;
            });
            setNameOrdering("desc");
        } else {
            meteoritesToShowCopy.sort((a, b) => {
                if (a[columnName] < b[columnName]) {
                    return -1;
                }
                if (a[columnName] > b[columnName]) {
                    return 1;
                }
                return 0;
            });
            setNameOrdering("asc");
        }

        setMeteoritesToShow(meteoritesToShowCopy);
    }

    return (
        <section className="table-container">
            <h2 className="table-title font-bold text-xl lg:text-2xl"> All Known Meteorite Landings</h2>
            <div className="table-wrapper">
                <table>
                    <thead>
                        <tr className="headings-row">
                            <th onClick={() => sortByTable("name")}>Name</th>
                            <th onClick={() => sortByTable("yearNumber")}>Year discovered</th>
                            <th onClick={() => sortByTable("mass")}>Mass in grams</th>
                            <th>Classification</th>
                            <th colSpan="2">Geolocation</th>
                        </tr>
                    </thead>
                    <tbody>
                        {meteoritesToShow.map((met) => {
                            return (
                                <tr
                                    key={met.id}
                                    onClick={() => {
                                        setFlyToLocation(met.geolocation);
                                    }}
                                >
                                    <td>{met.name}</td>
                                    <td>{met.yearNumber}</td>
                                    <td>{met.mass}</td>
                                    <td>{met.recclass}</td>
                                    <td>{met.reclat}</td>
                                    <td>{met.reclong}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </section>
    );
}

export default MeteoritesTable;
