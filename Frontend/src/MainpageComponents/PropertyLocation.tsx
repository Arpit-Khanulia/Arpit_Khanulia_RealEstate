import { FunctionComponent, useMemo, type CSSProperties } from "react";
import "./PropertyLocation.css";

type PropertyLocationType = {
  propertyDescription?: string;
  jennyWhite?: string;

  propHeight?: CSSProperties["height"];
};

const PropertyLocation: FunctionComponent<PropertyLocationType> = ({
  propertyDescription,
  jennyWhite,
  propHeight,
}) => {
  const jennyWhiteStyle: CSSProperties = useMemo(() => {
    return {
      height: propHeight,
    };
  }, [propHeight]);

  return (
    <div className="property-location">
      <div className="wrapper-property-description">
        <img
          className="property-description-icon"
          loading="eager"
          alt=""
          src={propertyDescription}
        />
      </div>
      <div className="property-price">
        <div className="property-button">
          <div className="footer-link">
            <h3 className="jenny-white" style={jennyWhiteStyle}>
              {jennyWhite}
            </h3>
            <div className="sunshine">Sunshine</div>
          </div>
          <div className="contact-container">
            <img className="header-group-icon" alt="" src="/vector-34.svg" />
            <input
              className="call-9635872558"
              placeholder="Call : 9635872558"
              type="text"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyLocation;
