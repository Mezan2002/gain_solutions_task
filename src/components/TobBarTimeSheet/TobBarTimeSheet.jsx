import { CiCalendar, CiSearch } from "react-icons/ci";
import { FaPlus } from "react-icons/fa6";
import {
  RiArrowDownSLine,
  RiArrowLeftSLine,
  RiArrowRightSLine,
} from "react-icons/ri";

const TobBarTimeSheet = () => {
  return (
    <div>
      <div className="flex items-center justify-between mb-5">
        <h4 className="text-xl font-medium text-secondary">Timesheet</h4>
        <div className="border border-[#afb2c1] bg-white px-4 hidden items-center py-2 rounded-full w-[320px] lg:flex">
          <input
            type="text"
            className="bg-transparent focus:outline-none w-[98%]"
            placeholder="Search employee"
          />
          <CiSearch className="text-secondary w-6 h-6" />
        </div>
      </div>
      <div className="flex items-end justify-between">
        <div className="flex items-center z-40">
          <button className="flex items-center py-2 px-5 bg-primary text-white rounded-lg mr-2.5">
            <FaPlus className="mr-2.5 h-[18px] w-[18px]" />
            <p className="text-sm font-medium">New entry</p>
          </button>
          <div className="dropdown hidden md:block">
            <label
              tabIndex={0}
              className="flex items-center py-2 px-5 text-secondary border border-[#8D91A5] rounded-lg mr-2.5"
            >
              <p className="text-sm font-medium">Actions</p>
              <RiArrowDownSLine className="ml-2.5 h-[18px] w-[18px]" />
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Item 2</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="py-2 px-4 bg-white rounded-full flex items-center gap-4">
          <RiArrowLeftSLine className="h-4 w-4" />
          <p className="text-secondary flex items-center">
            {" "}
            <span>
              <CiCalendar className="xl:h-[18px] xl:w-[18px] 2xl:h-6 2xl:w-6 mr-1.5" />
            </span>{" "}
            Today
          </p>
          <RiArrowRightSLine className="h-4 w-4" />
        </div>
      </div>
    </div>
  );
};

export default TobBarTimeSheet;
