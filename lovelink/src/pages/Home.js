import Nav from '../components/Nav'

const Home = () => {

    const authToken = false

    const handleClick = () => {
        console.log('clicked')
    }
    return (
        <>
        <Nav minimal={false}/>
        <div className="home">
            <h1>Swipe Right®</h1>
            <button className="primary-button" onClick={handleClick}>
                {authToken ? 'signout' : 'Create Account'}
            </button>
        </div>
        </>
    )
}

export default Home