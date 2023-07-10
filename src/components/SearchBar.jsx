import React, { useState } from "react";

function SearchBar({ setMeteorites }) {
    const [newMeteorite, setNewMeteorite] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        // setMeteorites(newMeteorite);
        setNewMeteorite("");
    };

    return (
        <div className="search-container">
            <form onSubmit={handleSubmit}>
                <label htmlFor="search-meteorite">Search for a meteorite: </label>
                <input
                    id="search-meteorite"
                    type="text"
                    value={newMeteorite}
                    onChange={(event) => {
                        setNewMeteorite(event.target.value);
                    }}
                />
                <button>Search</button>
            </form>
        </div>
    );
}

export default SearchBar;
