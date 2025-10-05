import "./Home.css";
import ModrinthLogo from "../assets/ModrinthLogo.jsx";
import Nav from "../components/Nav.jsx";

function Home() {
  return (
    <>
      <Nav />
      <div>
        <div style={{ height: 25 }}></div>
        <div className="main">
          <h1
            style={{
              fontWeight: 500,
              fontSize: 52,
              textAlign: "center",
              width: 927,
            }}
          >
            Disfruta de una gran serie de
            <span className="styledtext"> Minecraft</span>
          </h1>
          <div style={{ height: 25 }}></div>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <a
              href="/form"
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                height: 42,
              }}
              className="modrinth link"
            >
              Request to enter
            </a>
            {/*<div style={{ width: 15 }}></div>
            <a
              className="InstanceButton"
              href="https://drive.google.com/file/d/1WNBvKD-R-z1APqF5Qfl6clrX0tj8p94P/view?usp=sharing"
            >
              Instance
            </a>*/}
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
