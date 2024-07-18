import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { closeMenu } from "../utils/appSlice";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";
import SideVideos from "./SideVideosPanel";
import SideVideosPanel from "./SideVideosPanel";

const WatchPage = () => {
    const dispatch = useDispatch();
    const [params] = useSearchParams();
    console.log(params.get('v')); 
    const videoId = params.get('v');
    console.log(videoId,"VideoID");

    useEffect(()=>{
        dispatch(closeMenu());
    },[])


    return (
       <div className="flex flex-col w-full">
            <div className="flex flex-row w-full">
                <div className="p-4">{/*<iframe width="1040" height="500" src={"https://www.youtube.com/embed/"+params.get('v')+"&amp;start=11"}  title="YouTube video player" allow="accelerometer; autoPlay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>*/}
                <iframe width="1040" height="500" 
        src={"https://www.youtube.com/embed/"+params.get('v')+"?autoplay=1&start=11"}  
        title="YouTube video player" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        referrerpolicy="strict-origin-when-cross-origin" 
        allowfullscreen>
</iframe>

                </div>
                <LiveChat/>
            </div>
            <div className="flex flex-row justify-between">
                <CommentsContainer videoId={videoId}/>
                <SideVideosPanel/>
            </div>
       
       </div>
    )
}

export default WatchPage;