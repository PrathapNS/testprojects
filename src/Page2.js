import "./App.css";
import "./App";
import img2 from "./img2.avif";
import { useNavigate } from "react-router-dom";
import { MediaData } from "./MediaData";
import axios from "axios";
import { useEffect } from "react";

function Page2() {
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => console.log(res.data));
  });

  return (
    <div className="Container">
      <div className="left-side">
        <img className="img2" src={img2} alt="my img"></img>
        <h1>Create account</h1>
      </div>

      <div className="right-side">
        <header>Create account</header>

        <div className="logo">
          <span className="icon-txt">by</span>

          {MediaData.map((item, index) => {
            return (
              <div key={index}>
                <a href={item.href} target="blank">
                  <img className="media-logo mr-1" src={item.img} alt="media" />
                </a>
              </div>
            );
          })}
        </div>
        <div className="divider-container">
          <span className="divider1"></span>
          <span className="divider-txt">Or</span>
          <span className="divider2"></span>
        </div>
        <div className="inputparent">
          <div className="nameinfo">
            <input className="input-1" placeholder="Name" />
            <input className="input-1" placeholder="Surname" />
          </div>
          <div>
            <input className="input2" type="date" placeholder="Date Of Birth" />
          </div>
          <div>
            <input className="input2" placeholder="Username" />
          </div>
          <div className="password">
            <input className="input-1" type="password" placeholder="Password" />
            <input
              className="input-1"
              type="password"
              placeholder="Confirm Password"
            />
          </div>
          <div>
            <button
              onClick={() => navigate("/Page3")}
              className="signup-button"
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page2;
