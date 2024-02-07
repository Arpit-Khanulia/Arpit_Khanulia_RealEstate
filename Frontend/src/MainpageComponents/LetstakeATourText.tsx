import { FunctionComponent } from "react";
import FrameComponent1 from "./FrameComponent1";
import "./LetstakeATourText.css";

const LetstakeATourText: FunctionComponent = () => {
  return (
    <div className="letstake-a-tour-text2">
      <div className="frame-parent4">
        <div className="frame-parent5">
          <button className="for-sell-container">
            <div className="for-sell1">For Sell</div>
          </button>
          <img className="frame-inner" alt="" src="/group-7111@2x.png" />
        </div>
        <div className="frame-parent6">
          <img className="frame-child1" alt="" src="/frame-7162.svg" />
          <img className="group-icon" alt="" src="/group-7112@2x.png" />
        </div>
      </div>
      <div className="affordable-green-villa-house-wrapper">
        <div className="affordable-green-villa">
          Affordable Green Villa House
        </div>
      </div>
      <div className="letstake-a-tour-text-inner1">
        <div className="vector-parent2">
          <img className="vector-icon7" alt="" src="/vector-4.svg" />
          <div className="div1">30,000,00</div>
        </div>
      </div>
      <FrameComponent1 beds="4 Beds" baths="2 Baths" sqFt="3000 Sq Ft" />
    </div>
  );
};

export default LetstakeATourText;
