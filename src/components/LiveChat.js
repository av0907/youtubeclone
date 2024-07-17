import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { messageGenerator, nameGenerator } from "../utils/helper";

const LiveChat = () =>{
    const [myLiveMessage, setMyLiveMessage] = useState("")
    const dispatch = useDispatch();
    const chatMessages = useSelector(store=>store.chat.messages);
    useEffect(()=>{

        const time = setInterval(()=>{
            //API Polling
            dispatch(addMessage({name:nameGenerator(),message:messageGenerator(15)}));


        },2000);

        return ()=>{clearInterval(time)};
    },[])

    return <div className="w-full mr-2"><div className="p-1 m-4 mb-0 ml-0 w-full border border-1 bg-slate-100 h-[460px] overflow-y-scroll flex flex-col-reverse" > 

    <div>{chatMessages.map((data,index)=> <ChatMessage name={data.name} message={data.message}/>  )}</div>
   
    </div>
    <form onSubmit={
        (e)=>{e.preventDefault();
        dispatch(addMessage({name:"Aditya",
                            message:myLiveMessage,}));
                setMyLiveMessage("");
        }}>
        <input className="border border-2 w-[75%]" type="text" placeholder="Enter your message" value={myLiveMessage} onChange={(e)=>{setMyLiveMessage(e.target.value)}}/>
        <button className="w-[20%] bg-green-100 p-1 m-2">Send</button>
    </form>
    </div>
}

export default LiveChat;