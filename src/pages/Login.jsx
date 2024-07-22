import React, { useState } from "react";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [visibilityButton, setVisibilityButton] = useState(0);
  async function login() {
    if (username != "" && password != "") { 
      setVisibilityButton(1);
      let response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: username,
          password: password,
        }),
      });
      let responsedata = await response.json();
      if (responsedata.success == true) {
        sessionStorage.setItem("auth_token", responsedata.data.token);
        sessionStorage.setItem("user_id", responsedata.data.userDetails.id);
        sessionStorage.setItem(
          "user_name",
          responsedata.data.userDetails.username
        );
        sessionStorage.setItem("user_role", responsedata.data.userDetails.role);
        swal({
          title: "Oooooo",
          text: "You Have Successfully Logged In",
          icon: "success",
          button: "Ok",
        }).then(() => {
          window.location.replace("/dashboard");
        });

        setVisibilityButton(0);
      } else {
        setVisibilityButton(0);
        alert("You Have Entered Wrong Credentials");
      }
    } else {
      swal({
        title: "Oooooo",
        text: "Please Enter Your Credentials Properly",
        icon: "warning",
        button: "Ok",
      });
    }
  }
  return (
    <div
  className="vertical-layout vertical-menu-modern blank-page navbar-floating footer-static"
  data-open="click"
  data-menu="vertical-menu-modern"
  data-col="blank-page"
>
  <div className="app-content content">
    <div className="content-overlay"></div>
    <div className="header-navbar-shadow"></div>
    <div className="content-wrapper">
      <div className="content-header row"></div>
      <div className="content-body">
        <div className="auth-wrapper auth-basic px-2 py-5">
          <div className="auth-inner my-2 mx-auto col-md-4">
            <div className="card mb-0">
              <div className="card-body">
                <a href="index.html" className="brand-logo">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 100 100"
                    fill="none"
                    stroke="none"
                    fillRule="evenodd"
                  >
                    <defs>
                      <linearGradient
                        id="linearGradient-1"
                        x1="100%"
                        y1="10.5120544%"
                        x2="50%"
                        y2="89.4879456%"
                      >
                        <stop stopColor="#000000" offset="0%"></stop>
                        <stop stopColor="#FFFFFF" offset="100%"></stop>
                      </linearGradient>
                      <linearGradient
                        id="linearGradient-2"
                        x1="64.0437835%"
                        y1="46.3276743%"
                        x2="37.373316%"
                        y2="100%"
                      >
                        <stop stopColor="#EEEEEE" stopOpacity="0" offset="0%"></stop>
                        <stop stopColor="#FFFFFF" offset="100%"></stop>
                      </linearGradient>
                    </defs>
                    <g transform="translate(-400.000000, -178.000000)">
                      <g transform="translate(400.000000, 178.000000)">
                        <polygon
                          fill="#000000"
                          opacity="0.049999997"
                          points="69.3922914 32.4202615 32.8435758 70.5039241 54.0490008 16.1851325"
                        ></polygon>
                        <polygon
                          fill="#000000"
                          opacity="0.099999994"
                          points="69.3922914 32.4202615 32.8435758 70.5039241 58.3683556 20.7402338"
                        ></polygon>
                        <polygon
                          fill="url(#linearGradient-2)"
                          opacity="0.099999994"
                          points="101.428699 0 83.0667527 94.1480575 130.378721 47.0740288"
                        ></polygon>
                      </g>
                    </g>
                  </svg>
                  <h2 className="brand-text text-primary ms-1 p-2 text-center">
                    Family Docs
                  </h2>
                </a>

                <h4 className="card-title mb-1">
                  Welcome to Family Docs Manager! 👋
                </h4>
                <p className="card-text mb-2">
                  Please sign-in to your account and start the adventure
                </p>

                <form className="auth-login-form mt-2">
                  <div className="mb-1">
                    <label htmlFor="login-email" className="form-label">
                      Username
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="username"
                      onChange={(e) => setUsername(e.target.value)}
                      placeholder="Enter Username"
                      autoFocus
                      required
                    />
                  </div>

                  <div className="mb-1">
                    <div className="d-flex justify-content-between">
                      <label className="form-label" htmlFor="login-password">
                        Password
                      </label>
                      <a href="auth-forgot-password-basic.html">
                        <small>Forgot Password?</small>
                      </a>
                    </div>
                    <div className="input-group input-group-merge form-password-toggle">
                      <input
                        type="password"
                        className="form-control form-control-merge"
                        placeholder="Enter Password"
                        name="password"
                        required
                        onChange={(e) => setPassword(e.target.value)}
                      />
                      <span className="input-group-text cursor-pointer">
                        <i data-feather="eye"></i>
                      </span>
                    </div>
                  </div>
                  {visibilityButton === 0 ? (
                    <button
                      type="button"
                      className="btn btn-primary w-100"
                      onClick={login}
                    >
                      Sign in
                    </button>
                  ) : (
                    <button
                      className="btn btn-primary w-100"
                      type="button"
                      disabled
                    >
                      <span
                        className="spinner-border spinner-border-sm"
                        role="status"
                        aria-hidden="true"
                      ></span>
                      {"   "}Please Wait...
                    </button>
                  )}
                </form>

                {/* <p className="text-center mt-2">
                  <span>New on our platform?</span>
                  <a href="auth-register-basic.html">
                    <span>Create an account</span>
                  </a>
                </p> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  );
};

export default Login;
