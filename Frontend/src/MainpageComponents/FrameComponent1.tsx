import { FunctionComponent } from "react";
import "./FrameComponent1.css";

type FrameComponent1Type = {
  beds?: string;
  baths?: string;
  sqFt?: string;
};

const FrameComponent1: FunctionComponent<FrameComponent1Type> = ({
  beds,
  baths,
  sqFt,
}) => {
  return (
    <div className="letstake-a-tour-text-inner">
      <div className="frame-group">
        <div className="vector-parent">
          <img className="vector-icon2" alt="" src="/vector-5.svg" />
          <div className="maharashtra1">Maharashtra</div>
        </div>
        <div className="frame-container">
          <div className="vector-group">
            <img className="vector-icon3" alt="" src="/vector-6.svg" />
            <div className="beds1">{beds}</div>
          </div>
          <div className="vector-container">
            <img className="vector-icon4" alt="" src="/vector-7.svg" />
            <div className="baths1">{baths}</div>
          </div>
          <div className="frame-div">
            <img className="vector-icon5" alt="" src="/vector-8.svg" />
            <div className="sq-ft1">{sqFt}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent1;
