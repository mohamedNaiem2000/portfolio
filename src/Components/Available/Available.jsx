import React from 'react';
import "./Avilable.css";
function Available(props) {
    return (
        <>
           <div className="avilab -mt-40 pt-40">
            <div className="container text-center  ">
                <p className='text-4xl font-black'>I'm <span className='child'>Available</span> for freelancing</p>
            <p className='text-gray-500 text-xl mt-6'> small river named Duden flows by their place and supplies it with the<br/> necessary regelialia.</p>
            <button className="rounded-full bg-yellow-400 font-medium text-lg px-8 py-3 text-black mt-6">
                  Hire me
                </button>
            </div>
            </div> 
        </>
    );
}

export default Available;