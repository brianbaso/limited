import React, { useState } from 'react';

const MyContext = React.createContext();

const MyContextProvider = ({ children }) => {
    const [genre, setGenre] = useState('rock');
    const [isVocalsChecked, setIsVocalsChecked] = useState(false);
    const [cacheSounds, setCacheSounds] = useState('')

    const updateGenre = (genre) => {
        setGenre(genre);
    }

    const updateIsVocalsChecked = (newIsVocalsChecked) => {
        setIsVocalsChecked(newIsVocalsChecked);
    }

    const updateCacheSounds = (cacheSounds) => {
        setCacheSounds(cacheSounds)
    }

    const contextValues = {
        genre,
        isVocalsChecked,
        cacheSounds,
        updateGenre,
        updateIsVocalsChecked,
        updateCacheSounds
    }

    return (
        <MyContext.Provider value={contextValues}>
            {children}
        </MyContext.Provider>
    );
}

export { MyContext, MyContextProvider };