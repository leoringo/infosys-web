import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <div className="w-full">
        <Navbar />
        <div className="mt-[5%] flex items-center flex-col">
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default App;
