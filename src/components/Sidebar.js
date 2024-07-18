import React from "react";
import { useSelector } from "react-redux";
import store from "../utils/store";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { requestVideos } from "../utils/appSlice";

const Sidebar = () =>{
    const showSideBar = useSelector((store) => store.app.isMenuOpen);
    const dispatch = useDispatch();
    if(!showSideBar){
        return null;
    }

    return(

        

        <div className="p-3 w-42 pt-5">
            <ul>
                <li className="p-2 font-medium hover:bg-gray-200 rounded-lg cursor:pointer" onClick={()=>{dispatch(requestVideos(""))}} ><Link to="/">Home</Link></li>
                <li className="p-2 font-medium hover:bg-gray-200 rounded-lg cursor:pointer" onClick={()=>{dispatch(requestVideos("trending"))}}><Link to="/">Trending</Link></li>
                <li className="p-2 font-medium hover:bg-gray-200 rounded-lg cursor:pointer" onClick={()=>{dispatch(requestVideos("shorts"))}}>Shorts</li>
                <li className="p-2 font-medium hover:bg-gray-200 rounded-lg cursor:pointer">Youtube Music</li>
                <li className="p-2 font-medium hover:bg-gray-200 rounded-lg cursor:pointer">Subscriptions</li>
            </ul>
        </div>
    )
}

export default Sidebar;