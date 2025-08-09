import "./Credits.css";
import Nav from "../components/Nav.tsx";

function Credits() {
  return (
    <>
      <Nav />
      <body>
        <div style={{ height: 25 }}></div>
        <div className="main" style={{ gap: 15 }}>
          <h1 style={{ fontWeight: 600, fontSize: 42, textAlign: "center" }}>
            Desarrolladores
          </h1>
          <div style={{ display: "flex", gap: 7.5, flexDirection: "column" }}>
            <a className="profile">S3fflexDev</a>
          </div>
        </div>
      </body>
    </>
  );
}

export default Credits;
