import "./App.css";
import "./App";
import img from "./img.webp";
import { useNavigate } from "react-router-dom";

function Page1() {
  const navigate = useNavigate();

  return (
    <div className="Container">
      <div className="left-side">
        <img src={img} alt="my img"></img>
        <h1>REGISTRATION</h1>
      </div>

      <div className="right-side">
        <header>Get started</header>
        <p>
          If you already have an account
          <div>
            <button>Sign In</button>
          </div>
          <br></br>
          or
          <div>
            <button onClick={() => navigate(`/Page2`)} className="signup">
              Sign Up
            </button>
          </div>
        </p>
      </div>
    </div>
  );
}

export default Page1;
