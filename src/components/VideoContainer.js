import React, { useEffect, useState } from "react";
import { YOUTUBE_MOVIES_API } from "../utils/constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

const VideoContainer = ({moviesData}) =>{

    const [moviesList, setmoviesList] = useState([])
    console.log("MD",moviesData);

    const loadVideos = async () => {
        const data = await fetch(moviesData);
        const json1 = await data.json();
        console.log("JSON",json1);
        setmoviesList(json1.items);
        //console.log("Movies", moviesList);
    }

    useEffect(()=>{
        loadVideos();
    },[moviesData])

    return (
        <div className="flex flex-wrap">
            {//<VideoCard cardlist={moviesList[0]}/>
            }

            {moviesList.map((videoData,index)=><Link to={"/watch?v="+videoData.id}> <VideoCard key={index} cardlist={videoData}/> </Link>)}
        </div>
    )
}


export default VideoContainer;