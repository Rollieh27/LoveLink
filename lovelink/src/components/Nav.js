import logo from '/Users/stiven.mike/Documents/LoveLink/lovelink/src/images/images.png'
import colorLogo from '/Users/stiven.mike/Documents/LoveLink/lovelink/src/images/download (2).png'
const Nav = ({minimal, authToken, setShowModal, showModal, setIsSignUp}) => {

    const handleClick = () => {
        setShowModal(true)
        setIsSignUp(false)
    }
    return (
        <nav>
            <div className="logo-container">
                <img className="logo" src={minimal ? colorLogo : logo}/>
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