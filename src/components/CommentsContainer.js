import React from "react";


const commentsData = [

    {
        name:"Aditya",
        comment:"My first Comment",
        replies:[{
                name:"Aditya",
                comment:"Comment-Reply",
                replies:[]
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
                    <CommentsList commentsList={item.replies}/>
                </div>
            </div>
            ))
}
const CommentsContainer = ()=>{
    return <div className="ml-5 text-lg"> <h2> Comments</h2>

        <CommentsList commentsList={commentsData}/>
       </div>
}

export default CommentsContainer;