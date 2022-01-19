import { Link } from "react-router-dom";
import './Login.css';

function Login() {
  return (
    <div className="Login flex-col">
      登入
      <input type="text" name="Yourmail" placeholder="Email"></input>
      <input type="password" name="YourPassword" placeholder="password"></input>

      <button className="Login-bg Login-btn">
      <Link to="/profile" className="login-link">
      LOG IN
      </Link>
      </button>
      <button className="SignUp-bg SignUp-btn">
       <Link to="/profile" className="login-link">
       Sign Up
      </Link>
      </button>
      Forgot Password?
    </div>
  );
}

export default Login;
