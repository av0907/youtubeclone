import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { closeMenu } from "../utils/appSlice";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";

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
                <div className="p-4"><iframe width="1040" height="500" src={"https://www.youtube.com/embed/"+params.get('v')+"?autoPlay=1"}  title="YouTube video player" allow="accelerometer; autoPlay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe></div>
                <LiveChat/>
            </div>
            <CommentsContainer videoId={videoId}/>
       
       </div>
    )
}

export default WatchPage;