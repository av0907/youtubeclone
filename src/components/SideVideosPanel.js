import React, { useEffect, useState } from "react";
import { YOUTUBE_API_KEY, YOUTUBE_SEARCH_SUGGESTIONS_API_USER_INPUT } from "../utils/constants";
import SideVideos from "./SideVideos";

const SideVideosPanel = ()=>{
    const [sideVideosDataArray, setSideVideosDataArray] = useState([])
    const [sidePanel, setSidePanel]= useState(false);
    const getRelatedVideos= async ()=>{
        const data = await fetch(YOUTUBE_SEARCH_SUGGESTIONS_API_USER_INPUT+"trendingvideos"+"&key="+YOUTUBE_API_KEY);
        const json = await data.json();
        setSideVideosDataArray(json.items)
        setSidePanel(true);
        console.log("sidepanel", sidePanel);
    }
    useEffect(()=>{
        getRelatedVideos();
    },[])
    return <div className="px-2 border border-gray-500 w-[380px] mr-3">
            <div className="px-3 font-bold py-2 text-xl">Trending Videos</div>
     {sidePanel&&sideVideosDataArray.map((data,index)=><SideVideos key={index} videoData={data}/>)}
    </div>
}

export default SideVideosPanel;