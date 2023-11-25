import TableOfTimeSheet from "../TableOfTimeSheet/TableOfTimeSheet";
import TopbarTimeSheet from "../TobBarTimeSheet/TobBarTimeSheet";

const TimeSheet = () => {
  return (
    <section>
      {/* topbar of timesheet */}
      <TopbarTimeSheet />
      <div className="mt-5">
        <div className="card bg-white">
          {/* table of timesheet */}
          <TableOfTimeSheet />
        </div>
      </div>
    </section>
  );
};

export default TimeSheet;
