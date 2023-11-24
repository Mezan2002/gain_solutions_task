import Calender from "../../assets/icons/calender.svg";
import Cross from "../../assets/icons/cross.svg";
import Plane from "../../assets/icons/plane.svg";
import Tic from "../../assets/icons/tic.svg";

const LeaveOverview = () => {
  return (
    <div className="2xl:col-span-2 xl:col-span-5 bg-white p-[30px] rounded-[10px]">
      <div className="pb-[30px]">
        <h6 className="md:text-lg 2xl:text-xl font-medium text-[#21214E]">
          Leave overview
        </h6>
        <p className="text-[#8D91A5] text-sm">This year</p>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="px-6 pb-5 pt-10 bg-[#DFE8FF] rounded-[10px] relative md:mb-4 2xl:mb-6">
          <div className="absolute -top-5 2xl:left-[39%] md:left-[34%] rounded-full p-2 bg-[#2C67FF] border-4 border-white">
            <img src={Plane} alt="" />
          </div>
          <div className="flex flex-col items-center justify-center">
            <h6 className="text-2xl font-semibold text-secondary">25d</h6>
            <p className="text-sm text-[#8D91A5]">Total</p>
          </div>
        </div>
        <div className="px-6 pb-5 pt-10 bg-[#EEF0F3] rounded-[10px] relative md:mb-4 2xl:mb-6">
          <div className="absolute -top-5 2xl:left-[39%] md:left-[34%] rounded-full p-2 bg-[#8F99AD] border-4 border-white">
            <img src={Cross} alt="" />
          </div>
          <div className="flex flex-col items-center justify-center">
            <h6 className="text-2xl font-semibold text-secondary">10d 4h</h6>
            <p className="text-sm text-[#8D91A5]">Taken</p>
          </div>
        </div>
        <div className="px-6 pb-5 pt-10 bg-[#E3F2FD] rounded-[10px] relative">
          <div className="absolute -top-5 2xl:left-[39%] md:left-[34%] rounded-full p-2 bg-[#44A9F1] border-4 border-white">
            <img src={Tic} alt="" />
          </div>
          <div className="flex flex-col items-center justify-center">
            <h6 className="text-2xl font-semibold text-secondary">12d 4h</h6>
            <p className="text-sm text-[#8D91A5]">Balance</p>
          </div>
        </div>
        <div className="px-6 pb-5 pt-10 bg-[#FFF1D4] rounded-[10px] relative">
          <div className="absolute -top-5 2xl:left-[39%] md:left-[34%] rounded-full p-2 bg-[#FFAB00] border-4 border-white">
            <img src={Calender} alt="" />
          </div>
          <div className="flex flex-col items-center justify-center">
            <h6 className="text-2xl font-semibold text-secondary">02d</h6>
            <p className="text-sm text-[#8D91A5]">Earning</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeaveOverview;
