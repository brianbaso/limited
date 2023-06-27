import SignUpForm from '../components/SignUpForm.js';

function SignUp() {
    return (
        <>
          <div>
            <h1 className="floating-heading start-heading">limited 🥀</h1>
            <h2 className="auth-subheader">A unique way to practice.</h2>
            <p className="auth-subtext">Please enter your details.</p>
            <SignUpForm />
          </div>
        </>
    );
}

export default SignUp;
