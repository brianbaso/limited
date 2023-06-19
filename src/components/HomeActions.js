import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { MyContext } from '../MyContext';

const HomeActions = () => {
    const { updateGenre, updateIsVocalsChecked } = useContext(MyContext);

    const handleGenreChange = (event) => {
        const selectedValue = event.target.value;
        updateGenre(selectedValue);
    };

    const handleCheckboxChange = (event) => {
        const isChecked = event.target.checked;
        updateIsVocalsChecked(isChecked);
    }

    return (
        <>
            <div>
                <label htmlFor="genre">Genre:</label>
                <select id="genre" name="genre" defaultValue="" onChange={handleGenreChange}>
                <option value="" disabled>
                    Choose a genre...
                </option>
                <option value="alternative">Alternative Rock</option>
                <option value="hiphop">Hip Hop/Rap</option>
                <option value="electronic">Electronic</option>
                </select>
            </div>
            <div>
                <label htmlFor="vocals">
                Vocals?
                </label>
                <input type="checkbox" id="vocals" name="vocals" onChange={handleCheckboxChange}/>
            </div>
            <Link to="/produce">
                <button className="primary-button">start</button>
            </Link>
            {/* <button className="secondary-button">learn more</button> */}
        </>
    );
}

export default HomeActions;