import React from "react";
import { Link } from "react-router-dom";

const VideoCard = ({cardlist})=>{

    //console.log("CARD LIST",cardlist);

    //const {snippet} = cardlist;
    //console.log(cardlist);
    //console.log(cardlist.etag);
    //console.log(cardlist.snippet.thumbnails.medium.url);
    function formatLikesCount(number) {
        if (number >= 1000000) {
            return (number / 1000000).toFixed(1).replace(/\.0$/, '') + 'M';
        } else if (number >= 1000) {
            return (number / 1000).toFixed(1).replace(/\.0$/, '') + 'k';
        }
        return number.toString();
    }
    return(
        <div className="m-3 p-2 rounded-lg w-72 shadow-sm h-[260px]">
            <img className="rounded-lg" alt="thumbnail" src={cardlist.snippet.thumbnails.medium.url}/>
            <ul>
                <li className="font-semibold"> {cardlist.snippet.title.substring(0,60)+"..."}  </li>
                <li> {cardlist.snippet.channelTitle}  </li>
                {//<li> {formatLikesCount(cardlist.statistics.likeCount)} <span className="font-semibold">Views </span> </li>
                }
            </ul>
        </div>
        
    )
}

export default VideoCard;