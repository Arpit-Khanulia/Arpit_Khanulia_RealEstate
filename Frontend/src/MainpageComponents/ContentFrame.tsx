import { FunctionComponent } from "react";
import TopNavBar from "./TopNavBar";
import "./ContentFrame.css";

const ContentFrame: FunctionComponent = () => {
  return (
    <section className="content-frame">
      <div className="top-nav-bar-parent">
        <TopNavBar />
        <div className="privacy-policy-frame">
          <h1 className="find-your-dream1">Find Your Dream Home</h1>
          <form className="email-subscription-frame">
            <h2 className="from-as-low">
              From as low as $10 per day with limited time offer discounts.
            </h2>
            <div className="search-area">
              <button className="header-frame">
                <div className="buy">Buy</div>
              </button>
              <button className="header-frame1">
                <div className="rent">Rent</div>
              </button>
              <button className="header-frame2">
                <div className="sell">Sell</div>
              </button>
            </div>
            <div className="title-text">
              <div className="nav-links-group">
                <div className="line">
                  <input
                    style={{ width: "100%" }}
                    className="entar-keyword"
                    placeholder="Location Pincode"
                    type="text"
                  />
                </div>

                  <select className="property-type btn line1" >Property Type
                    <option  >Type</option>
                    <option value="apartment">Apartment</option>
                    <option value="house">House</option>
                    <option value="flat">Flat</option>
                    <option value="villa">Villa</option>
                    <option value="land">Land</option>
                    <option value="office-space">Office Space</option>
                    <option value="basement">Basement</option>
                  </select>

                <button className="line3">
                  <div className="search">Search</div>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContentFrame;
