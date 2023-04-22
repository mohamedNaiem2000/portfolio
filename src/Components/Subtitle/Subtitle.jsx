import React from 'react';

function Subtitle({head,smallhead ,pcontent}) {
    return (
        <>
          <div className="resumetext relative text-center pb-60">
          <h1 className="big absolute text-8xl -z-10 font-extrabold top-4 left-32 ms-64">
            {head}
          </h1>
          <h1 className="small ms-14 font-bold text-6xl">{smallhead}</h1>
          <p className="mt-9 ms-3 text-lg psmall">
            {pcontent}
          </p>
        </div>   
        </>
    );
}

export default Subtitle;