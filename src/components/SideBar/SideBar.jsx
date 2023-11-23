import { GoClockFill } from "react-icons/go";
import { IoIosArrowForward } from "react-icons/io";
import { PiMonitorFill } from "react-icons/pi";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/Logo.png";

const SideBar = () => {
  return (
    <nav className="bg-white h-[100vh] relative">
      {/* logo */}
      <div className="px-[30px] bg-primary-bg">
        <img src={Logo} alt="Logo" />
      </div>
      <div className="px-[30px]">
        {/* menu */}
        <ul className="">
          <li className="py-2.5 mt-2.5">
            <Link className="flex items-center text-secondary hover:text-primary">
              {" "}
              <PiMonitorFill className="w-6 h-6 mr-2.5" />
              Dashboard
            </Link>
          </li>
          <li className="py-2.5">
            <Link className="flex items-center text-secondary hover:text-primary">
              {" "}
              <GoClockFill className="w-6 h-6 mr-2.5" />
              Timesheet
            </Link>
          </li>
        </ul>

        {/* bottom user bar */}
        <div>
          <div className="absolute bottom-0 left-0 w-full border-t-2 py-5 px-[30px] flex items-start justify-between">
            <div className="flex items-start">
              <img
                src="https://i.ibb.co/7ksYckJ/unsplash-PC6lu-Ww-Aql-Q.png"
                alt=""
                className="w-10 h-10 rounded-full"
              />
              <div className="ml-3">
                <h6 className="font-medium text-base text-secondary">Jonus</h6>
                <p className="text-sm text-[#8D91A5]">Admin</p>
              </div>
            </div>
            <p>
              <IoIosArrowForward className="mt-1.5 text-secondary" />
            </p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default SideBar;
