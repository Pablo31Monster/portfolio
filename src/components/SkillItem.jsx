import React from "react";

const SkillItem = ({ children }) => {
    return(
        <div className='bg-yellow-100/[.04] rounded-md p-3 w-full h-full flex flex-col justify-center align-middle'>
            {children}
        </div>
    )
};

export default SkillItem;