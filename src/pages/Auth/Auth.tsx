import "./Auth.css";

import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import { register, login } from "../../services/authService";

import { MdOutlinePermIdentity, MdOutlineLock , MdOutlineMail } from "react-icons/md";
import InputField from "./InputField";

import BackgroundCanvas from "../../components/ui/BackgroundCanvas"

export default function Auth() {
  // main state nagigation
  const location = useLocation();
  const navigate = useNavigate();
  const isLogin = location.pathname === "/login";
  
  // login / register state + functions
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [registerErrors, setRegisterErrors] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const user = await login(email, password);

      localStorage.setItem("user", JSON.stringify(user));

      navigate("/main");
    } catch (err) {
      alert("Login failed");
    }
  };

  const validateRegister = () => {
    const newErrors = {
      username: "",
      email: "",
      password: "",
      confirmPassword: ""
    };

    // username
    if (!username) {
      newErrors.username = "Username is required!";
    }

    // email
    if (!email) {
      newErrors.email = "Email is required!";
    }
    else if (!email.includes("@")) {
      newErrors.email = "Invalid email!";
    }

    if (password.length < 6) {
      newErrors.password = "Password too weak!";
    }

    if (password !== confirmPassword) {
      newErrors.confirmPassword = "Passwords don't match!";
    }

    return newErrors;
  };

  const handleRegister = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const newErrors = validateRegister();
    setRegisterErrors(newErrors);

    if(Object.values(newErrors).some(e => e !== '')) return;
    
    try {
      await register(username, email, password);

      alert("Account created!");

      navigate("/login");
    } catch (err) {
      alert("Register failed");
    }
  };

  // card flip animation 
  const [isFlipping, setIsFlipping] = useState(false);
  
  const flipAndNavigate = () => {
    setIsFlipping(true);

    setTimeout(() => {
      navigate(isLogin ? "/register" : "/login");
      setIsFlipping(false);
    }, 670);
  };

  return (
    <div className="AuthWrapper">
      <div className="cardWrapper">
        <div className="cardScene">
          <div className={`cardSidesWrapper ${isFlipping ? "" : "cardFlipped"}`}>
            
            {/* FRONT */}
            <div className="cardFrontWrapper">
              <img className="cardImage" src="/assets/images/face_card.png" />
              {isLogin ? (
                <form
                  className="cardContentWrapper"
                  onSubmit={handleLogin}
                >
                  <InputField
                      title="Username"
                      placeHolder="Enter your username"
                      icon={<MdOutlinePermIdentity />}
                      onChange={setUsername}
                      error={null}
                  />

                  <InputField
                      title="Password"
                      placeHolder="Enter your password"
                      type="password"
                      icon={<MdOutlineLock />}
                      onChange={setPassword}
                      error={null}
                  />

                  <div className="CardLoginBox">
                      <input type="checkbox" name="rememberMe" />
                      <label htmlFor="rememberMe">Remember me</label>
                      <span>Forgot Password?</span>
                  </div>

                  <button type="submit" className="confirmButton">
                      Login
                  </button>

                  <div className="FlipCardWrapper" onClick={flipAndNavigate}>
                      <span>Don't have an account?</span>
                      <span className="FlipCardHightlight">Register</span>
                  </div>
                </form>
              ) : (
                <form
                  className="cardContentWrapper"
                  onSubmit={handleRegister}
                >
                  <InputField
                      title="Username"
                      placeHolder="Enter your username"
                      icon={<MdOutlinePermIdentity />}
                      onChange={setUsername}
                      error={registerErrors.username || null}
                  />

                  <InputField
                      title="Email"
                      placeHolder="Enter your Email"
                      icon={<MdOutlineMail />}
                      onChange={setEmail}
                      error={registerErrors.email || null}
                  />

                  <InputField
                      title="Password"
                      type="password"
                      placeHolder="Enter your Password"
                      icon={<MdOutlineLock />}
                      onChange={setPassword}
                      error={registerErrors.password || null}
                  />

                  <InputField
                      title="Confirm Password"
                      placeHolder="Confirm your password"
                      type="password"
                      icon={<MdOutlineLock />}
                      onChange={setConfirmPassword}
                      error={registerErrors.confirmPassword || null}
                  />

                  <button type="submit" className="confirmButton">
                      Register
                  </button>

                  <div className="FlipCardWrapper" onClick={flipAndNavigate}>
                      <span>Already have an account?</span>
                      <span className="FlipCardHightlight">Login</span>
                  </div>
                </form>
              )}
            </div>

            {/* BACK */}
            <div className="cardBackWrapper">
              <img className="cardImage" src="/assets/images/back_card.png" />
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE IMAGES */}
      <div id="containerImages">
        <img id="gameTitle" src="/assets/images/gameTitle.svg" />
        <img id="gameInfo" src="/assets/images/gameInfo.svg" />
        <img id="gameCharacters" src="/assets/images/gameCharacters.svg" />
      </div>

      {/* CANVAS */}
      <BackgroundCanvas />
    </div>
  );
}