import TableData from "../../utils/TableData";
import Drawer from "../Drawer/Drawer";

const TableOfTimeSheet = () => {
  const tableData = TableData;
  return (
    <div className="overflow-x-auto rounded-lg max-h-[80vh] overflow-auto scrollbar-none">
      <table className="table">
        {/* head */}
        <thead className="bg-[#FBFAFF] sticky top-0 z-20">
          <tr className="">
            <th className="py-5 text-sm font-normal pl-[30px] text-[#8D91A5]">
              Name
            </th>
            <th className="py-5 text-sm font-normal text-[#8D91A5]">Date</th>
            <th className="py-5 text-sm font-normal text-[#8D91A5]">
              Scheduled
            </th>
            <th className="py-5 text-sm font-normal text-[#8D91A5]">Logged</th>
            <th className="py-5 text-sm font-normal text-[#8D91A5]">Balance</th>
            <th className="py-5 text-sm font-normal text-[#8D91A5]">Status</th>
            <th className="py-5 text-sm font-normal pr-[30px] text-[#8D91A5]">
              Details
            </th>
          </tr>
        </thead>
        {/* row 1 */}
        {tableData.map((data) => (
          <tbody className="z-10" key={data.id}>
            <tr className="" key={data.id}>
              <td className="xl:p-5 p-3">
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="w-10 rounded-full ring ring-[#D8E0ED] ring-offset-base-100">
                      <img src={data?.employeeImage} alt="employee image" />
                    </div>
                  </div>
                  <div>
                    <div className="font-medium text-base text-primary-dark">
                      {data.name}
                    </div>
                    <div className="text-xs xl:text-sm text-gray-light">
                      {data.designation}
                    </div>
                  </div>
                </div>
              </td>
              <td className="xl:p-5 p-3 text-sm font-medium text-secondary">
                {data.day}
                <br />
                <span className="font-normal text-gray-light text-xs xl:text-base">
                  {data.time}
                </span>
              </td>
              <td className="xl:p-5 p-3 text-sm text-secondary">
                {data.scheduled}
              </td>
              <td className="xl:p-5 p-3 text-sm text-secondary">
                {data.logged}
              </td>
              <td className="xl:p-5 p-3 text-sm text-secondary">
                <p className="mr-2">
                  {data.balance}{" "}
                  {data.additionalBalance && (
                    <span
                      className={`px-3.5 py-1 text-[${data.additionalBalance.textColor}] bg-[${data.additionalBalance.bgColor}] inline-block rounded-[10px] ml-2`}
                    >
                      {data.additionalBalance.content}
                    </span>
                  )}{" "}
                </p>
              </td>
              <td className="xl:p-5 p-3 flex gap-x-1.5 mt-2">
                {data?.status?.map((singleStatus, i) => (
                  <p
                    key={i}
                    className={`px-3.5 py-1 text-[${singleStatus.textColor}] bg-[${singleStatus.bgColor}] inline-block rounded-full`}
                  >
                    {singleStatus.content}
                  </p>
                ))}
              </td>
              <th className="xl:p-5 p-3">
                <Drawer />
              </th>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
};

export default TableOfTimeSheet;
