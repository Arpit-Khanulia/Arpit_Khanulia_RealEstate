import { FunctionComponent } from "react";
import PropertyLocation from "./PropertyLocation";
import "./PropertyContainer.css";

const PropertyContainer: FunctionComponent = () => {
  return (
    <section className="property-container">
      <div className="property-title">
        <div className="text-wrapper">
          <div className="text">
            <div className="expertise-is-here">Expertise Is Here</div>
            <h1 className="our-exclusive-agents">Our Exclusive Agents</h1>
          </div>
        </div>
        <div className="property-image">
          <PropertyLocation
            propertyDescription="/ellipse-81@2x.png"
            jennyWhite="Jenny White"
          />
          <div className="vector1">
            <div className="wrapper-ellipse-81">
              <img
                className="wrapper-ellipse-81-child"
                alt=""
                src="/ellipse-81-1@2x.png"
              />
            </div>
            <div className="vector-inner">
              <div className="frame-parent7">
                <div className="frame-parent8">
                  <div className="john-white-wrapper">
                    <h3 className="john-white">John White</h3>
                  </div>
                  <div className="sunshine1">Sunshine</div>
                </div>
                <div className="text-parent">
                  <img className="text-icon" alt="" src="/vector-34.svg" />
                  <input
                    className="call-96358725581"
                    placeholder="Call : 9635872558"
                    type="text"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="property-image1">
          <PropertyLocation
            propertyDescription="/ellipse-81-2@2x.png"
            jennyWhite="Merry Rose"
            propHeight="30px"
          />
          <PropertyLocation
            propertyDescription="/ellipse-81-3@2x.png"
            jennyWhite="Alex Roy"
            propHeight="30px"
          />
        </div>
      </div>
    </section>
  );
};

export default PropertyContainer;
