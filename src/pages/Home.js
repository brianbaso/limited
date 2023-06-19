import { Link } from 'react-router-dom';
import pharrell from '../assets/images/pharrell.jpeg'

function Home() {
    return (
        <>
          <div>
            <h1 className="floating-heading">limited 🥀</h1>
            <p className="home-subheading">Use your DAW with only 4 predetermined tracks allowed.<br/> 20-30 minute sessions. No expectations. Unlimited creativity.</p>
            <p className="home-body">Limited is an app that pushes music producers into new ways of thinking by putting limits on what they can create. <br/>Tracks made with <i>limited</i> enable you to get unique repetitions in, the best way to practice and get better as a producer.</p>
            <div className="home-quote-container">
              <img className="home-quote-photo" src={pharrell} alt="Pharrell Williams" />
              <p className="home-quote">"Once you see 10,000 buttons and infinite possibilities it just becomes so much you lose yourself. You should start with something that doesn’t accommodate you fully so you strive for more." — Pharrell Williams</p>
            </div>
            <div className="home-button-container">
              <Link to="/produce">
                <button className="primary-button">start</button>
              </Link>
              {/* <button className="secondary-button">learn more</button> */}
            </div>
          </div>
        </>
    );
}

export default Home;
