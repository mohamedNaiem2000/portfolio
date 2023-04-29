import React from 'react';
import "./Counter.css";
function Counter(props) {
    return (
        <>
        <div className="container">
            <div className="parentcount flex justify-evenly">
                <div className="chilcount text-center p-10 ">
                 <h1 className='text-2xl'>100</h1>
                 <h2>Awards</h2>
                </div>

                <div className="chilcount text-center p-10 ">
                 <h1 className='text-2xl'>1200</h1>
                 <h2>Complete Projects</h2>
                </div>

                <div className="chilcount text-center p-10 ">
                 <h1 className='text-2xl'>1200</h1>
                 <h2>Happy Customers</h2>
                </div>

                <div className="chilcount text-center p-10 ">
                 <h1 className='text-2xl'>500</h1>
                 <h2>Cups of coffee</h2>
                </div>
            </div>
        </div>
            
        </>
    );
}

export default Counter;