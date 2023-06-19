import React, { useState } from 'react';

const MyContext = React.createContext();

const MyContextProvider = ({ children }) => {
    const [genre, setGenre] = useState('rock');
    const [isVocalsChecked, setIsVocalsChecked] = useState(false);

    const updateGenre = (newGenre) => {
        setGenre(newGenre);
    };

    const updateIsVocalsChecked = (newIsVocalsChecked) => {
        setIsVocalsChecked(newIsVocalsChecked);
    }

    const contextValues = {
        genre,
        isVocalsChecked,
        updateGenre,
        updateIsVocalsChecked
    }

    return (
        <MyContext.Provider value={contextValues}>
            {children}
        </MyContext.Provider>
    );
}

export { MyContext, MyContextProvider };