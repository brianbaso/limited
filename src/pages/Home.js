import { Link } from 'react-router-dom';

function Home() {
    return (
        <>
            <div>
                <h1 className="floating-heading">limited 🥀</h1>
                <Link to="/new-song">
                <button>start</button>
                </Link>
            </div>
        </>
    );
}

export default Home;
