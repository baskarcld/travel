import React from "react";
import "./Home.css";
import { BsFillCheckCircleFill } from 'react-icons/bs'

function Home() {
  return (
    <>
      <section className="home-section container-fluid pb-5">
        <div className="py-4">
          <h4 className="h4 mt-5 text-white text-center">
            Finally, the World's most unique{" "}
            <span className="text-decoration-underline">
              Anti-Crash Mechanism
            </span>{" "}
            that protects your investment as you earn to travel the world.
          </h4>

          <h1 className="fs-1 my-md-5 my-3 text-center home-h2 fw-bold">
            The Best Utility Coin in the World with the real-
            <br />
            life NFT use-case- <br /> Without The probability of CrashWithout
            The probability of Crash
          </h1>
        </div>

        <div>
          <div className="row">
            <div className="col-lg-7 col-12 d-flex flex-lg-row flex-column justify-content-center">
              <ul className="home-ul">
                <li>
                  <span className="cu"><BsFillCheckCircleFill className="me-2 home-check-icon"/>Lock</span>: This is the new trend "Lock and
                  Earn to Travel" protocol
                </li>
                <li>
                  <span className="cu"><BsFillCheckCircleFill className="me-2 home-check-icon"/>Earn</span>: Super-high fixed interest of
                  2.1% per day
                </li>
                <li>
                  <span className="cu"><BsFillCheckCircleFill className="me-2 home-check-icon"/>Collect</span>: Get special edition NFTs with
                  exciting benefits
                </li>
                <li>
                  <span className="cu"><BsFillCheckCircleFill className="me-2 home-check-icon"/>Travel</span>: Explore the world at your own
                  leisure with no care for money
                </li>
                <li>
                  <span className="cu"><BsFillCheckCircleFill className="me-2 home-check-icon"/>Double Your Investment</span>{" "}
                  <span className="cu text-decoration-underline">Every 40-Days</span>
                </li>
                <li>
                  <span><BsFillCheckCircleFill className="me-2 cu home-check-icon"/></span>Provides the best security, with great utility resulting in
                  the healthiest chart in the market
                </li>
              </ul>
            </div>
            <div className="col-lg-5 col-12">
              <div className="home-img-div">
                <img src="./images/new/home-img-1.jpg" alt="img" srcset="" className="home-img" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
