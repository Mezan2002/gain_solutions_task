import { Outlet } from "react-router-dom";
import SideBar from "../components/SideBar/SideBar";

const Main = () => {
  return (
    <div>
      <SideBar />
      <Outlet />
    </div>
  );
};

export default Main;
