import Logoimg from "../assets/Logo.png";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className="nav">
      <div style={{ width: 120 }}></div>
      <Link to="/" className="BGF gray link">
        Home
      </Link>
      <div style={{ width: "100%" }}></div>
      <img src={Logoimg} width={420} />
      <div style={{ width: "100%" }}></div>
      <Link to="/credits" className="BGF gray link">
        Credits
      </Link>
      <div style={{ width: 120 }}></div>
    </nav>
  );
}

export default Nav;
