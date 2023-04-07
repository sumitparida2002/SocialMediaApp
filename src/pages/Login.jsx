import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { createUser, login } from "../actions/users";
import useAuth from "../hooks/useAuth";

import "./Login.css";

const Login = ({ setUser }) => {
  const { setAuth, persist, setPersist } = useAuth();
  const [logIn, setLogIn] = useState(true);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const [signUpUser, setSignUpUser] = useState({
    email: "",
    fullName: "",
    userName: "",
    hash_password: "",
  });

  const [loginUser, setLoginUser] = useState({
    userName: "",
    hash_password: "",
  });

  const handleSignUp = () => {
    createUser(signUpUser);
  };

  const handleLogin = async () => {
    const response = await login(loginUser).then((result) => result);
    const accessToken = response?.accessToken;
    setAuth({ user: loginUser.userName, accessToken });
    navigate(from, { replace: true });
  };
  return (
    <>
      <div className="main-container">
        {logIn ? (
          <div className="card-container">
            <div className="card1">
              <img src="https://i.imgur.com/zqpwkLQ.png" />
              <input
                placeholder="Username"
                value={loginUser.userName}
                onChange={(e) =>
                  setLoginUser({ ...loginUser, userName: e.target.value })
                }
                type="text"
              />
              <input
                placeholder="Password"
                value={loginUser.hash_password}
                onChange={(e) =>
                  setLoginUser({ ...loginUser, hash_password: e.target.value })
                }
                type="password"
              />
              <button className="btn" onClick={() => handleLogin()}>
                Log In
              </button>
            </div>
            <div className="card2">
              Don't have an account?
              <a href="#" onClick={() => setLogIn(false)}>
                Sign up
              </a>
            </div>
          </div>
        ) : (
          <div className="card-container-signup">
            <div className="card1">
              <img src="https://i.imgur.com/zqpwkLQ.png" />
              <input
                placeholder="Email"
                type="email"
                value={signUpUser.email}
                onChange={(e) =>
                  setSignUpUser({ ...signUpUser, email: e.target.value })
                }
              />
              <input
                placeholder="Full Name"
                type="text"
                value={signUpUser.fullName}
                onChange={(e) =>
                  setSignUpUser({ ...signUpUser, fullName: e.target.value })
                }
              />
              <input
                placeholder="Username"
                type="text"
                value={signUpUser.userName}
                onChange={(e) =>
                  setSignUpUser({ ...signUpUser, userName: e.target.value })
                }
              />
              <input
                placeholder="Password"
                type="password"
                value={signUpUser.hash_password}
                onChange={(e) =>
                  setSignUpUser({
                    ...signUpUser,
                    hash_password: e.target.value,
                  })
                }
              />
              <button className="btn" onClick={() => handleSignUp()}>
                Sign up
              </button>
            </div>
            <div className="card2">
              Have an account?
              <a href="#" onClick={() => setLogIn(true)}>
                Log In
              </a>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Login;
