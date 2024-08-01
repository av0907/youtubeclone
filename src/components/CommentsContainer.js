import React, { useEffect, useState } from "react";
import { YOUTUBE_API_KEY, YOUTUBE_COMMENTS_API, YOUTUBE_COMMENTS_API_OLD } from "../utils/constants";


const commentsData_old = [

    {
        name:"Aditya",
        comment:"TRS has given highlight to people who deserve appreciation for what they are doing ABHIJIT CHAVDA, RAJARSHI NANDY , NILESH SIR and many more",
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
        comment:"Give a thumps up if want part 3 :)",
        replies:[]
    },
    {
        name:"Vamsi",
        comment:"Nilesh Oak is amazing I am so inspired by this episode as an American",
        replies:[]
    }
    ,{
        name:"Dheeraj",
        comment:"Hi Guys!!",
        replies:[]
    },
    {
        name:"Likhith",
        comment:"I bow down to you dr neelesh oak, you sure are a  reincarnation of some maharishi",
        replies:[]
    },
    {
        name:"Prudhvi",
        comment:"Graham Hancock is the Nilesh Nilkanth Oak of the USA.",
        replies:[]
    }
    ]
const Comment = ({data})=>{
    const {name, comment,replies} = data;
    {/*return <div className="ml-2 pr-7 flex flex-row">
            <div className="p-2">
                <img className="h-[40px] w-[40px] rounded-3xl" src={data.snippet.topLevelComment.snippet.authorProfileImageUrl}/>
            </div>
            <div className="m-2">
                <h2 className="font-semibold text-base ">{data.snippet.topLevelComment.snippet.authorDisplayName}</h2>
                <p className="text-sm">{data.snippet.topLevelComment.snippet.textDisplay}</p>
            </div>
            </div>*/}

            return <div className="ml-2 pr-7 flex flex-row">
            <div className="p-2">
                <img className="h-[40px] w-[40px] rounded-3xl" src="https://yt4.ggpht.com/ytc/AIdro_kN0vHjIDhTA7B0t2l-8jw4du0Fp3Q4NWDxREtZ0wG6prM4O5dykKEJAxt14lhBl9HMMQ=s64-c-k-c0x00ffffff-no-rj"/>
            </div>
            <div className="m-2">
                <h2 className="font-semibold text-base ">{name}</h2>
                <p className="text-sm">{comment}</p>
            </div>
            </div>
}

const CommentsList = ({commentsList}) =>{
    return ( commentsList.map((item,index)=>
            <div>
                <Comment data={item}/>
             {   <div className="ml-5">
                 {item.replies.comment && <CommentsList commentsList={item.replies.comment}/>}
                </div>}
            </div>
            ))
}
const CommentsContainer = ({videoId})=>{
    //const [commentsData, setCommentsData] = useState([]);

    /*const getCommentsData = async () =>{
        const data = await fetch(YOUTUBE_COMMENTS_API+videoId+"&key="+YOUTUBE_API_KEY);
        const json = await data.json();
        setCommentsData(json.items);
        //console.log("Comments data",commentsData);

    }
    useEffect(()=>{
        getCommentsData();
    },[])*/
    return <div className="ml-5 text-lg w-[1040px]"> <h2 className="font-bold text-lg"> {commentsData_old.length} Comments</h2>

        <CommentsList commentsList={commentsData_old}/>
       </div>
}

export default CommentsContainer;