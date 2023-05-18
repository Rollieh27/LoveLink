import Nav from "../components/Nav";
import AuthModal from "../components/AuthModal";
import { useState } from "react";
// import { Link } from "react-router-dom";

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
        {/* <Link className="btn btn-lg btn-info m-2" to="/onboarding"> */}
        <button className="primary-button" onClick={handleClick}>
          {authToken ? "signout" : "Log in/Sign up"}
        </button>
        {/* </Link> */}

        {showModal && (
          <AuthModal setShowModal={setShowModal} isSignUp={isSignUp} />
        )}
      </div>
    </div>
  );
};

export default Home;
