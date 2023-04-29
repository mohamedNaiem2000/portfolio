import React from 'react';
import "./Minblog.css";
function Minblog({imgblog,date,Admin,head,content}) {
    return (
        <>
        <div className="parent">
        <div className='imgbl'>
            <img  src={imgblog}/>
        </div>
        <div className="data flex  mt-4 ps-2">
            <p className='me-4'>{date}</p>
            <a className='me-4' href='#' >{Admin}</a>
            <p><i className="fa-regular fa-message"></i><span className='ms-1'>3</span></p>
        </div>
        <div className="text mt-4 ps-2">
            <h1 className='text-xl head'>{head}</h1>
            <p className='mt-4 text-lg text-gray-400'>{content}</p>
        </div>
        </div>
        
            
        </>
    );
}

export default Minblog;