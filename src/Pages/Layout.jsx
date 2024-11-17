import { Outlet } from "react-router-dom";
import Home from "./Home";

  
  const Layout = () => {
    return (
        <div>
            <div>
            <Home></Home>
            <Outlet></Outlet>
            </div>
        </div>
    );
  };
  
  export default Layout;