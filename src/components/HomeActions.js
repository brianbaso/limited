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
                <select id="genre" name="genre" defaultValue="" onChange={handleGenreChange}>
                <option value="" disabled selected>
                    Choose a genre...&nbsp; 🔽 
                </option>
                <option value="alternative">Alt/Indie Rock 🎸</option>
                <option value="hiphop">Hip Hop/Rap 🎤</option>
                <option value="electronic">Electronic ⚡</option>
                </select>
            </div>
            <div>
                <label htmlFor="vocals">
                Adding vocals? &nbsp;
                </label>
                <input type="checkbox" id="vocals" name="vocals" className="vocals-checkbox" onChange={handleCheckboxChange}/>
            </div>
            <div>
              <Link to="/produce">
                <button className="primary-button">start</button>
              </Link>
            </div>
            
            {/* <button className="secondary-button">learn more</button> */}
        </>
    );
}

export default HomeActions;