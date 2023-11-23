import { Outlet } from "react-router-dom";
import SideBar from "../components/SideBar/SideBar";

const Main = () => {
  return (
    <div>
      <div className="grid grid-cols-8">
        <div className="col-span-1">
          <SideBar />
        </div>
        <div className="col-span-7">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Main;
