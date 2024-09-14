import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "@/authContext/useAuth";
import { useNavigate } from "react-router-dom";
import { FaUser, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import { useTheme } from "../Darkmode/Theme-provider";
import { Button } from "../ui/button";


const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const { theme } = useTheme();

  const passwordRef = useRef(null);
  const [showPassword, setShowPassword] = useState(false);

  const handlePasswordVisibility = () => {
    setShowPassword(!showPassword);
    if (passwordRef.current) {
      passwordRef.current.type = showPassword ? "password" : "text";
    }
  };

  const predefinedUser = {
    username: "Rowdyvicky",
    password: "Jobsguru@625",
  };

  const [formValues, setFormValues] = useState({
    username: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleLogin = () => {
    const { username, password } = formValues;
    if (
      username === predefinedUser.username &&
      password === predefinedUser.password
    ) {
      login();
      navigate("/admin");
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <div className="flex items-center justify-center p-4">
      <div
        className={`w-full max-w-sm p-6 border-2 ${
          theme === "light"
            ? "border-blue-400 shadow-[0_0_20px_rgba(59,130,246,1),_0_0_30px_rgba(59,130,246,0.5)]"
            : "border-green-400 shadow-[0_0_20px_rgba(34,197,94,1),_0_0_30px_rgba(34,197,94,0.5)]"
        } rounded-lg transition-all duration-500`}
      >
        <h1
          className={`text-2xl font-bold text-center mb-4`}
        >
          Login
        </h1>
        <div className="w-full">
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="text"
              value={formValues.username}
            onChange={handleChange}
              name="username"
              id="floating_first_name"
              className={`block py-2.5 px-0 w-full text-sm $ bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer`}
              placeholder=" "
              required
            />
            <label
              htmlFor="floating_first_name"
              className={`peer-focus:font-medium absolute text-sm duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6`}
            >
              <FaUser className="inline mr-2" />
              Username
            </label>
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="password"
              name="password"
              id="floating_password"
              className={`block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer`}
              placeholder=" "
              value={formValues.password}
              ref={passwordRef}
              onChange={handleChange}
              required
            />
            <label
              htmlFor="floating_password"
              className={`peer-focus:font-medium absolute text-sm duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6`}
            >
              <FaLock className="inline mr-2" />
              Password
            </label>
            <button
              type="button"
              onClick={handlePasswordVisibility}
              className={`absolute top-4 right-0`}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
          <div className="flex justify-between">
            <div className="flex items-start mb-2">
              <div className="flex items-center h-5">
                <input
                  id="showPassword"
                  type="checkbox"
                  onChange={handlePasswordVisibility}
                  className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                />
              </div>
              <label
                htmlFor="showPassword"
                className={`ml-2 text-sm font-medium`}
              >
                Show password
              </label>
            </div>
          </div>
          {error && <p style={{ color: "red", marginBottom:"10px" }}>{error}</p>}
          <Button
            onClick={handleLogin}
            className="w-full px-5 py-2.5 text-sm font-medium text-center rounded-lg focus:ring-4 focus:outline-none transition-transform transform hover:scale-105"
          >
            Log In
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Login;


