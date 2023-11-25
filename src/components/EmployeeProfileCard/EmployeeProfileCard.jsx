import { CiSearch } from "react-icons/ci";
import DividerLg from "../../assets/icons/dividerLarge.svg";
import DividerSm from "../../assets/icons/dividerSmall.svg";

const EmployeeProfileCard = () => {
  return (
    <div className="col-span-1">
      <div className="hidden border border-[#afb2c1] bg-white px-4 miniXL:flex items-center py-2 rounded-full">
        <input
          type="text"
          className="bg-transparent focus:outline-none w-[95%]"
          placeholder="Search employee"
        />
        <CiSearch className="text-secondary w-6 h-6" />
      </div>
      <div className="bg-white rounded-xl 2xl:min-h-[84vh] mt-5">
        {/* card side bg */}
        <div>
          <img
            src="https://i.ibb.co/540kTy7/Group-12.png"
            alt=""
            className=""
          />
        </div>
        {/* employee image */}
        <div className="2xl:-mt-2 miniXL:-mt-8 flex flex-col items-center justify-center">
          <img
            src="https://i.ibb.co/896mtyr/unsplash-m-EZ3-Po-FGs-k.png"
            alt="employee-image"
            className="w-20 h-20 rounded-full border-2 border-[#D8E0ED]"
          />
          <h5 className="text-lg font-medium text-primary-dark">
            Katarina Nilson (You)
          </h5>
          <p className="text-[#8D91A5] mb-[30px]">Laravel developer</p>
        </div>
        {/* Daily Timelog */}
        <div>
          {/* show on 2xl */}
          <div className="2xl:flex hidden items-end justify-center">
            <img src={DividerLg} alt="divider" />
            <div className="text-center">
              <h6 className="text-[#21214E] font-medium text-sm">
                Daily Timelog
              </h6>
              <p className="text-[#8D91A5] text-xs">Today</p>
            </div>
            <img src={DividerLg} alt="divider" />
          </div>
          {/* show on xl */}
          <div className="miniXL:flex 2xl:hidden items-end justify-center">
            <img src={DividerSm} alt="divider" />
            <div className="text-center">
              <h6 className="text-[#21214E] font-medium text-sm xl:block hidden">
                Daily Timelog
              </h6>
              <h6 className="text-[#21214E] font-medium text-sm block xl:hidden">
                Timelog
              </h6>
              <p className="text-[#8D91A5] text-xs">Today</p>
            </div>
            <img src={DividerSm} alt="divider" />
          </div>
          <div className="mt-5 grid grid-cols-2 gap-5 text-center">
            <div>
              <h6 className="text-secondary font-medium text-sm">08h</h6>
              <p className="text-[#8D91A5] text-xs">Scheduled</p>
            </div>
            <div>
              <h6 className="text-secondary font-medium text-sm">06h 30m</h6>
              <p className="text-[#8D91A5] text-xs">Approved</p>
            </div>
            <div>
              <h6 className="text-secondary font-medium text-sm">07h 30m</h6>
              <p className="text-[#8D91A5] text-xs">Loged</p>
            </div>
            <div>
              <h6 className="text-secondary font-medium text-sm">-00h 30m</h6>
              <p className="text-[#8D91A5] text-xs">Balance</p>
            </div>
          </div>
        </div>
        {/* Project log */}
        <div>
          {/* show on 2xl */}
          <div className="2xl:flex hidden items-end justify-center mt-10">
            <img src={DividerLg} alt="divider" />
            <div className="text-center">
              <h6 className="text-[#21214E] font-medium text-sm">
                Project log
              </h6>
              <p className="text-[#8D91A5] text-xs">Recent</p>
            </div>
            <img src={DividerLg} alt="divider" />
          </div>
          {/* show on xl */}
          <div className="miniXL:flex 2xl:hidden items-end justify-center mt-8">
            <img src={DividerSm} alt="divider" />
            <div className="text-center">
              <h6 className="text-[#21214E] font-medium text-sm">
                Project log
              </h6>
              <p className="text-[#8D91A5] text-xs">Recent</p>
            </div>
            <img src={DividerSm} alt="divider" />
          </div>
          <div className="mt-5 mx-[30px]">
            <div className="p-4 bg-[#FFF6E9] rounded-xl">
              <h6 className="text-sm font-medium text-secondary">
                Unite Living
              </h6>
              <p className="text-secondary text-xs">102h 30m loged.</p>
            </div>
          </div>
          <div className="mt-2.5 mx-[30px] pb-5">
            <div className="p-4 bg-[#F5EEEB] rounded-xl">
              <h6 className="text-sm font-medium text-secondary">
                Unite Living
              </h6>
              <p className="text-secondary text-xs">102h 30m loged.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeProfileCard;
