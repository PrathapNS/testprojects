import "./App.css";
import "./App";
import img3 from "./img3.jpeg";

function Page4() {
  return (
    <div className="Container">
      <div className="left-side">
        <img className="img2" src={img3} alt="my img"></img>
        <h1>Enter to account </h1>
      </div>
      <div>
        <div className="right-side">
          <header>Enter to account</header>
          <div className="signin-input">
            <div>
              <input type="text" placeholder="Username" />
            </div>
            <div>
              <input type="password" placeholder="Password" />
              forgot password?
            </div>
            <div>
              <button className="signin-button"> Sign In </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page4;
