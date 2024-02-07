import { FunctionComponent } from "react";
import "./PropertyType.css";

const PropertyType: FunctionComponent = () => {
  return (
    <section className="property-type1">
      <div className="sorting-options">
        <div className="locations">Locations</div>
        <h1 className="find-property-by">Find Property By City</h1>
      </div>
      <div className="results-container">
        <div className="result-item-card">
          <button className="thumbnail-image">
            <b className="mumbai">Mumbai</b>
          </button>
        </div>
        <img
          className="location-text-icon1"
          loading="eager"
          alt=""
          src="/frame-7165@2x.png"
        />
      </div>
      <div className="price-label">
        <img
          className="bedrooms-icon"
          loading="eager"
          alt=""
          src="/frame-7166@2x.png"
        />
        <img
          className="bedrooms-icon1"
          loading="eager"
          alt=""
          src="/frame-7167@2x.png"
        />
        <img
          className="bedrooms-icon2"
          loading="eager"
          alt=""
          src="/frame-7168@2x.png"
        />
      </div>
    </section>
  );
};

export default PropertyType;
