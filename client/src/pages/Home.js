import Nav from "../components/Nav";
import AuthModal from "../components/AuthModal";
import { useState } from "react";
// import { Link } from "react-router-dom";

const Home = () => {
  const [showModal, setShowModal] = useState(false);
  const [isSignUp, setIsSignUp] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [authToken, setAuthToken] = useState(false);

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
          {authToken ? "signout" : "Log In / Sign Up"}
        </button>
        {/* </Link> */}

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
