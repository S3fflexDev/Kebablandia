import Logoimg from "../assets/Logo.png";

function Nav() {
  return (
    <nav className="nav">
      <div style={{ width: 120 }}></div>
      <a href="/" className="BGF gray link">
        Home
      </a>
      <div style={{ width: "100%" }}></div>
      <img src={Logoimg} width={420} />
      <div style={{ width: "100%" }}></div>
      <a href="/credits" className="BGF gray link">
        Credits
      </a>
      <div style={{ width: 120 }}></div>
    </nav>
  );
}

export default Nav;
