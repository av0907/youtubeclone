import React from "react";
import { Link } from "react-router-dom";

const VideoCard = ({cardlist})=>{

    //console.log("CARD LIST",cardlist);

    //const {snippet} = cardlist;
    //console.log(cardlist);
    //console.log(cardlist.etag);
    //console.log(cardlist.snippet.thumbnails.medium.url);
    return(
        <div className="m-2 rounded-lg w-72 shadow-sm">
            <img className="rounded-lg" alt="thumbnail" src={cardlist.snippet.thumbnails.medium.url}/>
            <ul>
                <li className="font-semibold"> {cardlist.snippet.title}  </li>
                <li> {cardlist.snippet.channelTitle}  </li>
                <li> {cardlist.statistics.likeCount} <span className="font-semibold">Likes </span> </li>
            </ul>
        </div>
        
    )
}

export default VideoCard;