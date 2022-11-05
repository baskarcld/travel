import React from 'react';
import './Footer.css';
import { BsTwitter } from 'react-icons/bs';
import { FaTelegram } from 'react-icons/fa';
function Footer ()
{
  return (
    <>
      <section className='footer-section container-fluid'>
        <div className='footer-content-div'>
          <div className='row'>
            <div className='col-7 ps-5'>
              <div className='footer-logo-div my-5'>
                <img src="images\logo_footer.png" alt="" />
              </div>
              <h3 className='h3 text-white'>Lock, Earn, Travel</h3>
              <p className='text text-white'>Crytocurrency is a high risk investment and may result in total loss. DYOR</p>
            </div>
            <div className='col-5 my-5'>
              <h3 className='h3 text-white'>Connect with us:</h3>
              <div className='d-flex'>
                <div className='me-4 footer-icon-div'>
                  <a href='#' className='text-white h3'><BsTwitter className='footer-icon' /></a>
                </div>
                <div className='footer-icon-div'>
                  <a href='#' className='text-white h3'><FaTelegram className='footer-icon' /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='copy-section container-fluid bg-white'>
        <div className='copy-content-div py-2'>
          <h2 className='h2 text-black text-center'>Copyright © 2022 - Travelerse</h2>
        </div>
      </section>
    </>
  );
}

export default Footer;