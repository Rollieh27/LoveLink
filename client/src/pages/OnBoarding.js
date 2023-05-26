import { useState } from "react";
import Nav from "../components/Nav";
import Auth from "../utils/auth";
import { useMutation } from "@apollo/client";
import { UPDATE_USER } from "../utils/mutations";

const OnBoarding = () => {
  const [formData, setFormData] = useState({
    username: Auth.getProfile().data.username,
    dob_day: "",
    dob_month: "",
    dob_year: "",
    show_gender: false,
    gender_identity: "man",
    gender_interest: "woman",
    pictures: "",
    profile: "",
    // email: "",
    // url: "",
    // matches: [],
  });
  const [UpdateUser] = useMutation(UPDATE_USER);

  console.log(Auth.getProfile());
  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(formData);

    console.log("sumbmitted");
    await UpdateUser({
      variables: {
        user: {
          dob:
            formData.dob_month +
            "/" +
            formData.dob_day +
            "/" +
            formData.dob_year,
          gender: formData.gender_identity.toString(),
          interests: formData.gender_interest,
          profile: formData.profile,
          pictures: formData.pictures,
        },
      },
    });
    window.location.href = "/dashboard";
  };
  const handleChange = (e) => {
    console.log("change");
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    const name = e.target.name;

    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  return (
    <>
      <Nav minimal={true} setShowModal={() => {}} showModal={false} />
      <div className="onboarding">
        <h2>CREATE ACCOUNT</h2>

        <form onSubmit={handleSubmit}>
          <section>
            <label htmlFor="first_name">Username</label>
            <input
              id="username"
              type="text"
              name="username"
              placeholder="username"
              required={true}
              value={formData.username}
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
                value={formData.dob_day}
                onChange={handleChange}
              />
              <input
                id="dob_month"
                type="number"
                name="dob_month"
                placeholder="MM"
                required={true}
                value={formData.dob_month}
                onChange={handleChange}
              />
              <input
                id="dob_year"
                type="number"
                name="dob_year"
                placeholder="YYYY"
                required={true}
                value={formData.dob_year}
                onChange={handleChange}
              />
            </div>

            <label>Gender</label>
            <div className="multiple-input-container">
              <input
                id="man-gender-identity"
                type="radio"
                name="gender_identity"
                value="man"
                onChange={handleChange}
                checked={formData.gender_identity === "man"}
              />
              <label htmlFor="man-gender-identity">Man</label>
              <input
                id="woman-gender-identity"
                type="radio"
                name="gender_identity"
                value="woman"
                onChange={handleChange}
                checked={formData.gender_identity === "woman"}
              />
              <label htmlFor="woman-gender-identity">Woman</label>
              <input
                id="other-gender-identity"
                type="radio"
                name="gender_identity"
                value="other"
                onChange={handleChange}
                checked={formData.gender_identity === "other"}
              />
              <label htmlFor="other-gender-identity">Other</label>
            </div>

            <label htmlFor="show-gender">Show gender on my profile</label>
            <div className="multiple-input-container">
              <input
                id="show-gender"
                type="checkbox"
                name="show_gender"
                onChange={handleChange}
                checked={formData.show_gender}
              />
              <label htmlFor="show-gender" className="checkbox-label"></label>
            </div>
            <label>Show Me</label>
            <div className="multiple-input-container">
              <input
                id="man-gender-interest"
                type="radio"
                name="gender_interest"
                value={"man"}
                onChange={handleChange}
                checked={formData.gender_interest === "man"}
              />
              <label htmlFor="man-gender-interest">Man</label>
              <input
                id="woman-gender-interest"
                type="radio"
                name="gender_interest"
                value={"woman"}
                onChange={handleChange}
                checked={formData.gender_interest === "woman"}
              />
              <label htmlFor="woman-gender-interest">Woman</label>
              <input
                id="everyone-gender-interest"
                type="radio"
                name="gender_interest"
                value={"everyone"}
                onChange={handleChange}
                checked={formData.gender_interest === "everyone"}
              />
              <label htmlFor="everyone-gender-interest">Everyone</label>
            </div>

            <label htmlFor="about">About Me</label>
            <input
              id="about"
              type="text"
              name="about"
              required={true}
              placeholder="Tell us something about yourself.."
              value={formData.about}
              onChange={handleChange}
            />
            <input type="submit" />
          </section>

          <section>
            <label htmlFor="url">Profile Photo</label>
            <input
              type="url"
              name="pictures"
              value={formData.pictures}
              id="url"
              onChange={handleChange}
              required={true}
            />
            <div className="photo-container"></div>
            <img src={formData.pictures} alt="profile pic" />
          </section>
        </form>
      </div>
    </>
  );
};

export default OnBoarding;
