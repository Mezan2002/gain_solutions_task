import Clock from "../../assets/icons/clockIcon.svg";
import Exit from "../../assets/icons/exit.svg";
import BlueRadialBar from "../RadialBar/BlueRadialBar/BlueRadialBar";
import BlueRadialBarMiniXL from "../RadialBar/BlueRadialBarMiniXL/BlueRadialBarMiniXL";
import BlueRadialBarXL from "../RadialBar/BlueRadialBarXL/BlueRadialBarXL";
import OrangeRadialBar from "../RadialBar/OrangeRadialBar/OrangeRadialBar";
import OrangeRadialBarMiniXL from "../RadialBar/OrangeRadialBarMiniXL/OrangeRadialBarMiniXL";
import OrangeRadialBarXL from "../RadialBar/OrangeRadialBarXL/OrangeRadialBarXL";

const MonthlyTimelog = () => {
  return (
    <div className="2xl:col-span-3 miniXL:col-span-6 ">
      <div className="bg-white p-[30px] rounded-[10px]">
        <div className="mb-[30px]">
          <h6 className="md:text-lg 2xl:text-xl font-medium text-[#21214E]">
            Monthly timelog
          </h6>
          <p className="text-[#8D91A5] text-sm">This month</p>
        </div>
        <div className="grid grid-cols-2 2xl:gap-11 md:gap-4 place-items-center">
          <div>
            <div className="relative">
              <div className="2xl:block hidden">
                <OrangeRadialBar />
              </div>
              <div className="xl:block 2xl:hidden miniXL:hidden">
                <OrangeRadialBarXL />
              </div>
              <div className="miniXL:block xl:hidden">
                <OrangeRadialBarMiniXL />
              </div>
              <div className="2xl:-mt-20 miniXL:-mt-[70px]  text-center flex flex-col items-center justify-center">
                <h6 className="2xl:text-4xl text-lg font-semibold text-secondary">
                  122h
                </h6>
                <p className="2xl:text-base md:text-xs font-medium text-[#8D91A5]">
                  Scheduled hour
                </p>
              </div>
            </div>
            <div className="mt-5 px-0 xl:px-4">
              <div className="flex items-center w-full">
                <div className="md:h-3 md:w-3 mr-1.5 2xl:w-4 2xl:h-4 rounded-full bg-[#FF834D]"></div>
                <div className="flex items-center justify-between w-full">
                  <p className="text-gray-light md:text-xs 2xl:text-sm font-medium">
                    Loged:
                  </p>
                  <p className="text-secondary md:text-xs 2xl:text-sm font-medium">
                    105h 52m
                  </p>
                </div>
              </div>
              <div className="flex items-center mt-1.5">
                <div className="md:h-3 md:w-3 mr-1.5 2xl:w-4 2xl:h-4 rounded-full bg-[#FFE7D5] border border-[#FF834D]"></div>
                <div className="flex items-center justify-between w-full">
                  <p className="text-gray-light md:text-xs 2xl:text-sm font-medium">
                    Balence:
                  </p>
                  <p className="text-secondary md:text-xs 2xl:text-sm font-medium">
                    132h
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="relative">
              <div className="2xl:block hidden">
                <BlueRadialBar />
              </div>
              <div className="xl:block 2xl:hidden miniXL:hidden">
                <BlueRadialBarXL />
              </div>
              <div className="miniXL:block xl:hidden">
                <BlueRadialBarMiniXL />
              </div>
              <div className="2xl:-mt-20 miniXL:-mt-[70px] text-center flex flex-col items-center justify-center">
                <h6 className="2xl:text-4xl text-lg font-semibold text-secondary">
                  105h
                </h6>
                <p className="2xl:text-base md:text-xs font-medium text-[#8D91A5]">
                  Loged hour{" "}
                </p>
              </div>
            </div>
            <div className="mt-5 xl:px-4">
              <div className="flex items-center w-full">
                <div className="md:h-3 md:w-3 mr-1.5 2xl:w-4 2xl:h-4 rounded-full bg-[#44A9F1]"></div>
                <div className="flex items-center justify-between w-full">
                  <p className="text-gray-light md:text-xs 2xl:text-sm font-medium">
                    Approved:
                  </p>
                  <p className="text-secondary md:text-xs 2xl:text-sm font-medium">
                    98h 52m
                  </p>
                </div>
              </div>
              <div className="flex items-center mt-1.5">
                <div className="md:h-3 md:w-3 mr-1.5 2xl:w-4 2xl:h-4 rounded-full bg-[#DAEEFC] border border-[#44A9F1]"></div>
                <div className="flex items-center justify-between w-full">
                  <p className="text-gray-light md:text-xs 2xl:text-sm font-medium">
                    Pending:
                  </p>
                  <p className="text-secondary md:text-xs 2xl:text-sm font-medium">
                    30h 11m
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* log request card */}
      <div className="grid grid-cols-2 gap-5">
        <div className="bg-white mt-5 py-[22px] px-[30px] rounded-[10px] flex items-center gap-2.5">
          <div className="bg-[#FFF1D4] p-2.5 inline-block rounded-md">
            <img src={Clock} alt="clock-icon" />
          </div>
          <div>
            <h6 className="text-xl font-medium text-[#FFAB00]">12h</h6>
            <p className="xl:text-sm text-[10px] text-gray-light">
              Log request
            </p>
          </div>
        </div>
        <div className="bg-white mt-5 py-[22px] px-[30px] rounded-[10px] flex items-center gap-2.5">
          <div className="bg-[#FFF1D4] p-2.5 inline-block rounded-md">
            <img src={Exit} alt="exit-icon" />
          </div>
          <div>
            <h6 className="text-xl font-medium text-[#FFAB00]">05</h6>
            <p className="xl:text-sm text-[10px] text-gray-light">
              Leave request
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MonthlyTimelog;
