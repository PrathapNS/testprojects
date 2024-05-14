import "./App.css";
import "./App";
import img2 from "./img2.avif";
import { useNavigate } from "react-router-dom";

function Page3() {
  const navigate = useNavigate();

  setTimeout(() => {
    navigate("/Page4");
  }, 5000);

  return (
    <div className="Container">
      <div className="left-side">
        <img className="img2" src={img2} alt="my img"></img>
        <h1>Create account</h1>
      </div>
      <div>
        <div className="right-side">
          <header>Ready !</header>
          <div className="inputparent">
            <div>
              <button className="signup-button"> Signing In... </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page3;
