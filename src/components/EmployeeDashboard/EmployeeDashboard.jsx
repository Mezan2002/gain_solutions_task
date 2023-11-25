import EmployeeProfileCard from "../EmployeeProfileCard/EmployeeProfileCard";
import LeaveOverview from "../LeaveOverview/LeaveOverview";
import MonthlyTimelog from "../MonthlyTimelog/MonthlyTimelog";
import TopBarEmployeeDashboard from "../TopBarEmployeeDashboard/TopBarEmployeeDashboard";

const EmployeeDashboard = () => {
  return (
    <section>
      <div className="miniXL:grid 2xl:grid-cols-4 miniXL:grid-cols-4 lg:grid-cols-4 gap-5  max-h-[95vh] overflow-auto">
        {/* left side of grid */}
        <div className="2xl:col-span-3 miniXL:col-span-3 lg:col-span-4">
          <TopBarEmployeeDashboard />
          <div className=" mt-5">
            <div className="lg:block miniXL:hidden mb-5">
              <EmployeeProfileCard />
            </div>
            <div className="grid 2xl:grid-cols-5 miniXL:grid-cols-11 lg:grid-cols-1 gap-5">
              {/* Leave Overview Card (left grid of inner grid) */}
              <LeaveOverview />
              {/* right grid of inner grid */}
              <MonthlyTimelog />
            </div>
          </div>
        </div>
        {/* employee profile card (right side card) */}
        <div className="miniXL:block hidden">
          <EmployeeProfileCard />
        </div>
      </div>
    </section>
  );
};

export default EmployeeDashboard;
