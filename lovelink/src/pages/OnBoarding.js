import { useSate } from "react"
import Nav from '../components/Nav'

const OnBoarding = () => {

    const handleSubmit = () => {
        console.log('sumbmitted')
    }
    const handleChange = () => {
        console.log('change')
    }
    return (
        <>
        <Nav
        minimal={true}
        setShowModal={() => {}} 
        showModal={false} 
        />
        <div className="onboarding">
            <h2>CREATE ACCOUNT</h2>

            <form onSubmit={handleSubmit}>
                <section>
                    <label htmlFor="first_name">First Name</label>
                    <input
                    id="first_name"
                    type="text"
                    name="first_name"
                    placeholder="First Name"
                    required={true}
                    value={""}
                    onChange={handleChange}
                    />

                    <label>Birthday</label>
                    <div className="multiple-input-container">
                    <input
                    id="dob_day"
                    type="number"
                    name="dob_day"
                    placeholder="DD"
                    required={true}
                    value={""}
                    onChange={handleChange}
                    />
                    <input
                    id="dob_month"
                    type="number"
                    name="dob_month"
                    placeholder="MM"
                    required={true}
                    value={""}
                    onChange={handleChange}
                    />
                    <input
                    id="dob_year"
                    type="number"
                    name="dob_year"
                    placeholder="YYYY"
                    required={true}
                    value={""}
                    onChange={handleChange}
                    />
                    </div>

                    <label>Gender</label>
                    <div className="multiple-input-container">
                    <input
                    id="man-gender-identity"
                    type="radio"
                    name="gender_identity"
                    value={"man"}
                    onChange={handleChange}
                    checked={false}
                    />
                    <label htmlFor="man-gender-identity">Man</label>
                    <input
                    id="woman-gender-identity"
                    type="radio"
                    name="gender_identity"
                    value={"woman"}
                    onChange={handleChange}
                    checked={false}
                    />
                    <label htmlFor="woman-gender-identity">Woman</label>
                    <input
                    id="more-gender-identity"
                    type="radio"
                    name="gender_identity"
                    value={"more"}
                    onChange={handleChange}
                    checked={false}
                    />
                    <label htmlFor="more-gender-identity">More</label>
                    </div>

                    <label htmlFor="show-gender">Show gender on my profile</label>
                    <div className="multiple-input-container">
                    <input
                    id="show-gender"
                    type="checkbox"
                    name="gender_identity"
                    onChange={handleChange}
                    checked={false}
                    />
                    </div>
                    <label>Show Me</label>
                    <div className="multiple-input-container">
                    <input
                    id="man-gender-interest"
                    type="radio"
                    name="gender_interest"
                    value={"man"}
                    onChange={handleChange}
                    checked={false}
                    />
                    <label htmlFor="man-gender-interest">Man</label>
                    <input
                    id="woman-gender-interest"
                    type="radio"
                    name="gender_interest"
                    value={"woman"}
                    onChange={handleChange}
                    checked={false}
                    />
                    <label htmlFor="woman-gender-interest">Woman</label>
                    <input
                    id="everyone-gender-interest"
                    type="radio"
                    name="gender_interest"
                    value={"everyone"}
                    onChange={handleChange}
                    checked={false}
                    />
                    <label htmlFor="more-gender-interest">Everyone</label>
                    </div>

                    <label htmlFor="about">About Me</label>
                    <input
                    id="about"
                    type="text"
                    name="about"
                    required={true}
                    placeholder="i like long walks.."
                    value={""}
                    onChange={handleChange}
                    />
                    <input type="submit" />
                </section>

                <section>
                <label htmlFor="url">Profile Profile</label>
                <input
                type="url"
                name="url"
                id="url"
                onChange={handleChange}
                required={true}
                />
                <div className="photo-container">

                </div>
                </section>

            </form>
        </div>
        </>
    )
}

export default OnBoarding