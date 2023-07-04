import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./components/Main";
import Class from "./components/Class";
import Attendance from "./components/Attendance";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route exact path="/class" element={<Class />} />
          <Route exact path="/attendance" element={<Attendance />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
