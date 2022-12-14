import React from "react";
import "./Toke.css";
import { FaMoneyCheckAlt, FaMoneyCheck } from 'react-icons/fa';
import { GiPayMoney } from 'react-icons/gi';
import { BsUmbrellaFill, BsBank2, BsShieldShaded, BsFillArrowRightCircleFill } from 'react-icons/bs';

function Toke ()
{
  return (
    <>
      <section className="toke-container container-fluid py-5">
        <h1 className="h1 text-center fw-bold text-white">Tokenomics</h1>
        <div className="toke-content-div d-flex flex-column">

          <div className="row d-flex flex-row justify-content-center">
            <div className="col-3 d-flex justify-content-end">
              <i className="toke-icon cu"><FaMoneyCheckAlt /></i>
            </div>
            <div className="col-3 d-flex justify-content-center"></div>
            <div className="col-3">
              <i className="toke-icon cu"><FaMoneyCheck /></i>
            </div>
          </div>

          <div className="row d-flex flex-row justify-content-center mt-4">
            <div className="col-3 toke-text d-flex justify-content-end text-white text-end">
              Buy<br />
              10% tax (12% slippage)
            </div>
            <div className="col-3 d-flex justify-content-center"></div>
            <div className="col-3 toke-text text-white">
              Sell<br />
              20% tax (22% slippage)
            </div>
          </div>

          <div className="row d-flex flex-md-row flex-column justify-content-center mt-4">
            <div className="col-md-3 col-12 d-flex justify-content-center d-md-none"><i className="cu fs-1"><GiPayMoney /></i></div>
            <div className="col-md-3 col-12 toke-text  text-white text-md-end text-center">
              <span className="h5 text-info d-md-none">Buy</span><br />
              Automatic LP<br />
              2% of order fee return to liquidity
            </div>
            <div className="col-md-3 col-12 d-md-flex justify-content-center d-none"><i className="cu fs-1"><GiPayMoney /></i></div>
            <div className="col-md-3 col-12 toke-text text-white text-md-start text-center">
              <span className="h5 text-danger d-md-none">sell</span><br />
              Automatic LP<br />
              2% of order fee return to liquidity
            </div>
          </div>


          <div className="row d-flex flex-md-row flex-column justify-content-center mt-4">
            <div className="col-md-3 col-12 d-flex justify-content-center d-md-none"><i className="cu fs-1"><BsUmbrellaFill /></i></div>
            <div className="col-md-3 col-12 toke-text  text-white text-md-end text-center">
              <span className="h5 text-info d-md-none">Buy</span><br />
              TIF<br />
              3% of order fees are stored in the TIF
            </div>
            <div className="col-md-3 col-12 d-md-flex justify-content-center d-none"><i className="cu fs-1"><BsUmbrellaFill /></i></div>
            <div className="col-md-3 col-12 toke-text text-white text-md-start text-center">
              <span className="h5 text-danger d-md-none">sell</span><br />
              TIF<br />
              8% of order fees are stored in the TIF
            </div>
          </div>



          <div className="row d-flex flex-md-row flex-column justify-content-center mt-4">
            <div className="col-md-3 col-12 d-flex justify-content-center d-md-none"><i className="cu fs-1"><BsBank2 /></i></div>
            <div className="col-md-3 col-12 toke-text  text-white text-md-end text-center">
              <span className="h5 text-info d-md-none">Buy</span><br />
              Treasury<br />
              5% of order fees go to the Treasury
            </div>
            <div className="col-md-3 col-12 d-md-flex justify-content-center d-none"><i className="cu fs-1"><BsBank2 /></i></div>
            <div className="col-md-3 col-12 toke-text text-white text-md-start text-center">
              <span className="h5 text-danger d-md-none">sell</span><br />
              Treasury<br />
              10% of order fees go to the Treasury
            </div>
          </div>


          <div className="row d-flex flex-md-row flex-column justify-content-center mt-4">
            <div className="col-md-3 col-12 d-flex justify-content-center d-md-none"><i className="cu fs-1"><BsShieldShaded /></i></div>
            <div className="col-md-3 col-12 toke-text  text-white text-md-end text-center">
              
            </div>
            <div className="col-md-3 col-12 d-md-flex justify-content-center d-none"><i className="cu fs-1"><BsShieldShaded /></i></div>
            <div className="col-md-3 col-12 toke-text text-white text-md-start text-center">
              <span className="h5 text-danger d-md-none">sell</span><br />
              $TRAVELERSE Max Withdrawal Limit is Currently{" "}
              <span className="cu">3% of Your Total Tokens</span> Every 24-Hours
            </div>
          </div>

          <div className="d-flex justify-content-center mt-5">
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

export default Toke;
