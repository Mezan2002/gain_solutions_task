import { BrowserRouter, Route, Routes } from "react-router-dom";
import EmployeeDashboard from "./components/EmployeeDashboard/EmployeeDashboard";
import TimeSheet from "./components/TimeSheet/TimeSheet";
import Main from "./layout/main";

function App() {
  return (
    <BrowserRouter>
      <main className="">
        <Routes>
          {/* routes */}
          <Route element={<Main />}>
            <Route path="/" element={<EmployeeDashboard />} />
            <Route path="/timeSheet" element={<TimeSheet />} />
          </Route>
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
