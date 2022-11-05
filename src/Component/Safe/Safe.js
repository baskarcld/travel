import React from "react";
import "./Safe.css";
import
{
  BsFillBookmarkCheckFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";

function Safe ()
{
  return (
    <>
      <section className="safe-container container-fluid py-5">
        <h1 className="h1 text-center fw-bold">
          How The World's Best ACM Keeps Your Investment Safe!
        </h1>
        <div className="safe-img-div mx-auto">
          <img src="images\limit 22-01.png" alt="img" className="safe-img" />
        </div>

        <div className="safe-content-div">
          <div className="row">
            <div className="col-lg-5 col-12">
              <div className="safe-img-div-1">
                <img
                  src="images\graph-bounce-3.png"
                  alt="img"
                  className="safe-img-1 img-fluid "
                />
              </div>
            </div>

            <div className="col-lg-7 col-12">
              <ul>
                <li className="h5 mt-3">
                  <span className="cu me-3">
                    <BsFillBookmarkCheckFill />
                  </span>
                  Join Travelerse now to earn our great NFTs.
                </li>
                <li className="h5 mt-3">
                  <span className="cu me-3">
                    <BsFillBookmarkCheckFill />
                  </span>
                  Impossibility of extreme dump with Travelerse, because of our
                  ACM.
                </li>
                <li className="h5 mt-3">
                  <span className="cu me-3">
                    <BsFillBookmarkCheckFill />
                  </span>
                  Unlike other crypto there is a 3-7% cash out limit per day of
                  your total tokens safeguarding your hard earned money.
                </li>
                <li className="h5 mt-3">
                  <span className="cu me-3">
                    <BsFillBookmarkCheckFill />
                  </span>
                  The Anti-Crash Mechanism works based on the current metrics of
                  the chart to determine the daily withdrawal limit.
                </li>
                <li className="h5 mt-3">
                  <span className="cu me-3">
                    <BsFillBookmarkCheckFill />
                  </span>
                  You as a small investor would achieve financial freedom,
                  faster!
                </li>
              </ul>
            </div>
          </div>

          <div className="d-flex justify-content-center mt-4">
            <a href="#" className="btn-item">
              <span className="me-2">
                <BsFillArrowRightCircleFill />
              </span>
              Join Our Telegram Community
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Safe;
