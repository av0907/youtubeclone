import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { closeMenu } from "../utils/appSlice";
import CommentsContainer from "./CommentsContainer";

const WatchPage = () => {
    const dispatch = useDispatch();
    const [params] = useSearchParams();
    console.log(params.get('v')); 

    useEffect(()=>{
        dispatch(closeMenu());
    },[])


    return (
       <div className="flex flex-col">
        <div className="p-4"><iframe width="1040" height="500" src={"https://www.youtube.com/embed/"+params.get('v')} title="YouTube video player" frameBorder="0" allow="accelerometer; autoPlay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe></div>
        <CommentsContainer/>
       </div>
    )
}

export default WatchPage;