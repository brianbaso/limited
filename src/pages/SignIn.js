import { Link } from 'react-router-dom';
import SignInForm from '../components/SignInForm.js';

function SignIn() {

    return (
        <>
          <div>
            <h1 className="floating-heading start-heading">limited 🥀</h1>
            <h2 className="auth-subheader">Welcome back!</h2>
            <p className="auth-subtext">Please enter your details.</p>
            <SignInForm />
            <div className="auth-signup-link">
              <Link to="/signup">
                <u>sign up</u>
              </Link>
            </div>
          </div>
        </>
    );
}

export default SignIn;
