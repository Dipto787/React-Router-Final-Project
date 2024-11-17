import { Outlet } from "react-router-dom";
import Home from "./Home"; 
import Banner from "../Components/Banner";

  
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