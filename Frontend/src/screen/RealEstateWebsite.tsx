import { FunctionComponent } from "react";
import ContentFrame from "../MainpageComponents/ContentFrame";
import LetstakeATourText2 from "../MainpageComponents/Card";
import LetstakeATourText1 from "../MainpageComponents/LetstakeATourText1";
import LetstakeATourText from "../MainpageComponents/LetstakeATourText";
import PropertyType from "../MainpageComponents/PropertyType";
import BathroomsIcon from "../MainpageComponents/FeaturesSection";
import PropertyContainer from "../MainpageComponents/PropertyContainer";
import FrameComponent from "../MainpageComponents/FrameComponent";
import LinksFrame from "../MainpageComponents/LinksFrame";
import "./RealEstateWebsite.css";

const RealEstateWebsite: FunctionComponent = () => {
  return (
    <div className="real-estate-website">
      <ContentFrame />
      <section className="maria-crist-text">
        <div className="group">
          <div className="our-properties">Our Properties</div>
          <h1 className="our-featured-properties">Our Featured Properties</h1>
        </div>
        <div className="our-agents-text">
          {/* <LetstakeATourText2
            tribbleStoryHouseForRent="Tribble Story House For Rent"
            prop="13,000/"
            beds="3 Beds"
            baths="2 Baths"
            sqFt="1500 Sq Ft"
          /> */}
          {/* <LetstakeATourText1 /> */}
          <LetstakeATourText2
            tribbleStoryHouseForRent="Luxurious Villa"
            prop="35,000/"
            beds="5 Beds"
            baths="3 Baths"
            sqFt="3500 Sq Ft"
            propBackgroundImage="url('/frame-71591@3x.png')"
            propHeight="25px"
          />
          <LetstakeATourText2
            tribbleStoryHouseForRent="Diamond Manco Apartment"
            prop="10,000/"
            beds="2 Beds"
            baths="2 Baths"
            sqFt="1000 Sq Ft"
            propBackgroundImage="url('/frame-71592@3x.png')"
            propHeight="unset"
          />
          {/* <LetstakeATourText /> */}
          <LetstakeATourText2
            tribbleStoryHouseForRent="Spaceious 2 Story Bunglow "
            prop="35,000/"
            beds="5 Beds"
            baths="3 Baths"
            sqFt="2500 Sq Ft"
            propBackgroundImage="url('/frame-71594@3x.png')"
            propHeight="unset"
          />
          <LetstakeATourText2
            tribbleStoryHouseForRent="Spaceious 2 Story Bunglow "
            prop="35,000/"
            beds="5 Beds"
            baths="3 Baths"
            sqFt="2500 Sq Ft"
            propBackgroundImage="url('/frame-71594@3x.png')"
            propHeight="unset"
          />
          <LetstakeATourText2
            tribbleStoryHouseForRent="Spaceious 2 Story Bunglow "
            prop="35,000/"
            beds="5 Beds"
            baths="3 Baths"
            sqFt="2500 Sq Ft"
            propBackgroundImage="url('/frame-71594@3x.png')"
            propHeight="unset"
          />
          <LetstakeATourText2
            tribbleStoryHouseForRent="Spaceious 2 Story Bunglow "
            prop="35,000/"
            beds="5 Beds"
            baths="3 Baths"
            sqFt="2500 Sq Ft"
            propBackgroundImage="url('/frame-71594@3x.png')"
            propHeight="unset"
          />
        </div>
        <img className="maria-crist-text-child" alt="" src="/group-7113.svg" />
      </section>
      <PropertyType />
      <BathroomsIcon />
      <PropertyContainer />
      <FrameComponent />
      <section className="tour-frame">
        <div className="agent-profile-ellipse">
          <img
            className="agent-profile-ellipse-child"
            loading="eager"
            alt=""
            src="/ellipse-82@2x.png"
          />
          <h3 className="maria-crist">Maria Crist</h3>
        </div>
        <div className="contact-us-group">
          <img
            className="contact-us-group-child"
            alt=""
            src="/group-7111-6@2x.png"
          />
          <div className="frame-parent">
            <img className="frame-icon" alt="" src="/vector-39.svg" />
            <i className="lorem-ipsum-dolor-container">
              <p className="lorem-ipsum-dolor">
                {" "}
                “ Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque tempor erat nec urna congue dapibus.
              </p>
              <p className="etiam-sollicitudin-eget">
                {" "}
                Etiam sollicitudin eget massa nec fringilla. Phasellus varius
                quam id felis accumsan volutpat. “
              </p>
            </i>
          </div>
          <img
            className="contact-us-group-item"
            loading="eager"
            alt=""
            src="/group-7121@2x.png"
          />
        </div>
      </section>
      <section className="home-find-frame">
        <h1 className="find-your-dream">Find Your Dream Home Today</h1>
        <button className="contact-us-text-frame">
          <div className="contact-us">Contact Us</div>
        </button>
      </section>
      <LinksFrame />
    </div>
  );
};

export default RealEstateWebsite;