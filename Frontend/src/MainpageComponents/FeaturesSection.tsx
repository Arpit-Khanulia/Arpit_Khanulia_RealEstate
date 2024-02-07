import { FunctionComponent } from "react";
import LogoContainer from "./LogoContainer";
import "./FeaturesSection.css";

const BathroomsIcon: FunctionComponent = () => {
  return (
    <section className="bathrooms-icon">
      <div className="area-unit-label">
        <div className="area-value-text">
          <div className="our-features">Our Features</div>
          <h1 className="why-choose-us">Why Choose Us ?</h1>
        </div>
        <div className="subheader-text">
          <LogoContainer
            group7114="/group-7114.svg"
            trustedByThousands="Trusted By Thousands"
          />
          <LogoContainer
            group7114="/group.svg"
            trustedByThousands="Wide Range Of Properties"
            propLeft="21px"
            propWidth="69.6px"
            propHeight="unset"
          />
          <div className="logo-container1">
            <button className="logo-container-inner">
              <div className="ellipse-parent">
                <div className="ellipse-div" />
                <img className="frame-child2" alt="" src="/group-7115.svg" />
              </div>
            </button>
            <div className="finance-made-easy-parent">
              <div className="finance-made-easy">Finance Made Easy</div>
              <div className="lorem-ipsum-dolor2">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque `}</div>
            </div>
          </div>
          <LogoContainer
            group7114="/group-7116.svg"
            trustedByThousands="Life Time Assistance"
            propLeft="21px"
            propWidth="70px"
            propHeight="22px"
          />
        </div>
      </div>
    </section>
  );
};

export default BathroomsIcon;
