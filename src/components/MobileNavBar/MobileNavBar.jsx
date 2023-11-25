import { GoClockFill } from "react-icons/go";
import { PiMonitorFill } from "react-icons/pi";
import { NavLink } from "react-router-dom";

const MobileNavBar = () => {
  return (
    <div className="navbar bg-base-100 md:flex lg:hidden">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-50 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li className="py-2.5">
              <NavLink
                to="/"
                className={`${
                  location.pathname === "/" && "text-primary"
                } flex items-center p-3 text-secondary hover:text-primary`}
              >
                {" "}
                <PiMonitorFill className="w-6 h-6 mr-2.5" />
                Dashboard
              </NavLink>
            </li>
            <li className="py-2.5">
              <NavLink
                to="/timesheet"
                className={`${
                  location.pathname === "/timesheet" && "text-primary"
                } flex items-center p-3 text-secondary hover:text-primary`}
              >
                {" "}
                <GoClockFill className="w-6 h-6 mr-2.5" />
                Timesheet
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-center">
        <img
          src="https://i.ibb.co/PFvZnBQ/image.png"
          alt="Logo"
          className="w-32"
        />
      </div>
      <div className="navbar-end">
        <button className="btn btn-ghost btn-circle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
        <button className="btn btn-ghost btn-circle">
          <img
            src="https://i.ibb.co/7ksYckJ/unsplash-PC6lu-Ww-Aql-Q.png"
            alt=""
            className="h-10 w-10 rounded-full border-2 border-[#D8E0ED] mr-3"
          />
        </button>
      </div>
    </div>
  );
};

export default MobileNavBar;
