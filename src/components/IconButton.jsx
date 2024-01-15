import React from "react";

const IconButton = ({ href, img_src, text }) => {
    return(
        <a className="border-2 rounded-full border-slate-500 p-2 min-w-36 justify-around flex mr-6" href={href}>
            <img src={img_src}>
            
            </img>
            <span className="text-slate-500"> 
                {text}
            </span>
        </a>
    );
};

export default IconButton;