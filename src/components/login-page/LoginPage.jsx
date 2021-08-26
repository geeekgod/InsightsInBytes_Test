import * as React from "react";
import { useState, useEffect } from "react";
import "./loginpage.css";
import Button from "@material-ui/core/Button";
import Checkbox, { CheckboxProps } from "@material-ui/core/Checkbox";


export const LoginPage = (props) => {
  useEffect(() => {
    document.title = "Login - InsightsInBytes";
  }, []);

  const [loginHook, setLoginHook] = useState(true);
  const [checkHook, setCheckHook] = useState(false);

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const rememberClicked = () => {
    const check = document.getElementById("check").checked;
    setCheckHook(!checkHook);
    document.getElementById("check").checked = checkHook;
  };

  return (
    <>
      <div
        className="LoginPage max-width"
        data-aos="fade-in"
        data-aos-duration="2000"
        style={{}}
      >
        <div className="container" style={{ height: "100%" }}>
          <div className="row" style={{ height: "100%" }}>
            <div className="LoginPageImage col-md-6">
              <img src={props.loginImg} alt="" />
            </div>

            <div
              style={{
                display: "flex",
                marginTop: "auto",
                marginBottom: "auto",
              }}
              className="LoginMain col-md-6"
            >
              <div className="container">
                <h1
                  style={{
                    fontWeight: "700",
                    fontSize: "45px",
                    marginBottom: "1rem",
                  }}
                  data-aos="fade-in"
                  data-aos-duration="500"
                >
                  Welcome To Insightsinbytes
                </h1>

                {loginHook ? (
                  <h4
                    style={{ color: "rgba(0,0,0,0.6)" }}
                    data-aos="fade-in"
                    data-aos-duration="500"
                  >
                    Please Login To Your Account
                  </h4>
                ) : (
                  <h4
                    style={{ color: "rgba(0,0,0,0.6)" }}
                    data-aos="fade-in"
                    data-aos-duration="500"
                  >
                    Create a new account
                  </h4>
                )}

                <div
                  className="InputCont container my-2"
                  data-bs-toggle="tooltip"
                  data-bs-placement="top"
                  title="Tooltip on top"
                  data-aos="fade-left"
                  data-aos-duration="1000"
                >
                  <i className="fas fa-user mx-4"></i>
                  <input
                    placeholder="Enter your name"
                    type="text"
                    name="name"
                    id="name"
                    onChange={e => setUserName(e.target.value)}
                    value={userName}
                  />
                </div>

                <div
                  className="InputCont container my-2"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  <i className="fas fa-unlock mx-4"></i>
                  <input
                    placeholder="Enter your password"
                    type="password"
                    name="password"
                    id="password"
                    minLength="8"
                    onChange={e => setPassword(e.target.value)}
                    value={password}
                  />
                </div>

                {loginHook ? (
                  " "
                ) : (
                  <div
                    className="InputCont container my-2"
                    data-aos="fade-right"
                    data-aos-duration="1000"
                  >
                    <i className="fas fa-lock mx-4"></i>
                    <input
                      placeholder="Confirm your password"
                      type="password"
                      name="confPassword"
                      id="confPassword"
                      minLength="8"
                    />
                  </div>
                )}

                <div
                  style={{ display: "flex", padding: "0.5rem" }}
                  className="Remember my-3"
                >
                  <Checkbox id="check" onClick={() => { rememberClicked() }} name="checkedF" color="primary" />
                  <label style={{ marginTop: "auto", marginBottom: "auto" }} onClick={() => rememberClicked()} className="mx-4">
                    Remember Me
                  </label>

                  <p
                    onClick={() => setLoginHook(!loginHook)}
                    style={{
                      cursor: "pointer",
                      color: "#3b5999",
                      fontWeight: "400",
                    }}
                  >
                    {loginHook
                      ? "Create a account"
                      : "Login to your existing account"}
                  </p>
                </div>

                <div
                  style={{
                    display: "flex",
                    marginTop: "1rem",
                    width: "20rem",
                    marginTop: "1.5rem",
                    marginBottom: "1.5rem",
                  }}
                >
                  <Button onClick={() => props.onLogin(userName, password)} variant="contained" color="primary">
                    {loginHook ? "Login" : "Register"}
                  </Button>
                </div>

                <div className="SocialLogin my-4 d-flex">
                  <p
                    style={{
                      marginTop: "auto",
                      marginBottom: "auto",
                      marginRight: "1rem",
                    }}
                  >
                    {loginHook ? "Or Login With" : "Sign Up with "}
                  </p>
                  <i className="fab fa-facebook-f"></i>

                  <i className="fab fa-google-plus-g"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
