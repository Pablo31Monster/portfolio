import React from "react";

const ReactI = ({ width, height, style }) => {
    return(
        <svg height={height} width={width} className={style} xmlns="http://www.w3.org/2000/svg" viewBox="-10.5 -9.45 21 18.9" ><circle cx="0" cy="0" r="2"></circle><g className='stroke-yellow-200' strokeWidth="1" fill="none"><ellipse rx="10" ry="4.5"></ellipse><ellipse rx="10" ry="4.5" transform="rotate(60)"></ellipse><ellipse rx="10" ry="4.5" transform="rotate(120)"></ellipse></g></svg> 
    )
};

export default ReactI;