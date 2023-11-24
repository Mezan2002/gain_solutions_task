import { Outlet } from "react-router-dom";
import SideBar from "../components/SideBar/SideBar";

const Main = () => {
  return (
    <div>
      <div className="grid 2xl:grid-cols-7 xl:grid-cols-6">
        <div className="col-span-1">
          <SideBar />
        </div>
        <div className="2xl:col-span-6 xl:col-span-5 p-[30px]">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Main;
