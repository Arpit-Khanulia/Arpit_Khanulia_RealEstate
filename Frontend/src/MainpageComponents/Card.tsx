import { FunctionComponent, useMemo, type CSSProperties } from "react";
import "./LetstakeATourText2.css";

type LetstakeATourText2Type = {
  tribbleStoryHouseForRent?: string;
  prop?: string;
  beds?: string;
  baths?: string;
  sqFt?: string;

  /** Style props */
  propBackgroundImage?: CSSProperties["backgroundImage"];
  propHeight?: CSSProperties["height"];
};

const LetstakeATourText2: FunctionComponent<LetstakeATourText2Type> = ({
  tribbleStoryHouseForRent,
  prop,
  beds,
  baths,
  sqFt,
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
          {tribbleStoryHouseForRent}
        </div>
      </div>
      <div className="maria-header">
        <div className="content-frame1">
          <img className="search-bar-icon" alt="" src="/vector-4.svg" />
          <div className="mo">
            <span>{prop}</span>
            <span className="mo1">Mo</span>
          </div>
        </div>
      </div>
      <div className="about-us-links">
        <div className="blog-article">
          <div className="terms-conditions">
            <img className="privacy-policy-icon" alt="" src="/vector-5.svg" />
            <div className="maharashtra">Maharashtra</div>
          </div>
          <div className="subscribe-area">
            <div className="newsletter-input">
              <img
                className="background-colors-icon"
                alt=""
                src="/vector-6.svg"
              />
              <div className="beds">{beds}</div>
            </div>
            <div className="footer-links">
              <img className="header-title-icon" alt="" src="/vector-7.svg" />
              <div className="baths">{baths}</div>
            </div>
            <div className="search-icon-button">
              <img className="location-text-icon" alt="" src="/vector-8.svg" />
              <div className="sq-ft">{sqFt}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LetstakeATourText2;
