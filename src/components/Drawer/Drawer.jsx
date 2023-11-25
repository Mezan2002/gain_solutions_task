import MenuIcon from "../../assets/icons/menu.svg";
import DrawerContent from "../DrawerContent/DrawerContent";

const Drawer = () => {
  return (
    <div className="drawer drawer-end">
      <input id="allEntriesDrawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* Page content here */}
        <label
          htmlFor="allEntriesDrawer"
          className="drawer-button btn btn-ghost btn-xs text-xs font-medium text-primary-dark"
        >
          <img src={MenuIcon} alt="" />
          All entries
        </label>
      </div>
      <div className="drawer-side z-50">
        <label
          htmlFor="allEntriesDrawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <div className="menu relative p-0 w-3/4 min-h-full bg-white rounded-l-2xl rounded-r-none text-base-content">
          {/* Sidebar content here */}
          <DrawerContent />
        </div>
      </div>
    </div>
  );
};

export default Drawer;
