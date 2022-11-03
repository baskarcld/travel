import React from 'react'
import './client.css'

function Client() {
  return ( 
    <>
      <section className='container-fluid bg-white'>
        <div className='client-div-content py-4'>
          <div className='d-flex flex-row align-items-center justify-content-center'>
            <div className='client-logo-div mx-3'>
                <img src="images\clogos\bsc-logo-top250.png" alt="logo" className='client-logo' />
            </div>
            <div className='client-logo-div mx-3'>
                <img src="images\clogos\li-lock-logo-top250.png" alt="logo" className='client-logo'/>
            </div>  
             <div className='client-logo-div mx-3'>
                <img src="images\clogos\bsc-logo-top250.png" alt="logo" className='client-logo' />
            </div>
            <div className='client-logo-div mx-3'>
                <img src="images\clogos\li-lock-logo-top250.png" alt="logo" className='client-logo'/>
            </div>
          </div>
        </div>
      </section>
    </>
   );
}

export default Client;