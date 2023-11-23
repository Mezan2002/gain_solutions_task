import { CiSearch } from "react-icons/ci";
import DividerLg from "../../assets/icons/dividerLarge.svg";
import DividerSm from "../../assets/icons/dividerSmall.svg";

const EmployeeDashboard = () => {
  return (
    <section>
      <div className="flex items-start justify-between">
        <h4 className="text-xl font-medium text-secondary">Dashboard</h4>
        <div className="border border-[#afb2c1] bg-white 2xl:w-[24%] xl:w-[32%] flex items-center py-2 rounded-full">
          <input
            type="text"
            className="bg-transparent focus:outline-none 2xl:w-[90%] w-[85%] px-4"
            placeholder="Search employee"
          />
          <CiSearch className="text-secondary w-6 h-6" />
        </div>
      </div>
      <div className="grid 2xl:grid-cols-4 xl:grid-cols-3 gap-5 mt-10">
        <div className="2xl:col-span-3 xl:col-span-2">
          <h1>Hello</h1>
        </div>
        <div className="col-span-1">
          <div className="bg-white rounded-xl 2xl:min-h-[84vh]">
            {/* card side bg */}
            <div>
              <img
                src="https://i.ibb.co/540kTy7/Group-12.png"
                alt=""
                className=""
              />
            </div>
            {/* employee image */}
            <div className="2xl:-mt-2 xl:-mt-8 flex flex-col items-center justify-center">
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
                  <h6 className="text-[#21214E] font-medium">Daily Timelog</h6>
                  <p className="text-[#8D91A5] text-xs">Today</p>
                </div>
                <img src={DividerLg} alt="divider" />
              </div>
              {/* show on xl */}
              <div className="xl:flex 2xl:hidden items-end justify-center">
                <img src={DividerSm} alt="divider" />
                <div className="text-center">
                  <h6 className="text-[#21214E] font-medium">Daily Timelog</h6>
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
                  <h6 className="text-secondary font-medium text-sm">08h</h6>
                  <p className="text-[#8D91A5] text-xs">Scheduled</p>
                </div>
                <div>
                  <h6 className="text-secondary font-medium text-sm">08h</h6>
                  <p className="text-[#8D91A5] text-xs">Scheduled</p>
                </div>
                <div>
                  <h6 className="text-secondary font-medium text-sm">08h</h6>
                  <p className="text-[#8D91A5] text-xs">Scheduled</p>
                </div>
              </div>
            </div>
            {/* Project log */}
            <div>
              {/* show on 2xl */}
              <div className="2xl:flex hidden items-end justify-center mt-10">
                <img src={DividerLg} alt="divider" />
                <div className="text-center">
                  <h6 className="text-[#21214E] font-medium">Project log</h6>
                  <p className="text-[#8D91A5] text-xs">Recent</p>
                </div>
                <img src={DividerLg} alt="divider" />
              </div>
              {/* show on xl */}
              <div className="xl:flex 2xl:hidden items-end justify-center mt-8">
                <img src={DividerSm} alt="divider" />
                <div className="text-center">
                  <h6 className="text-[#21214E] font-medium">Project log</h6>
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
      </div>
    </section>
  );
};

export default EmployeeDashboard;
