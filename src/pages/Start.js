import { Link } from 'react-router-dom';
import HomeActions from '../components/HomeActions.js';

function Start() {

    return (
        <>
          <div>
            <h1 className="floating-heading">limited 🥀</h1>
            <div className="start-button-container">
              <HomeActions />
            </div>
          </div>
        </>
    );
}

export default Start;
