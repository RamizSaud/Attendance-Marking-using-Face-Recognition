import "./Login.css";
import { useState } from "react";
import axios from "axios";
function Login() {
  const [data, setData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const value = e.target.value;
    setData({
      ...data,
      [e.target.name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userData = {
      username: data.username,
      password: data.password,
    };
    const response = await axios.post("/", userData);
    if (response.data.userFound) {
      window.location.href = "/class";
    }
  };

  return (
    <>
      <div className="login">
        <h2 className="login__heading">Login Form</h2>
        <div className="form-container">
          <form className="form" onSubmit={handleSubmit}>
            <label htmlFor="username" className="username-label label">
              Username
            </label>
            <input
              type="text"
              className="username input"
              id="username"
              name="username"
              autoComplete="off"
              value={data.username}
              onChange={handleChange}
            />
            <label htmlFor="password" className="password-label label">
              Password
            </label>
            <input
              type="password"
              className="password input"
              id="password"
              name="password"
              value={data.password}
              onChange={handleChange}
            />
            <button className="form-btn">Login</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
