import { GoClockFill } from "react-icons/go";
import { IoIosArrowForward } from "react-icons/io";
import { IoChevronBackSharp } from "react-icons/io5";
import { PiMonitorFill } from "react-icons/pi";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <nav className="bg-white h-[100vh] relative">
      {/* floating button */}
      <div className="absolute drop-shadow-xl border h-8 w-8 flex items-center justify-center rounded-full -right-5 top-[4%] bg-white text-secondary hover:text-secondary">
        <p>
          <IoChevronBackSharp />
        </p>
      </div>
      {/* logo */}
      <div className="px-[30px] bg-primary-bg">
        <img
          src="https://i.ibb.co/PFvZnBQ/image.png"
          alt="Logo"
          className="py-6"
        />
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
                className="2xl:w-12 2xl:h-12 xl:w-11 xl:h-11 rounded-full border-2 border-[#D8E0ED]"
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
