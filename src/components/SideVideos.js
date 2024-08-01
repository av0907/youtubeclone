import React from "react";
import { Link } from "react-router-dom";

const SideVideos = ({videoData})=>{

    //const {snippet,channelTitle} = videoData;
    //console.log(channelTitle,"ABC")

    const givenTimestamp = videoData.snippet.publishTime;

// Parse the given timestamp into a Date object
    const givenDate = new Date(givenTimestamp);

// Get the current date
    const currentDate = new Date();

    let t = (currentDate.getFullYear() - givenDate.getFullYear()) * 12 + (currentDate.getMonth() - givenDate.getMonth())
    if(t>=12)
    {
        t=Math.floor(t/12);
        //t = "• " + (t/12) + "year ago"
        (t==1)? t="• " + t + " year ago":t="• " + t + " years ago"
    }
    else if(t==0)
    {
        t=currentDate.getDate()-givenDate.getDate();
        (t==1)? t="• " + t + " day ago":t="• " + t + " days ago"
    }
    else
    {
        (t==1)? t="• " + t + " month ago":t="• " + t + " months ago"
    }

    return <Link to={"/watch?v="+videoData.id.videoId}> <div onClick={()=>{window.scrollTo({
        top: 0,
        behavior: 'instant'  // Optional: Smooth scrolling behavior
      });}} className=" flex flex-col items-center pl-6 py-2 ">
            <div className="flex flex-row overflow-hidden">
                <img className="rounded-lg items-center h-[100px] w-[200px]" src={videoData.snippet.thumbnails.medium.url} />
                <div className="w-[280px] p-1 text-sm">
                     <h2 className="font-semibold">{videoData.snippet.title.substring(0,33)+"..."}</h2>
                    <h2 className="text-slate-600 font-semibold">{videoData.snippet.channelTitle}</h2>
                     <h2> {t}</h2>
                 </div>
            </div>
        </div>
    </Link>
}

export default SideVideos;