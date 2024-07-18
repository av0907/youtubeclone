import React from "react";
import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";
import {YOUTUBE_MOVIES_API,YOUTUBE_API_KEY,YOUTUBE_SEARCH_SUGGESTIONS_API_USER_INPUT } from "../utils/constants";
import {useSelector} from "react-redux"
import {useEffect} from "react";

const MainContainer = () => {
    
    const moviesToShow = useSelector((store)=>store.app.videoRequested);

    useEffect(()=>{
        console.log("NEW_url");
    },[moviesToShow])
    console.log(moviesToShow);
    return(

        <div className="p-4">
            <ButtonList/>
            {moviesToShow=="" ? <VideoContainer moviesData={YOUTUBE_MOVIES_API}/>:<VideoContainer moviesData={YOUTUBE_SEARCH_SUGGESTIONS_API_USER_INPUT+moviesToShow+"&key="+YOUTUBE_API_KEY}/>}
            {//moviesToShow!=="" && <VideoContainer moviesData={YOUTUBE_SEARCH_SUGGESTIONS_API_USER_INPUT+moviesToShow+"&key="+YOUTUBE_API_KEY}/>}
            }
        </div>
    )
}


export default MainContainer;