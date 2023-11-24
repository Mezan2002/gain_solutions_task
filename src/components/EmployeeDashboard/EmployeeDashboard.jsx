import EmployeeProfileCard from "../EmployeeProfileCard/EmployeeProfileCard";
import LeaveOverview from "../LeaveOverview/LeaveOverview";
import MonthlyTimelog from "../MonthlyTimelog/MonthlyTimelog";
import TopBarEmployeeDashboard from "../TopBarEmployeeDashboard/TopBarEmployeeDashboard";

const EmployeeDashboard = () => {
  return (
    <section>
      <div className="grid 2xl:grid-cols-4 xl:grid-cols-4 gap-5">
        {/* left side of grid */}
        <div className="2xl:col-span-3 xl:col-span-3">
          <TopBarEmployeeDashboard />
          <div className=" mt-5">
            <div className="grid 2xl:grid-cols-5 md:grid-cols-11 gap-5">
              {/* Leave Overview Card (left grid of inner grid) */}
              <LeaveOverview />
              {/* right grid of inner grid */}
              <MonthlyTimelog />
            </div>
          </div>
        </div>
        {/* employee profile card (right side card) */}
        <EmployeeProfileCard />
      </div>
    </section>
  );
};

export default EmployeeDashboard;
