import "./Auth.css";

import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import BackgroundCanvas from "../../components/ui/BackgroundCanvas"

import { register, login } from "../../services/authService";

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

  const handleLogin = async () => {
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

  const handleRegister = async () => {
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
    <div className="auth-root">
      <div id="containerLogin">
        <div className="card-scene">
          <div className={`card-content ${isFlipping ? "" : "card-flipped"}`}>
            
            {/* FRONT */}
            <div className="card-front">
              <img className="card-image" src="/assets/face_card.png" />

              {isLogin ? (
                <form className="formContainer">
                  <h1>Sign In</h1>

                  <input 
                    type="text"
                    placeholder="Username" 
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                  <input 
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} 
                  />

                  <button 
                    type="button"
                    onClick={handleLogin}>
                      Sign In
                  </button>

                  <a onClick={flipAndNavigate}>
                    Don't have an account? <span>Register now</span>
                  </a>
                </form>
              ) : (
                <form className="formContainer">
                  <h1>Register</h1>
                  
                  <p
                    className={`error ${registerErrors.username ? "visible" : ""}`}>
                    {registerErrors.username ? registerErrors.username : "\u00A0"}
                  </p>
                  <input 
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)} 
                  />

                  <p
                    className={`error ${registerErrors.email ? "visible" : ""}`}>
                    {registerErrors.email ? registerErrors.email : "\u00A0"}
                  </p>
                  <input 
                    type="email"
                    placeholder="Email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />

                  <p
                    className={`error ${registerErrors.password ? "visible" : ""}`}>
                    {registerErrors.password ? registerErrors.password : "\u00A0"}
                  </p>
                  <input 
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} 
                  />
                  
                  <p
                    className={`error ${registerErrors.confirmPassword ? "visible" : ""}`}>
                    {registerErrors.confirmPassword ? registerErrors.confirmPassword : "\u00A0"}
                  </p>
                  <input 
                    type="password"
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)} 
                  />

                  <button 
                    type="button"
                    onClick={handleRegister}>
                      Register
                  </button>

                  <a onClick={flipAndNavigate}>
                    Already have an account? <span>Login now</span>
                  </a>
                </form>
              )}
            </div>

            {/* BACK */}
            <div className="card-back">
              <img className="card-image" src="/assets/back_card.png" />
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE IMAGES */}
      <div id="containerImages">
        <img id="gameTitle" src="/assets/gameTitle.svg" />
        <img id="gameInfo" src="/assets/gameInfo.svg" />
        <img id="gameCharacters" src="/assets/gameCharacters.svg" />
      </div>

      {/* CANVAS */}
      <BackgroundCanvas />
    </div>
  );
}