import { FunctionComponent } from "react";
import "./FrameComponent.css";

const FrameComponent: FunctionComponent = () => {
  return (
    <section className="ellipse-wrapper">
      <div className="ellipse">
        <div className="group-parent">
          <div className="group1">
            <div className="lets-take-a">Let’s Take A Tour</div>
            <h1 className="search-property-smarter-container">
              <p className="search-property-smarter">
                Search Property Smarter,
              </p>
              <p className="quicker-anywhere">{`Quicker & Anywhere`}</p>
            </h1>
          </div>
          <div className="frame-wrapper">
            <div className="vector-parent3">
              <img className="vector-icon8" alt="" src="/vector-38.svg" />
              <div className="play-video">Play video</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent;
