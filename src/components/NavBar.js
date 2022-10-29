import "./style.css";
import { NavLink } from "react-router-dom";
import "./navbar.css";

function NavBar() {
  return (
    <div className="container bar">
      <div id="header">
        <h1 className="logo">
          <NavLink to="/">Safetify</NavLink>
        </h1>
      </div>
      <div className="logo">
        <img src="assets/img/logo.png" alt="" className="img-fluid" />
      </div>
      <div id="">
        <nav id="navbar" className="navbar">
          <ul>
            <li>
              <NavLink className="listElements" to="/about">
                About
              </NavLink>
            </li>
            <li>
              <NavLink className="listElements" to="/services">
                Services
              </NavLink>
            </li>
            <li>
              <NavLink className="listElements" to="/team">
                Team
              </NavLink>
            </li>

            <li>
              <NavLink className="listElements" to="/contact">
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink className="login" to="/login">
                Login/Register
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default NavBar;
