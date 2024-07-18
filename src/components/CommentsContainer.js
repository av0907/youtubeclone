import React, { useEffect, useState } from "react";
import { YOUTUBE_API_KEY, YOUTUBE_COMMENTS_API, YOUTUBE_COMMENTS_API_OLD } from "../utils/constants";


const commentsData_old = [

    {
        name:"Aditya",
        comment:"My first Comment",
        replies:[{
                name:"Aditya",
                comment:"Comment-Reply",
                replies:[{
                    name:"Aditya",
                    comment:"Comment-Reply",}]
        }]
    },
    {
        name:"Vishu",
        comment:"My Second Comment",
        replies:[]
    },
    {
        name:"Vamsi",
        comment:"My Third Comment",
        replies:[]
    }
    ,{
        name:"Dheeraj",
        comment:"My Fourth Comment",
        replies:[]
    },
    {
        name:"Likhith",
        comment:"My Fifth Comment",
        replies:[]
    },
    {
        name:"Prudhvi",
        comment:"My Sixth Comment",
        replies:[]
    }
    ]
const Comment = ({data})=>{
    const {name, comment,replies} = data;
    return <div className="ml-5 pr-7">
                <h2 className="font-bold bg-gray-200">{name}</h2>
                <p>{comment}</p>
            </div>
}

const CommentsList = ({commentsList}) =>{
    return ( commentsList.map((item,index)=>
            <div>
                <Comment data={item}/>
                <div className="ml-5">
                 {item.replies.comments && <CommentsList commentsList={item.replies.comments}/>}
                </div>
            </div>
            ))
}
const CommentsContainer = ({videoId})=>{
   /* const [commentsData, setCommentsData] = useState([]);

    const getCommentsData = async () =>{
        const data = await fetch(YOUTUBE_COMMENTS_API+videoId+"&key="+YOUTUBE_API_KEY);
        const json = await data.json();
        setCommentsData(json.items);

    }
    useEffect(()=>{
        getCommentsData();
    },[])*/
    return <div className="ml-5 text-lg w-[1040px]"> <h2> Comments</h2>

        <CommentsList commentsList={commentsData_old}/>
       </div>
}

export default CommentsContainer;