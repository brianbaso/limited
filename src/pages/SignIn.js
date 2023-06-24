import { Link } from 'react-router-dom';
import SignInForm from '../components/SignInForm.js';

function SignIn() {

    return (
        <>
          <div>
            <h1 className="floating-heading">limited 🥀</h1>
            <SignInForm />
          </div>
        </>
    );
}

export default SignIn;
