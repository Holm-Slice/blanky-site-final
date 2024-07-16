import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();
  console.log(location.pathname);
  return (
    <>
      <div id="navbar">
        <div id="header-img">
          <img
            src={
              "./src/assets/true-assets/Website-Files/Blanky-Pastel-Trans.PNG"
            }
            alt="Blanky-logo"
            className="header-logo"
          />
        </div>
        <ul className="nav-list">
          {/* <li>
            <Link
              // style={{ color: "#fd5200" }}
              className={`${
                location.pathname === "/merch" ? "active" : "nav-link"
              }`}
              to={"/merch"}
            >
              MERCH
            </Link>
          </li>

          <li>
            <Link
              // style={{ color: "#fd5200" }}
              className={`${
                location.pathname === "/press" ? "active" : "nav-link"
              }`}
              to={"/press"}
            >
              PRESS
            </Link>
          </li> */}
          <li>
            {" "}
            <Link
              // style={{ color: "#fd5200" }}
              className={`${
                location.pathname === "/shows" ? "active" : "nav-link"
              }`}
              to={"/shows"}
            >
              SHOWS
            </Link>
          </li>
          <li>
            {" "}
            <Link
              // style={{ color: "#fd5200" }}
              className={`${
                location.pathname === "/music" ? "active" : "nav-link"
              }`}
              to={"/music"}
            >
              MUSIC
            </Link>
          </li>
          <li>
            <Link
              // style={{ color: "#fd5200" }}
              className={`${location.pathname === "/" ? "active" : "nav-link"}`}
              to={"/"}
            >
              HOME
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
