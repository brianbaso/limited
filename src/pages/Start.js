import { useContext, useEffect } from 'react';
import HomeActions from '../components/HomeActions.js';
import { MyContext } from '../MyContext.js';

function Start() {
    const { updateIsVocalsChecked, updateGenre, sounds } = useContext(MyContext);

    useEffect(() => {
      updateIsVocalsChecked(false);
      updateGenre('rock');
    }, [])

    return (
        <>
          <div>
            <h1 className="start-heading floating-heading">limited 🥀</h1>
            <p className="start-subtext">Let's cook... 🧪</p>
            <div className="start-button-container">
              <HomeActions />
            </div>
          </div>
        </>
    );
}

export default Start;
