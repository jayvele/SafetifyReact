import "./style.css";
import "./assets/dist/css/bootstrap.min.css";
// import { FiDatabase } from "react-icons/fi";
import "./option.css";
import { NavLink } from "react-router-dom";

function Option(props) {
  return (
    <div class="col d-flex align-items-start">
      <div className="icon-box">
        <NavLink className="btn" to={props.link}>
          <div class="display: flex">
            <div class="icon-square d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3"></div>
            <h3>{props.name}</h3>
          </div>
          <p>{props.description}</p>
        </NavLink>
      </div>
    </div>
  );
}

export default Option;
