import React from "react";

function SingleMeteorite({ meteorite }) {
    const dateStr = meteorite.year;
    const dateObj = new Date(dateStr);
    const year = dateObj.getFullYear();

    return (
        <div className="single-meteorite-two">
            <p>
                <span>Name: </span> {meteorite.name}
            </p>

            <p>
                <span>Year discovered: </span> {new Date(meteorite.year).getFullYear()}
            </p>

            <p>
                <span>Mass in grams: </span>
                {meteorite.mass}
            </p>

            <p>
                <span>Classification: </span> {meteorite.recclass}
            </p>
        </div>
    );
}

export default SingleMeteorite;
