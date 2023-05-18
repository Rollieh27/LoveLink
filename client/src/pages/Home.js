import Nav from "../components/Nav";
import AuthModal from "../components/AuthModal";
import { useState } from "react";

const Home = () => {
  const [showModal, setShowModal] = useState(false);
  const [isSignUp, setIsSignUp] = useState(true);

  const authToken = false;

  const handleClick = () => {
    console.log("clicked");
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
        <button className="primary-button" onClick={handleClick}>
          {authToken ? "signout" : "Log In / Sign Up"}
        </button>

        {showModal && (
          <AuthModal setShowModal={setShowModal} isSignUp={isSignUp} />
        )}
      </div>
    </div>
  );
};

export default Home;
