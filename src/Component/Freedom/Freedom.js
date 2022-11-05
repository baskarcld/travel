import React from 'react';
import './Freedom.css';
import { BsFillCheckSquareFill, BsFillArrowRightCircleFill } from 'react-icons/bs';


function Freedom ()
{
  return (
    <>
      <section className='freedom-container container-fluid py-5'>
        <h1 className='h1 text-center fw-bold'>$TRAVELERSE 3 Steps to Financial Freedom</h1>

        <div className="safe-content-div py-5">
          <div className="row">
            <div className="col-lg-5 col-12">
              <div className="safe-img-div-1 mt-4">
                <img
                  src="images\lllustration-2.png"
                  alt="img"
                  className="safe-img img-fluid"
                />
              </div>
            </div>

            <div className="col-lg-7 col-12 mt-lg-0 mt-4">
              <ul className='ps-md-4 ps-1'>
                <h3 className='h3 fw-bold'>LOCK - EARN - <span className='cu text-decoration-underline'>TRAVEL</span></h3>
                <li className="h5 mt-3">
                  <span className="cu me-3">
                    <BsFillCheckSquareFill />
                  </span>
                  <span className='cu'>Lock:</span> By locking your coin, it makes it possible to give you super high APY while fulfilling your dream by making you travel to your favourite destination.
                </li>
                <li className="h5 mt-3">
                  <span className="cu me-3">
                    <BsFillCheckSquareFill />
                  </span>
                  <span className='cu'>Earn:</span> You will earn 2.1% per day interest, making possible to double your investment every month, and compounding $100 into $213,139 within 12 months.
                </li>
                <li className="h5 mt-3">
                  <span className="cu me-3">
                    <BsFillCheckSquareFill />
                  </span>
                  <span className='cu'> Travel:</span> Use our amazing NFTs to explore this beautiful world. Use your locked money each day to fulfil your desires.
                </li>
              </ul>
            </div>
          </div>

          <div className="d-flex justify-content-center mt-4">
            <a href="#" className="btn-item">
              <span className="me-2">
                <BsFillArrowRightCircleFill />
              </span>
              Click Here to Buy Travelerse
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Freedom;