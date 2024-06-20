import React from "react";
import Buttons from "./Buttons";

const ButtonList = () =>{

    const x = ["All","Sports","Politics","Agriculture","Vlogs","Hiking","Movies","Games","Live","Music","TFI", "Ravi Teja", "Pawan Kalyan", "OG"];
    return(

        <div>
            {x.map((item)=>{ return <Buttons name={item} />})}
        </div>
    )
}

export default ButtonList;