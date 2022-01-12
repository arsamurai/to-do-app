import Link from "next/link";

export default function Navbar() {
  return (
      <nav>
        <div className="nav-wrapper teal lighten-2 px1">
          <a href="#" className="brand-logo">
            React + TS
          </a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <Link href={"/"}><a>To-do list</a></Link>
            </li>
            <li>
              <Link href={"/about"}><a>Information</a></Link>
            </li>
          </ul>
        </div>
      </nav>
    );
};