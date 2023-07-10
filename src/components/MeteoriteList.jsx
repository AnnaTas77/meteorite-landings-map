import React from "react";
import SingleMeteorite from "./SingleMeteorite";

function MeteoriteList({ meteorites }) {
    return (
        <div className="meteorites-list">
            <h2>MeteoriteList</h2>
            {meteorites.map((meteorite) => {
                return <SingleMeteorite key={meteorite} meteorite={meteorite} />;
            })}
        </div>
    );
}

export default MeteoriteList;
