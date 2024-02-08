import { FunctionComponent, useMemo, type CSSProperties } from "react";
import "./Card.css";

type LetstakeATourText2Type = {
  type?: string;
  price?: string;
  Description?: string;
  location?:string;

  /** Style props */
  propBackgroundImage?: CSSProperties["backgroundImage"];
  propHeight?: CSSProperties["height"];
};

const LetstakeATourText2: FunctionComponent<LetstakeATourText2Type> = ({
  type,
  location,
  price,
  Description,
  propBackgroundImage,
  propHeight,
}) => {
  const searchPropertySmartQuickerStyle: CSSProperties = useMemo(() => {
    return {
      backgroundImage: propBackgroundImage,
    };
  }, [propBackgroundImage]);

  const tribbleStoryHouseStyle: CSSProperties = useMemo(() => {
    return {
      height: propHeight,
    };
  }, [propHeight]);

  return (
    <div className="letstake-a-tour-text">
      <div
        className="search-property-smart-quicker"
        style={searchPropertySmartQuickerStyle}
      >
        <div className="vector">
          <button className="for-rent-wrapper">
            <div className="for-rent">For Rent</div>
          </button>
          <img
            className="vector-child"
            loading="eager"
            alt=""
            src="/group-7111@2x.png"
          />
        </div>
        <div className="property-list">
          <img
            className="quick-links-icon"
            loading="eager"
            alt=""
            src="/frame-7162.svg"
          />
          <img
            className="property-list-child"
            loading="eager"
            alt=""
            src="/group-7112@2x.png"
          />
        </div>
      </div>
      <div className="footer">
        <div className="tribble-story-house" style={tribbleStoryHouseStyle}>
          {type}
        </div>
      </div>
      <div className="maria-header">
        <div className="content-frame1">
          <img className="search-bar-icon" alt="" src="/vector-4.svg" />
          <div className="mo">
            <span>{price}</span>
            <span className="mo1">Mo</span>
          </div>
        </div>
      </div>
      <div className="about-us-links">
        <div className="blog-article">
          <div className="terms-conditions">
            <img className="privacy-policy-icon" alt="" src="/vector-5.svg" />
            <div className="maharashtra">{location}</div>
          </div>
          <div className="subscribe-area">
            <div className="newsletter-input">
              <p>Discription: </p>
              <div className="beds">{Description}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LetstakeATourText2;
