import React from "react";

function SingleMeteorite({ meteorite }) {
    return (
        <div className="single-meteorite">
            <h3>Name: {meteorite.name} </h3>
            <p>Mass in Grams: {meteorite.mass}</p>
            <p>Year discovered: {meteorite.year}</p>
        </div>
    );
}

export default SingleMeteorite;
