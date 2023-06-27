import React, { useState } from 'react';

const MyContext = React.createContext();

const MyContextProvider = ({ children }) => {
    const [genre, setGenre] = useState('rock');
    const [isVocalsChecked, setIsVocalsChecked] = useState(false);
    const [sounds, setSounds] = useState(null)

    const updateGenre = (genre) => {
        setGenre(genre);
    }

    const updateIsVocalsChecked = (newIsVocalsChecked) => {
        setIsVocalsChecked(newIsVocalsChecked);
    }

    const updateSounds = (sounds) => {
        setSounds(sounds)
    }

    const contextValues = {
        genre,
        isVocalsChecked,
        sounds,
        updateGenre,
        updateIsVocalsChecked,
        updateSounds
    }

    return (
        <MyContext.Provider value={contextValues}>
            {children}
        </MyContext.Provider>
    );
}

export { MyContext, MyContextProvider };