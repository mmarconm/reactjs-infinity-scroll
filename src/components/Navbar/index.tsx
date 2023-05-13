import { Link } from "react-router-dom";

import "./styles.scss";

export default function Navbar() {
  return (
    <>
      <nav className="navbar">
        <ul className="navbar__menu">
          <li>
            <Link to="/">App</Link>
          </li>
          <li>
            <Link to="/users">Users</Link>
          </li>
          <li>
            <Link to="/posts">Posts</Link>
          </li>{" "}
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
