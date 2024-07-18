import React from "react";

const ChatMessage = ({name, message}) =>{
    return <div className="flex flex-row p-1 border border-l-0 border-r-0 border-b-1">
        <img src="https://yt4.ggpht.com/ytc/AIdro_kFYIjGD6r-jjHT4c3dJpimFjwBD8AEFHOQdKLDdI0=s32-c-k-c0x00ffffff-no-rj" className="w-[25px] h-[25px] mr-2 rounded-2xl"/>
       {/* <p className="mr-3 font-semibold"> {name}</p>
        <p> {message}</p>*/}
        <span className="text-justify"><span className="font-semibold mr-3"> {name} </span>{message}</span>
    </div>
}

export default ChatMessage;