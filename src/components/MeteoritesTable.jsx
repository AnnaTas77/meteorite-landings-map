import { useState } from "react";

function MeteoritesTable({ meteorites, setFlyToLocation }) {
    const filteredMeteorites = meteorites
        .filter((meteorite) => meteorite.geolocation)
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
            return meteorite;
        });

    const [meteoritesToShow, setMeteoritesToShow] = useState(filteredMeteorites);
    const [nameOrdering, setNameOrdering] = useState("asc");

    function sortByTable(columnName) {
        let copy = [...meteoritesToShow];

        if (nameOrdering === "asc") {
            copy.sort((a, b) => {
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
            copy.sort((a, b) => {
                if (a.name < b.name) {
                    return -1;
                }
                if (a.name > b.name) {
                    return 1;
                }
                return 0;
            });
            setNameOrdering("asc");
        }

        setMeteoritesToShow(copy);
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
