import { Link } from 'react-router-dom';
import HomeActions from '../components/HomeActions.js';

function Start() {

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
