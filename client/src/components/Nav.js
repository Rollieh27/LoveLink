import logo from "../images/whitelogo.png";
import redlogo from "../images/redlogo.png";
const Nav = ({ minimal, authToken, setShowModal, showModal, setIsSignUp }) => {
  const handleClick = () => {
    // window.location.href = "/login";

    setShowModal(true);
    setIsSignUp(false);
  };

  return (
    <nav>
      <div className="logo-container">
        <img className="logo" src={minimal ? redlogo : logo} alt="" />
      </div>
      {!authToken && !minimal && (
        <button
          className="nav-button"
          onClick={handleClick}
          disabled={showModal}
        >
          LOG IN
        </button>
      )}
    </nav>
  );
};

export default Nav;
