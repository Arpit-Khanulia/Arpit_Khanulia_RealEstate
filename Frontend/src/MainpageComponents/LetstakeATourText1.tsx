import { FunctionComponent } from "react";
import FrameComponent1 from "./FrameComponent1";
import "./LetstakeATourText1.css";

const LetstakeATourText1: FunctionComponent = () => {
  return (
    <div className="letstake-a-tour-text1">
      <div className="frame-parent1">
        <div className="frame-parent2">
          <button className="for-sell-wrapper">
            <div className="for-sell">For Sell</div>
          </button>
          <img className="frame-child" alt="" src="/group-7111@2x.png" />
        </div>
        <div className="frame-parent3">
          <img className="frame-item" alt="" src="/frame-7162.svg" />
          <input className="group-input" type="checkbox" />
        </div>
      </div>
      <div className="brand-new-appartments-wrapper">
        <div className="brand-new-appartments">Brand New Appartments</div>
      </div>
      <div className="letstake-a-tour-text-child">
        <div className="vector-parent1">
          <img className="vector-icon6" alt="" src="/vector-4.svg" />
          <div className="div">13,000,00</div>
        </div>
      </div>
      <FrameComponent1 beds="3 Beds" baths="1 Baths" sqFt="1200 Sq Ft" />
    </div>
  );
};

export default LetstakeATourText1;
