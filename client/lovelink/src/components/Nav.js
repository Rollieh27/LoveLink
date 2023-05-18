import logo from "../images/whitelogo.png";
import redlogo from "../images/redlogo.png";
const Nav = ({ minimal, setShowModal, showModal, setIsSignUp }) => {
  const handleClick = () => {
    setShowModal(true);
    setIsSignUp(false);
  };

  const authToken = false;
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
          Log In
        </button>
      )}
    </nav>
  );
};

export default Nav;