import { BsThreeDots } from "react-icons/bs";
import { FiAlertTriangle } from "react-icons/fi";
import { IoCloseSharp } from "react-icons/io5";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import DeleteIcon from "../../assets/icons/delete.svg";
import MenuIcon from "../../assets/icons/menu.svg";
import RejectedIcon from "../../assets/icons/rejected.svg";

const MobileModal = () => {
  return (
    <div>
      <button
        className="btn btn-ghost btn-xs text-xs font-medium text-primary-dark"
        onClick={() => document.getElementById("mobileModal").showModal()}
      >
        <img src={MenuIcon} alt="" />
        All entries
      </button>
      <dialog id="mobileModal" className="modal">
        <div className="modal-box w-full max-w-7xl pb-28 pt-10">
          <div>
            <div className="flex items-center justify-between py-5 px-[30px] rounded-l-2xl rounded-r-none bg-[#FBFAFF] ">
              <div></div>
              <div className="flex items-center gap-16 text-secondary">
                <RiArrowLeftSLine className="h-6 w-6" />
                <div className="text-center">
                  <p className="text-sm font-normal text-secondary">Date</p>
                  <h6 className="text-sm font-medium text-[#21214E]">
                    23 NOV, 2022
                  </h6>
                </div>
                <RiArrowRightSLine className="h-6 w-6" />
              </div>
              <form method="dialog" className="">
                <button className="btn btn-sm btn-circle border border-gray-light btn-ghost absolute right-2 top-2">
                  <IoCloseSharp className="h-6 w-6" />
                </button>
              </form>
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
              </div>
              <div className="">
                <p className="md:text-xs pl-5 2xl:text-base uppercase tracking-[3.6px] font-normal text-gray-light mb-4">
                  Time entries
                </p>
                <div className="">
                  {/* single row */}
                  <div className=" flex items-center gap-[30px] p-5">
                    <div className="flex-1 ">
                      <h6 className="text-xs font-medium text-secondary">
                        06:15 pm - 07:00 pm
                      </h6>
                      <p className="md:text-xs 2xl:text-sm font-normal text-gray-light">
                        45m
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
                      <h6 className="text-xs  2xl:text-lg font-medium text-secondary">
                        04:15 pm - 05:15 pm
                      </h6>
                      <p className="md:text-xs 2xl:text-sm font-normal text-gray-light">
                        45m
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
                      <h6 className="text-xs  2xl:text-lg font-medium text-secondary">
                        03:15 pm - 04:15 pm
                      </h6>
                      <p className="md:text-xs 2xl:text-sm font-normal text-gray-light">
                        01 h
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
                      <h6 className="text-xs  2xl:text-lg font-medium text-secondary">
                        09:15 am - 10:15 am{" "}
                      </h6>
                      <p className="md:text-xs 2xl:text-sm font-normal text-gray-light">
                        01 h
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
                <div className="w-full hidden sm:block absolute -bottom-12 px-1">
                  <div className="flex items-center">
                    <button className="flex items-center py-2 px-4 text-secondary border border-[#D8E0ED] rounded-lg mr-2.5">
                      <img src={RejectedIcon} alt="" />
                      <p className="text-sm font-medium ml-2">Reject all </p>
                    </button>
                    <button className="flex items-center py-2 px-4 text-secondary border border-[#D8E0ED] rounded-lg mr-2.5">
                      <img src={DeleteIcon} alt="" />
                      <p className="text-sm font-medium ml-2">Remove all</p>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default MobileModal;
