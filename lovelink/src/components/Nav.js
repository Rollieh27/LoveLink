import logo from '../images/images.png'
import colorLogo from '../images/download (2).png'
const Nav = ({minimal, setShowModal, showModal, setIsSignUp}) => {

    const handleClick = () => {
        setShowModal(true)
        setIsSignUp(false)
    }

    const authToken = true
    return (
        <nav>
            <div className="logo-container">
                <img className="logo" src={minimal ? colorLogo : logo} alt=""/>
            </div>
            {!authToken && !minimal && <button 
            className="nav-button"
            onClick={handleClick}
            disabled={showModal}
            >Log In</button>}
        </nav>
    )
}

export default Nav 