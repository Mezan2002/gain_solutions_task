import { Outlet } from "react-router-dom";
import MobileNavBar from "../components/MobileNavBar/MobileNavBar";
import SideBar from "../components/SideBar/SideBar";

const Main = () => {
  return (
    <div>
      <MobileNavBar />
      <div className="grid 2xl:grid-cols-7 miniXL:grid-cols-6 lg:grid-cols-7">
        <div className="miniXL:col-span-1 lg:col-span-2 sticky left-0">
          <SideBar />
        </div>
        <div className="2xl:col-span-6 miniXL:col-span-5 lg:col-span-5 p-[30px]">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Main;
