import { BsThreeDots } from "react-icons/bs";
import { CiCalendar, CiSearch } from "react-icons/ci";
import { FaPlus } from "react-icons/fa6";
import { FiAlertTriangle } from "react-icons/fi";
import { IoCloseSharp } from "react-icons/io5";
import {
  RiArrowDownSLine,
  RiArrowLeftSLine,
  RiArrowRightSLine,
} from "react-icons/ri";
import DeleteIcon from "../../assets/icons/delete.svg";
import MenuIcon from "../../assets/icons/menu.svg";
import RejectedIcon from "../../assets/icons/rejected.svg";
import TicSecondary from "../../assets/icons/ticSecondary.svg";
import WaveIcon from "../../assets/icons/wave.svg";

const TimeSheet = () => {
  return (
    <section>
      {/* topbar of timesheet */}
      <div>
        <div className="flex items-center justify-between mb-5">
          <h4 className="text-xl font-medium text-secondary">Timesheet</h4>
          <div className="border border-[#afb2c1] bg-white px-4 flex items-center py-2 rounded-full w-[320px]">
            <input
              type="text"
              className="bg-transparent focus:outline-none w-[98%]"
              placeholder="Search employee"
            />
            <CiSearch className="text-secondary w-6 h-6" />
          </div>
        </div>
        <div className="flex items-end justify-between">
          <div className="flex items-center">
            <button className="flex items-center py-2 px-5 bg-primary text-white rounded-lg mr-2.5">
              <FaPlus className="mr-2.5 h-[18px] w-[18px]" />
              <p className="text-sm font-medium">New entry</p>
            </button>
            <div className="dropdown">
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
      <div className="mt-5">
        <div className="card bg-white">
          <div className="overflow-x-auto rounded-lg">
            <table className="table">
              {/* head */}
              <thead className="bg-[#FBFAFF]">
                <tr className="">
                  <th className="py-5 text-sm font-normal pl-[30px] text-[#8D91A5]">
                    Name
                  </th>
                  <th className="py-5 text-sm font-normal text-[#8D91A5]">
                    Date
                  </th>
                  <th className="py-5 text-sm font-normal text-[#8D91A5]">
                    Scheduled
                  </th>
                  <th className="py-5 text-sm font-normal text-[#8D91A5]">
                    Logged
                  </th>
                  <th className="py-5 text-sm font-normal text-[#8D91A5]">
                    Balance
                  </th>
                  <th className="py-5 text-sm font-normal text-[#8D91A5]">
                    Status
                  </th>
                  <th className="py-5 text-sm font-normal pr-[30px] text-[#8D91A5]">
                    Details
                  </th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                <tr className="">
                  <td className="p-5">
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="w-10 rounded-full ring ring-[#D8E0ED] ring-offset-base-100">
                          <img
                            src="https://i.ibb.co/wJ61Ljr/unsplash-UVUMHL-Dz-VM.png"
                            alt="employee image"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-medium text-base text-primary-dark">
                          Agens Neilson
                        </div>
                        <div className="text-sm text-gray-light">
                          Laravel department
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="p-5 text-sm font-medium text-secondary">
                    Today
                    <br />
                    <span className="font-normal text-gray-light">
                      10:15 am - 08:15 pm
                    </span>
                  </td>
                  <td className="p-5 text-sm text-secondary">9h</td>
                  <td className="p-5 text-sm text-secondary">8h 12m</td>
                  <td className="p-5 text-sm text-secondary">- 48m</td>
                  <td className="p-5 flex gap-x-1.5">
                    <p className="px-3.5 py-1 text-[#0CAA1B] bg-[#DAF2DC] inline-block rounded-full">
                      04
                    </p>
                    <p className="px-3.5 py-1 text-[#0CAA1B] bg-[#DAF2DC] inline-block rounded-full">
                      04
                    </p>
                    <p className="px-3.5 py-1 text-[#0CAA1B] bg-[#DAF2DC] inline-block rounded-full">
                      04
                    </p>
                  </td>
                  <th className="p-5">
                    <div className="drawer drawer-end">
                      <input
                        id="allEntriesDrawer"
                        type="checkbox"
                        className="drawer-toggle"
                      />
                      <div className="drawer-content">
                        {/* Page content here */}
                        <label
                          htmlFor="allEntriesDrawer"
                          className="drawer-button btn btn-ghost btn-xs text-xs font-medium text-primary-dark"
                        >
                          <img src={MenuIcon} alt="" />
                          All entries
                        </label>
                      </div>
                      <div className="drawer-side">
                        <label
                          htmlFor="allEntriesDrawer"
                          aria-label="close sidebar"
                          className="drawer-overlay"
                        ></label>
                        <div className="menu relative p-0 w-3/4 min-h-full bg-white rounded-l-2xl rounded-r-none text-base-content">
                          {/* Sidebar content here */}
                          <div className="flex items-center justify-between py-5 px-[30px] rounded-l-2xl rounded-r-none bg-[#FBFAFF] ">
                            <div></div>
                            <div className="flex items-center gap-16 text-secondary">
                              <RiArrowLeftSLine className="h-6 w-6" />
                              <div className="text-center">
                                <p className="text-sm font-normal text-secondary">
                                  Date
                                </p>
                                <h6 className="text-xl font-medium text-[#21214E]">
                                  23 NOV, 2022
                                </h6>
                              </div>
                              <RiArrowRightSLine className="h-6 w-6" />
                            </div>
                            <label
                              htmlFor="allEntriesDrawer"
                              aria-label="close sidebar"
                              className="drawer-overlay p-2 cursor-pointer"
                            >
                              <IoCloseSharp className="h-6 w-6" />
                            </label>
                          </div>
                          <div className="px-[30px] py-5">
                            <div className="flex items-center mb-6">
                              <div className="w-[100px] text-center">
                                <h6 className="font-medium md:text-sm 2xl:text-base text-secondary">
                                  09h
                                </h6>
                                <p className="md:text-xs 2xl:text-sm font-normal text-gray-light">
                                  Scheduled
                                </p>
                              </div>
                              <div className="w-[100px] text-center">
                                <h6 className="font-medium md:text-sm 2xl:text-base text-secondary">
                                  10h 15m
                                </h6>
                                <p className="md:text-xs 2xl:text-sm font-normal text-gray-light">
                                  Logged
                                </p>
                              </div>
                              <div className="w-[100px] text-center">
                                <h6 className="font-medium md:text-sm 2xl:text-base text-secondary">
                                  1h 15m
                                </h6>
                                <p className="md:text-xs 2xl:text-sm font-normal text-gray-light">
                                  Balance
                                </p>
                              </div>
                              <div className="w-[100px] text-center">
                                <h6 className="font-medium md:text-sm 2xl:text-base text-[#0CAA1B]">
                                  4h
                                </h6>
                                <p className="md:text-xs 2xl:text-sm font-normal text-gray-light">
                                  Approved
                                </p>
                              </div>
                              <div className="w-[100px] text-center">
                                <h6 className="font-medium md:text-sm 2xl:text-base text-[#FFAB00]">
                                  6h 15m
                                </h6>
                                <p className="md:text-xs 2xl:text-sm font-normal text-gray-light">
                                  Pending
                                </p>
                              </div>
                            </div>
                            <div className="">
                              <p className="md:text-xs pl-5 2xl:text-base uppercase tracking-[3.6px] font-normal text-gray-light mb-4">
                                Time entries
                              </p>
                              <div className="">
                                {/* single row */}
                                <div className=" flex items-center gap-[30px] p-5">
                                  <div className="flex-1 ">
                                    <h6 className="md:text-base 2xl:text-lg font-medium text-secondary">
                                      06:15 pm - 07:00 pm
                                    </h6>
                                    <p className="md:text-xs 2xl:text-sm font-normal text-gray-light">
                                      45m
                                    </p>
                                  </div>
                                  <div className="flex-1">
                                    <h6 className="md:text-sm 2xl:text-base font-normal text-secondary">
                                      Untitled project
                                    </h6>
                                    <p className="md:text-xs 2xl:text-sm font-normal text-gray-light">
                                      No task added
                                    </p>
                                  </div>
                                  <div className="flex-1">
                                    <div className="flex items-center">
                                      <div className="bg-[#FFF1D4] flex items-center justify-center rounded-full py-1 px-3.5 ">
                                        <p className="md:text-xs 2xl:text-sm font-medium text-[#FFAB00] inline">
                                          Pending
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="p-2">
                                    <BsThreeDots className="h-5 w-5" />
                                  </div>
                                </div>
                                {/* single row */}
                                <div className=" flex items-center gap-[30px] p-5 bg-[#FBFAFF] rounded-xl">
                                  <div className="flex-1 ">
                                    <h6 className="md:text-base 2xl:text-lg font-medium text-secondary">
                                      04:15 pm - 05:15 pm
                                    </h6>
                                    <p className="md:text-xs 2xl:text-sm font-normal text-gray-light">
                                      45m
                                    </p>
                                  </div>
                                  <div className="flex-1">
                                    <h6 className="md:text-sm 2xl:text-base font-normal text-secondary">
                                      Untitled project
                                    </h6>
                                    <p className="md:text-xs 2xl:text-sm font-normal text-gray-light">
                                      No task added
                                    </p>
                                  </div>
                                  <div className="flex-1">
                                    <div className="flex items-center">
                                      <div className="bg-[#FFF1D4] flex items-center justify-center rounded-full py-1 px-3.5 ">
                                        <p className="md:text-xs 2xl:text-sm font-medium text-[#FFAB00] inline">
                                          Pending
                                        </p>
                                      </div>
                                      <p>
                                        <FiAlertTriangle className="h-5 w-5 text-gray-light ml-1.5" />
                                      </p>
                                    </div>
                                  </div>
                                  <div className="p-2">
                                    <BsThreeDots className="h-5 w-5" />
                                  </div>
                                </div>
                                {/* single row */}
                                <div className=" flex items-center gap-[30px] p-5">
                                  <div className="flex-1 ">
                                    <h6 className="md:text-base 2xl:text-lg font-medium text-secondary">
                                      03:15 pm - 04:15 pm
                                    </h6>
                                    <p className="md:text-xs 2xl:text-sm font-normal text-gray-light">
                                      01 h
                                    </p>
                                  </div>
                                  <div className="flex-1">
                                    <h6 className="md:text-sm 2xl:text-base font-normal text-secondary">
                                      Untitled project
                                    </h6>
                                    <p className="md:text-xs 2xl:text-sm font-normal text-gray-light">
                                      No task added
                                    </p>
                                  </div>
                                  <div className="flex-1">
                                    <div className="flex items-center">
                                      <div className="bg-[#DAF2DC] flex items-center justify-center rounded-full py-1 px-3.5 ">
                                        <p className="md:text-xs 2xl:text-sm font-medium text-[#0CAA1B] inline">
                                          Pending
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="p-2">
                                    <BsThreeDots className="h-5 w-5" />
                                  </div>
                                </div>
                                {/* single row */}
                                <div className=" flex items-center gap-[30px] p-5 bg-[#FBFAFF] rounded-xl">
                                  <div className="flex-1 ">
                                    <h6 className="md:text-base 2xl:text-lg font-medium text-secondary">
                                      09:15 am - 10:15 am{" "}
                                    </h6>
                                    <p className="md:text-xs 2xl:text-sm font-normal text-gray-light">
                                      01 h
                                    </p>
                                  </div>
                                  <div className="flex-1">
                                    <h6 className="md:text-sm 2xl:text-base font-normal text-secondary">
                                      Untitled project
                                    </h6>
                                    <p className="md:text-xs 2xl:text-sm font-normal text-gray-light">
                                      No task added
                                    </p>
                                  </div>
                                  <div className="flex-1">
                                    <div className="flex items-center">
                                      <div className="bg-[#FFDADE] flex items-center justify-center rounded-full py-1 px-3.5 ">
                                        <p className="md:text-xs 2xl:text-sm font-medium text-[#FE475B] inline">
                                          Pending
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="p-2">
                                    <BsThreeDots className="h-5 w-5" />
                                  </div>
                                </div>
                              </div>
                              <div className="w-full absolute bottom-[30px] px-2">
                                <div className="flex items-center gap-4">
                                  <button className="flex items-center py-2.5 px-6 text-secondary border border-[#D8E0ED] rounded-lg mr-2.5">
                                    <img src={TicSecondary} alt="" />
                                    <p className="text-sm font-medium ml-2.5">
                                      Approve all
                                    </p>
                                  </button>
                                  <button className="flex items-center py-2.5 px-6 text-secondary border border-[#D8E0ED] rounded-lg mr-2.5">
                                    <img src={WaveIcon} alt="" />
                                    <p className="text-sm font-medium ml-2.5">
                                      Set all as pending
                                    </p>
                                  </button>
                                  <button className="flex items-center py-2.5 px-6 text-secondary border border-[#D8E0ED] rounded-lg mr-2.5">
                                    <img src={RejectedIcon} alt="" />
                                    <p className="text-sm font-medium ml-2.5">
                                      Reject all{" "}
                                    </p>
                                  </button>
                                  <button className="flex items-center py-2.5 px-6 text-secondary border border-[#D8E0ED] rounded-lg mr-2.5">
                                    <img src={DeleteIcon} alt="" />
                                    <p className="text-sm font-medium ml-2.5">
                                      Remove all
                                    </p>
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </th>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimeSheet;
