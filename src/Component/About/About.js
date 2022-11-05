import React from "react";
import "./About.css";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
function About ()
{
  return (
    <>
      <div className="about-container container-fluid py-5">
        <h1 className="about-h1 h1 fw-bold text-center">
          The Greatest Auto-Staking Protocol with an ACM that <br /> keeps Your
          Investment Secured!
        </h1>

        <h1 className="about-h1-number h1 fw-bold text-center my-4">
          213,139.27%
        </h1>

        <h1 className="about-h1 h1 fw-bold text-center">
          Fixed Annual Percentage Yield
        </h1>
        <div className="about-content-div px-sm-5 px-1 py-4">
          <div className="row">
            <div className="col-md-8 col-12">
              <h1 className="about-h1 h1 fw-bold text-left">About</h1>
              <p className="h6 lh-base mt-4">
                Financial freedom is everyone’s dream these days, We at
                TRAVELERSE not only allow you to achieve this dream but also
                help you in traveling and exploring this beautiful world of ours{" "}
                <span className="about-span text-decoration-underline">
                  - The Garden of Eden.
                </span>{" "}
                The law of compounding will get you there. You can easily double
                your investment every 40 DAYS with our amazing 106.7% interest.{" "}
                <span className="about-span">
                  Which possibly allows you to turn $100 into $213,139 dollars
                  within just 12 months.
                </span>
                <br />
                <br />
                Travelerse is the first crypto token that was built with an ACM
                that protects you from the unnecessary dumps that plague
                small-cap projects while giving you a super-high and sustainable
                daily compounding interest rate of{" "}
                <span className="about-span">2.1%</span>.
                <br />
                <br />
                Travelerse also provides you with great{" "}
                <span className="about-span">NFTs</span> that allow you to take
                part in our travel universe where we provide you with unique
                benefits to travel the world.
              </p>
            </div>
            <div className="col-md-4 col-12">
              <h1 className="about-h1 h2 fw-bold text-left">
                Start investment: $100
              </h1>
              <ul className="mt-4">
                <li className="h6">
                  <BsFillArrowRightCircleFill className="me-2 cu" />
                  Month 1: $190
                </li>
                <li className="h6">
                  <BsFillArrowRightCircleFill className="me-2 cu" />
                  Month 2: $350
                </li>
                <li className="h6">
                  <BsFillArrowRightCircleFill className="me-2 cu" />
                  Month 3: $680
                </li>
                <li className="h6">
                  <BsFillArrowRightCircleFill className="me-2 cu" />
                  Month 4: $1500
                </li>
                <li className="h6">
                  <BsFillArrowRightCircleFill className="me-2 cu" />
                  Month 5: $2960
                </li>
                <li className="h6">
                  <BsFillArrowRightCircleFill className="me-2 cu" />
                  Month 6: $5700
                </li>
                <li className="h6">
                  <BsFillArrowRightCircleFill className="me-2 cu" />
                  Month 7: $11100
                </li>
                <li className="h6">
                  <BsFillArrowRightCircleFill className="me-2 cu" />
                  Month 8: $22,900
                </li>
                <li className="h6">
                  <BsFillArrowRightCircleFill className="me-2 cu" />
                  Month 9: $40,900
                </li>
                <li className="h6">
                  <BsFillArrowRightCircleFill className="me-2 cu" />
                  Month 10: $75,000
                </li>
                <li className="h6">
                  <BsFillArrowRightCircleFill className="me-2 cu" />
                  Month 11: $110,000
                </li>
                <li className="h6">
                  <BsFillArrowRightCircleFill className="me-2 cu" />
                  Month 12: $213,139
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="about-content-div-1">
          <h3 className="h3 text-center">
            $TRAVELERSE Has The <br />
            <span className="cu">Best Anti-Crash Mechanism</span> In the World
          </h3>
          <p className="h6 py-3 mx-auto text-center about-p-1">
            When whales dump huge amounts of coins, your investment rapidly
            crashes down, but with Travelerse, we’ve finally solved this
            problem. Travelerse is different than every other crypto token
            because of our Limited Sell Mechanism.
            <br /> We are creating a universe where everyone can win and use the
            winnings to explore this beautiful world.
          </p>
          <div className="d-flex justify-content-center mt-4">
            <a href="#" className="btn-item">
              <span>
                <BsFillArrowRightCircleFill className="me-2" />
              </span>
              Click to Buy Travelerse
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
