import React from 'react';
import './Progress.css';
function Progress({course,rate}) {
    return (
        <div className='progres text-left mt-6'>
            <div className="pro ">
            <h3 className='text-2xl'>{course}</h3> 
           <div className='prs  h-3 '>
            <div className="progress relative bg-yellow-400 h-3 mt-7 w-3/4" >
                <span className='absolute right-0 -top-14 text-2xl'>{rate}</span>
            </div>
           </div>
            </div>
          

        </div>
    );
}

export default Progress;