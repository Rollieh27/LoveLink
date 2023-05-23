import Nav from "../components/Nav";
import AuthModal from "../components/AuthModal";
import { useState } from "react";
import SignupForm from "../components/SignupForm";
import LoginForm from "../components/LoginForm";
import { Link, useLocation } from "react-router-dom";

const Home = () => {
  const [showModal, setShowModal] = useState(false);
  const [isSignUp, setIsSignUp] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [authToken, setAuthToken] = useState(false);
  const location = useLocation();
  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };
  const handleClick = () => {
    // if (authToken) {
    //   window.location.href = "/login";
    // } else {
    //   window.location.href = "/signup";
    // }
    setShowModal(true);
    setIsSignUp(true);
  };
  return (
    <div className="overlay">
      <Nav
        minimal={false}
        authToken={authToken}
        setShowModal={setShowModal}
        showModal={showModal}
        setIsSignUp={setIsSignUp}
      />
      <div className="home">
        <h1 className="primary-title">LoveLink</h1>
        {/* <Link className="btn btn-lg btn-info m-2" to="/onboarding"> */}
        <button className="primary-button" onClick={handleClick}>
          {authToken ? "signout" : "Sign Up"}
        </button>
        {showModal && (
          <AuthModal
            setShowModal={setShowModal}
            isSignUp={isSignUp}
            handleSubmit={handleSubmit}
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            confirmPassword={confirmPassword}
            setConfirmPassword={setConfirmPassword}
          />
        )}
      </div>
    </div>
  );
};

export default Home;
