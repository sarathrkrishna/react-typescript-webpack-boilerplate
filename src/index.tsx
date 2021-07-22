import ReactDOM from "react-dom";
import "./style.scss";
import IMAGE from "./image.png";
import VECTOR from "./vector.svg";

ReactDOM.render(
  <div>
    <img src={IMAGE} alt="" />
    <img src={VECTOR} alt="" />
  </div>,
  document.getElementById("app")
);
