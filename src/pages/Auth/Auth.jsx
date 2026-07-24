import { SignIn } from "@clerk/clerk-react";
import "./Auth.css";

const Auth = () => {
  return (
    <div className="auth-container">
      <div className="auth-wrapper">
        <SignIn forceRedirectUrl="/" signUpForceRedirectUrl="/" />
      </div>
    </div>
  );
};

export default Auth;