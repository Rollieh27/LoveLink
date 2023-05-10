import whitelogo from '../images/-11595271218jqef0xb0ta.png'
import colorlogo from '../images/Tinder-Logo-color.png'

const Nav = ({minimal}) => {

    return (
        <nav>
            <div className="logo-container">
                <img className="logo" src={minimal ? colorLogo : logo }/>
            </div>
        </nav>
    )
}

export default Nav