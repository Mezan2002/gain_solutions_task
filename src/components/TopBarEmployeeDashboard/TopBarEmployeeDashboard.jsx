import { FaPlus } from "react-icons/fa6";
import { IoPlayOutline } from "react-icons/io5";

const TopBarEmployeeDashboard = () => {
  return (
    <div>
      <h4 className="text-xl font-medium text-secondary">Dashboard</h4>
      <div className="bg-white rounded-[10px] p-[30px] flex items-center justify-between mt-9">
        <div>
          <h6 className="text-primary-dark font-semibold xl:text-2xl 2xl:text-3xl">
            Welcome back Katarina
          </h6>
          <p className="xl:text-sm 2xl:text-base text-[#8D91A5] mr-2.5">
            Let&apos;s start your day <span className="">☕</span>
          </p>
        </div>
        <div className="flex items-center">
          <button className="flex items-center py-2 px-5 bg-primary text-white rounded-lg mr-2.5">
            <FaPlus className="mr-2.5 h-[18px] w-[18px]" />
            <p className="text-sm font-medium">New entry</p>
          </button>
          <button className="flex items-center py-2 px-5 text-secondary border border-[#8D91A5] rounded-lg mr-2.5">
            <IoPlayOutline className="mr-2.5 h-[18px] w-[18px]" />
            <p className="text-sm font-medium">Start timer</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TopBarEmployeeDashboard;
