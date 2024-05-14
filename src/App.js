import "./App.css";
import Page1 from "./Page1";
import Page2 from "./Page2";
import Page3 from "./Page3";
import Page4 from "./Page4";
import { BrowserRouter, Routes, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" Component={Page1} />
          <Route exact path="/Page2" Component={Page2} />
          <Route exact path="/Page3" Component={Page3} />
          <Route exact path="/Page4" Component={Page4} />
        </Routes>
      </BrowserRouter>
      {/* <Page2 /> */}
    </div>
  );
}

export default App;
