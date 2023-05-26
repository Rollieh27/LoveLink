import React, { useState } from "react";
import { Form, Alert } from "react-bootstrap";
import { ADD_USER } from "../utils/mutations";
import { useMutation } from "@apollo/client";
import Auth from "../utils/auth";

const SignupForm = () => {
  // set initial form state
  const [userFormData, setUserFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  // set state for form validation
  const [validated] = useState(false);
  // set state for alert
  const [showAlert, setShowAlert] = useState(false);
  const [addUser, { error }] = useMutation(ADD_USER);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    // check if form has everything (as per react-bootstrap docs)
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    try {
      const { data } = await addUser({
        variables: {
          username: userFormData.username,
          email: userFormData.email,
          password: userFormData.password,
        },
      });

      if (error) {
        throw new Error("something went wrong!");
      }
      Auth.login(data.addUser.token);
      window.location.href= "/onboarding"
    } catch (err) {
      console.error(err);
      setShowAlert(true);
    }

    setUserFormData({
      username: "",
      email: "",
      password: "",
      confirm: "",
    });
  };

  return (
    <div className="signup-popup">
      <div className="signup-popup-overlay"></div>
      <div className="signup-popup-content">
        <h2 className="signup-heading">SIGN UP</h2>
        {/* This is needed for the validation functionality above */}
        <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
          {/* show alert if server response is bad */}
          <Alert
            dismissible
            onClose={() => setShowAlert(false)}
            show={showAlert}
            variant="danger"
          >
            Something went wrong with your signup!
          </Alert>

          <div className="form-group">
            <Form.Label htmlFor="username">Username</Form.Label>
            <Form.Control
              type="text"
              placeholder="Your username"
              name="username"
              onChange={handleInputChange}
              value={userFormData.username}
              required
            />
            {/* <Form.Control.Feedback type="invalid">
              username is required!
            </Form.Control.Feedback> */}
          </div>

          <div className="form-group">
            <Form.Label htmlFor="username">Email</Form.Label>
            <Form.Control
              type="text"
              placeholder="Your email"
              name="email"
              onChange={handleInputChange}
              value={userFormData.email}
              required
            />
            {/* <Form.Control.Feedback type="invalid">
              Email is required!
            </Form.Control.Feedback> */}
          </div>

          <div className="form-group">
            <Form.Label htmlFor="password">Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Your password"
              name="password"
              onChange={handleInputChange}
              value={userFormData.password}
              required
            />
            {/* <Form.Control.Feedback type="invalid">
              Password is required!
            </Form.Control.Feedback> */}
          </div>

          <div className="form-group">
            <Form.Label htmlFor="confirm-password">Confirm Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Confirm your password"
              name="confirm"
              onChange={handleInputChange}
              value={userFormData.confirm || ""}
              required
            />
            {/* <Form.Control.Feedback type="invalid">
              Password is required!
            </Form.Control.Feedback> */}
          </div>
          <div className="submit-button">
            <button type="submit" variant="success">
              Submit
            </button>
          </div>
        {/* </Form> */}
        <div className="note">App coming soon</div>
        {/* <Form.Group>
          <Form.Label htmlFor="confirm-password">Confirm Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Confirm your password"
            name="confirm"
            onChange={handleInputChange}
            value={userFormData.confirm || ''}
            required
          />
          <Form.Control.Feedback type="invalid">
            Password is required!
          </Form.Control.Feedback>
        </Form.Group>
        <Button
          // disabled={
          //   !(
          //     userFormData.username &&
          //     userFormData.email &&
          //     userFormData.password &&
          //     userFormData.confirm
          //   )
          // }
          type="submit"
          variant="success"
        >
          Submit
        </Button> */}
      </Form>
      </div>
    </div>
        
  );
};

export default SignupForm;
