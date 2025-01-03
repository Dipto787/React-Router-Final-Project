import { NavLink } from "react-router-dom";

const Nav = () => {
    let links = <>
        <NavLink to='/' className={({isActive})=>isActive?'text-[#23BE0A] rounded-lg border-2 bg-base-200 hover:text-[#ffff] hover:bg-[#23BE0A] border-[#23BE0A] mr-5 font-extrabold':'mr-5'}><li><a>Home</a></li></NavLink>
        <NavLink to='/listedBooks' className={({isActive})=>isActive?'text-[#23BE0A] bg-base-200 hover:text-[#ffff] hover:bg-[#23BE0A] rounded-lg border-2  border-[#23BE0A] mr-2 font-bold':'mr-2'} ><li><a>Listed Books</a></li> </NavLink>
        <NavLink to='/pageToRead' className={({isActive})=>isActive?'text-[#23BE0A] bg-base-200 hover:text-[#ffff] hover:bg-[#23BE0A] rounded-lg border-2  border-[#23BE0A]  font-bold':''} ><li><a>Pages to Read</a></li> </NavLink> </>;
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                           {
                            links
                           }
                        </ul>
                    </div>
                    <NavLink className="btn md:flex hidden btn-ghost text-xl">Book Vibe</NavLink>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {
                            links
                        }
                    </ul>
                </div>
                <div className="navbar-end   ">
                    <a className="btn mr-4 px-7 hover:bg-transparent hover:text-black border-2 hover:border-[#23BE0A] text-white bg-[#23BE0A]">Sign In</a>
                    <a className="btn px-7 hover:bg-transparent hover:text-black border-2 hover:border-[#59C6D2] text-white bg-[#59C6D2]">Sign Up</a>
                </div>
            </div>
        </div>
    );
};

export default Nav;