import { CiCalendar, CiSearch } from "react-icons/ci";
import { FaPlus } from "react-icons/fa6";
import {
  RiArrowDownSLine,
  RiArrowLeftSLine,
  RiArrowRightSLine,
} from "react-icons/ri";
import MenuIcon from "../../assets/icons/menu.svg";

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
            <RiArrowLeftSLine />

            <p className="text-secondary flex items-center">
              {" "}
              <span>
                <CiCalendar className="xl:h-[18px] xl:w-[18px] 2xl:h-6 2xl:w-6 mr-1.5" />
              </span>{" "}
              Today
            </p>
            <RiArrowRightSLine />
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
                        <ul className="menu p-4 w-3/4 min-h-full bg-base-200 text-base-content">
                          {/* Sidebar content here */}
                          <li>
                            <a>Sidebar Item 1</a>
                          </li>
                          <li>
                            <a>Sidebar Item 2</a>
                          </li>
                        </ul>
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
