import "./Registration.module.css";
import React, { useState } from "react";
import BackgroundImage from "../../assets/banner.png";
import { useNavigate } from "react-router-dom";




function Registration() {
  const initialValues = { name: "", username: "", email: "", mobile: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  // const [isSubmit, setIsSubmit] = useState(false);

  const navigate = useNavigate();
  const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);
  

  // console.log(isSubmit);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleCheckboxChange = (e) => {
    setIsCheckboxChecked(e.target.checked);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const newErrors = {};

    // Email validation with a regular expression
    const emailPattern = /^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
    if (!formValues.email.match(emailPattern)) {
      newErrors.email = "Invalid email format";
    }

    // Mobile number validation with 10 digits
    const mobilePattern = /^\d{10}$/;
    if (!formValues.mobile.match(mobilePattern)) {
      newErrors.mobile = "Mobile number must be 10 digits long";
    }

    // Username validation with letters, numbers, and special symbols
    const usernamePattern = /^[a-zA-Z0-9!@#$%^&*()_+{}[\]:;<>,.?~\\/-]+$/;
    if (!formValues.username.match(usernamePattern)) {
      newErrors.username = "Invalid username format";
    }

    if (!formValues.name) {
      newErrors.name = "Name is required";
    }

    if (!formValues.username) {
      newErrors.username = "Username is required";
    }

    if (!formValues.email) {
      newErrors.email = "email is required";
    }

    if (!formValues.mobile) {
      newErrors.mobile = "mobile is required";
    }

    if (!isCheckboxChecked) {
      newErrors.checkbox = "Check this box if you want to proceed";
    }
    // Add more validation checks for username, email, and mobile here

    if (Object.keys(newErrors).length === 0) {
      // Form is valid - submit data or make an API request
      console.log("Form data submitted:", formValues);
      // Store the data in local storage
      // Generate a unique key, e.g., using a timestamp
const uniqueKey = `formData_${Date.now()}`;

// Store the form data in localStorage using the unique key
localStorage.setItem(uniqueKey, JSON.stringify(formValues));

     
      setFormValues({ name: "", username: "", email: "", mobile: "" });
      navigate("/category");
    } else {
      setFormErrors(newErrors);

    }

    
    // function updateData(data) {
    //   localStorage.setItem(formValues, JSON.stringify(formvalues));
    //   setErrors({});
    //   setFormValues({
    //     name: "",
    //     username: "",
    //     mobile: "",
    //     email: ""
        
    //   });
    //   navigate("/category");
    // }
    
  };



  return (
    <>
      <div className="container">
        <div className="img-partition">
          <img src={BackgroundImage} alt="banner" />
          <div className="text">Discover new things on Superapp</div>
        </div>
        <div className="registration-partition">
          <form action="" onSubmit={handleSubmit}>
            <div className="signup-div">
              <div className="title-div">
                <h1>Super app</h1>
                <h3>Create your new account</h3>
              </div>
              <div className="info-div">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="custom-input"
                  value={formValues.name}
                  onChange={handleChange}
                />
                {formErrors.name && <p className="error">{formErrors.name}</p>}

                <input
                  type="text"
                  name="username"
                  placeholder="UserName"
                  className="custom-input"
                  value={formValues.username}
                  onChange={handleChange}
                />
                {formErrors.username && (
                  <p className="error">{formErrors.username}</p>
                )}
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="custom-input"
                  value={formValues.email}
                  onChange={handleChange}
                />
                {formErrors.email && (
                  <p className="error">{formErrors.email}</p>
                )}

                <input
                  type="tel"
                  name="mobile"
                  placeholder="Mobile"
                  className="custom-input"
                  value={formValues.mobile}
                  onChange={handleChange}
                />
                {formErrors.mobile && (
                  <p className="error">{formErrors.mobile}</p>
                )}

                <div className="checkboxouterdiv">
                  <input
                    type="checkbox"
                    className="btn1"
                    checked={isCheckboxChecked}
                    onChange={handleCheckboxChange}
                  />

                  <p>Share my registration data with Superapp</p>
                </div>
                {formErrors.checkbox && (
                  <p className="error">{formErrors.checkbox}</p>
                )}

                <button type="submit" className="btn2">
                  SIGN UP
                </button>
                <br></br>

                <footer className="footerdiv">
                  <p>
                    By clicking on Sign up. you agree to Superapp
                    <span style={{ color: "green" }}>
                      {" "}
                      Terms and Conditions of Use
                    </span>
                  </p>
                  <p>
                    To learn more about how Superapp collects, uses, shares and
                    protects your personal data please head Superapp
                    <span style={{ color: "green" }}> Privacy Policy</span>
                  </p>
                </footer>
              </div>
              <div className="btn-condition-div"></div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Registration;
