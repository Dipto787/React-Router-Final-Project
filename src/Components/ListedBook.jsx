import { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { NavLink, Outlet } from "react-router-dom";
const ListedBook = () => {
    let [actives,setActives]=useState(0);
    let [category,setCategory]=useState('');
    
    return (
        <div className="max-w-7xl mt-3 px-4 mx-auto">
            <div className="bg-base-200 p-8 rounded-lg">
                <h1 className="text-center text-2xl font-bold">Books</h1>
            </div>
            <div>
                <div className="dropdown mt-7 flex justify-center dropdown-bottom">
                    <div tabIndex={0} role="button" className="btn    text-center m-1 bg-[#23BE0A] text-white font-bold px-8">Sort By <RiArrowDropDownLine size={40} /></div>
                    <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                        <li onClick={()=>setCategory('rating')}><a>Rating</a></li>
                        <li onClick={()=>setCategory('numOfPage')}><a>Number of pages</a></li>
                        <li onClick={()=>setCategory('publishYear')}><a>Publisher year</a></li>
                    </ul>
                </div>
            </div>

            <div>
                <div className="flex items-center -mx-4 overflow-x-auto overflow-y-hidden  flex-nowrap dark:bg-gray-100 dark:text-gray-800">
                    <NavLink to='' onClick={()=>setActives(0)}  className={`flex items-center rounded-t-lg flex-shrink-0 px-5 py-3 space-x-2  dark:border-gray-600 ${actives===0?' border  border-b-0 ':'border-b'} dark:text-gray-600`}>
                      
                        <span>Read Books</span>
                    </NavLink>
                    <NavLink to='wishBook' onClick={()=>setActives(1)}   className={`flex items-center border-b  flex-shrink-0 px-5 py-3 space-x-2 ${actives===1?' border  border-b-0 ':'border-b w-[800px] '}  rounded-t-lg dark:border-gray-600 dark:text-gray-90`}>
                         
                        <span>Wishlist Books</span>
                    </NavLink>

                </div>
            </div>
            
                <Outlet></Outlet>


        </div>
    );
};

export default ListedBook;