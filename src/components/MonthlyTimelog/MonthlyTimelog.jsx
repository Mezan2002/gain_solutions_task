import Clock from "../../assets/icons/clockIcon.svg";
import Exit from "../../assets/icons/exit.svg";
import BlueRadialBar from "../RadialBar/BlueRadialBar/BlueRadialBar";
import OrangeRadialBar from "../RadialBar/OrangeRadialBar/OrangeRadialBar";

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
        <div className="grid md:grid-cols-2 grid-cols-1 2xl:gap-11 gap-4 place-items-center">
          <div>
            <div className="relative">
              {/* radial bar 2xl */}
              <div className="2xl:block hidden">
                <OrangeRadialBar isLarge={true} />
              </div>
              {/* radial bar xl */}
              <div className="xl:block hidden 2xl:hidden">
                <OrangeRadialBar isSmall={true} />
              </div>
              {/* radial bar miniXL */}
              <div className="miniXL:block hidden xl:hidden">
                <OrangeRadialBar />
              </div>
              {/* radial bar md */}
              <div className="md:block hidden miniXL:hidden">
                <OrangeRadialBar isLarge={true} />
              </div>
              {/* radial bar sm */}
              <div className="md:hidden hidden sm:block">
                <OrangeRadialBar isLarge={true} />
              </div>
              {/* radial bar mini */}
              <div className="sm:hidden block">
                <OrangeRadialBar isSmall={true} />
              </div>
              <div className="2xl:-mt-20 -mt-20 md:-mt-[70px]  text-center flex flex-col items-center justify-center">
                <h6 className="2xl:text-4xl text-3xl md:text-lg font-semibold text-secondary">
                  122h
                </h6>
                <p className="2xl:text-base text-base md:text-xs font-medium text-[#8D91A5]">
                  Scheduled hour
                </p>
              </div>
            </div>
            <div className="mt-5 xl:px-4 md:px-10 miniXL:px-2 px-4">
              <div className="flex items-center w-full">
                <div className="h-3 w-3 mr-1.5 2xl:w-4 2xl:h-4 rounded-full bg-[#FF834D]"></div>
                <div className="flex items-center justify-between w-full">
                  <p className="text-gray-light md:text-xs text-sm 2xl:text-sm font-medium">
                    Loged:
                  </p>
                  <p className="text-secondary md:text-xs text-sm 2xl:text-sm font-medium">
                    105h 52m
                  </p>
                </div>
              </div>
              <div className="flex items-center mt-1.5">
                <div className="h-3 w-3 mr-1.5 2xl:w-4 2xl:h-4 rounded-full bg-[#FFE7D5] border border-[#FF834D]"></div>
                <div className="flex items-center justify-between w-full">
                  <p className="text-gray-light md:text-xs text-sm 2xl:text-sm font-medium">
                    Balence:
                  </p>
                  <p className="text-secondary md:text-xs text-sm 2xl:text-sm font-medium">
                    132h
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="relative">
              {/* radial bar 2xl */}
              <div className="2xl:block hidden">
                <BlueRadialBar isLarge={true} />
              </div>
              {/* radial bar xl */}
              <div className="xl:block hidden 2xl:hidden">
                <BlueRadialBar isSmall={true} />
              </div>
              {/* radial bar miniXL */}
              <div className="miniXL:block hidden xl:hidden">
                <BlueRadialBar />
              </div>
              {/* radial bar md */}
              <div className="md:block hidden miniXL:hidden">
                <BlueRadialBar isLarge={true} />
              </div>
              {/* radial bar sm */}
              <div className="md:hidden hidden sm:block">
                <BlueRadialBar isLarge={true} />
              </div>
              {/* radial bar mini */}
              <div className="sm:hidden block">
                <BlueRadialBar isSmall={true} />
              </div>
              <div className="2xl:-mt-20 -mt-20 md:-mt-[70px] text-center flex flex-col items-center justify-center">
                <h6 className="2xl:text-4xl text-3xl md:text-lg font-semibold text-secondary">
                  105h
                </h6>
                <p className="2xl:text-base text-base md:text-xs font-medium text-[#8D91A5]">
                  Loged hour{" "}
                </p>
              </div>
            </div>
            <div className="mt-5 xl:px-4 md:px-10 miniXL:px-2 px-4">
              <div className="flex items-center w-full">
                <div className="h-3 w-3 mr-1.5 2xl:w-4 2xl:h-4 rounded-full bg-[#44A9F1]"></div>
                <div className="flex items-center justify-between w-full">
                  <p className="text-gray-light md:text-xs text-sm 2xl:text-sm font-medium">
                    Approved:
                  </p>
                  <p className="text-secondary md:text-xs text-sm 2xl:text-sm font-medium">
                    98h 52m
                  </p>
                </div>
              </div>
              <div className="flex items-center mt-1.5">
                <div className="h-3 w-3 mr-1.5 2xl:w-4 2xl:h-4 rounded-full bg-[#DAEEFC] border border-[#44A9F1]"></div>
                <div className="flex items-center justify-between w-full">
                  <p className="text-gray-light md:text-xs text-sm 2xl:text-sm font-medium">
                    Pending:
                  </p>
                  <p className="text-secondary md:text-xs text-sm 2xl:text-sm font-medium">
                    30h 11m
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* log request card */}
      <div className="grid sm:grid-cols-2 mini:grid-cols-1 gap-5">
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
        <div className="bg-white sm:mt-5 py-[22px] px-[30px] rounded-[10px] flex items-center gap-2.5">
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
