import React from "react";
import SingleMeteorite from "./SingleMeteorite";

function MeteoritesList({ meteorites }) {
    return (
        <section className="list-wrapper">
            <h2 className="list-title">Meteorite List</h2>
            <div className="meteorites-list-two">
                {meteorites.map((meteorite) => {
                    return <SingleMeteorite key={meteorite.id} meteorite={meteorite} />;
                })}
            </div>
        </section>
    );
}

export default MeteoritesList;
