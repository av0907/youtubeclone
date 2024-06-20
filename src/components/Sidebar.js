import React from "react";
import { useSelector } from "react-redux";
import store from "../utils/store";
import { Link } from "react-router-dom";

const Sidebar = () =>{
    const showSideBar = useSelector((store) => store.app.isMenuOpen);

    if(!showSideBar){
        return null;
    }

    return(

        

        <div className="p-3 w-40 pt-5">
            <ul>
                <li className="p-2 font-medium hover:bg-gray-200 rounded-lg"><Link to="/">Home</Link></li>
                <li className="p-2 font-medium hover:bg-gray-200 rounded-lg">Trending</li>
                <li className="p-2 font-medium hover:bg-gray-200 rounded-lg">Shorts</li>
                <li className="p-2 font-medium hover:bg-gray-200 rounded-lg">Youtube Music</li>
                <li className="p-2 font-medium hover:bg-gray-200 rounded-lg">Subscriptions</li>
            </ul>
        </div>
    )
}

export default Sidebar;