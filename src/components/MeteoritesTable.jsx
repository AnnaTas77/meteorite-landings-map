import React from "react";

function MeteoritesTable({ meteorites }) {
    return (
        <section className="table-container">
            <h2 className="table-title"> All Known Meteorite Landings</h2>
            <div className="table-wrapper">
                <table>
                    <thead>
                        <tr className="headings-row">
                            <th>Name</th>
                            <th>Year discovered</th>
                            <th>Mass in grams</th>
                            <th>Classification</th>
                            <th colSpan="2">Geolocation</th>
                        </tr>
                    </thead>
                    <tbody>
                        {meteorites.map((meteorite) => {
                            const dateStr = meteorite.year;
                            const dateObj = new Date(dateStr);
                            const year = dateObj.getFullYear();
                            return (
                                <tr
                                    key={meteorite.id}
                                    onClick={() => {
                                        console.log("Clicked!", meteorite.id);
                                    }}
                                >
                                    <td>{meteorite.name}</td>
                                    <td>{year}</td>
                                    <td>{meteorite.mass}</td>
                                    <td>{meteorite.recclass}</td>
                                    <td>{meteorite.reclat}</td>
                                    <td>{meteorite.reclong}</td>
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
