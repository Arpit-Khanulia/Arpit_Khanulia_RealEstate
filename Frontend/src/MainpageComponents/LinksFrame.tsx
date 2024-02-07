import { FunctionComponent } from "react";
import "./LinksFrame.css";

const LinksFrame: FunctionComponent = () => {
  return (
    <footer className="links-frame">
      <div className="about-us-link-group">
        <div className="quick-links-container">
          <img className="vector-icon9" alt="" src="/vector-40.svg" />
          <h3 className="easy-housing1">Easy Housing</h3>
        </div>
        <div className="lorem-ipsum-dolor3">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam
        </div>
        <div className="frame-parent9">
          <img
            className="frame-child3"
            loading="eager"
            alt=""
            src="/frame-7180.svg"
          />
          <img
            className="frame-child4"
            loading="eager"
            alt=""
            src="/frame-7181.svg"
          />
          <img
            className="frame-child5"
            loading="eager"
            alt=""
            src="/frame-7182.svg"
          />
          <img
            className="frame-child6"
            loading="eager"
            alt=""
            src="/frame-7184.svg"
          />
          <img
            className="frame-child7"
            loading="eager"
            alt=""
            src="/frame-7183.svg"
          />
        </div>
      </div>
      <div className="footer-frame">
        <div className="about-us-blogs-article-terms-c-parent">
          <div className="about-us-blogs-article-terms-c">
            <div className="quick-links-parent">
              <b className="quick-links1">Quick Links</b>
              <div className="line-div" />
            </div>
          </div>
          <div className="frame-parent10">
            <div className="about-us-blogs-article-parent">
              <div className="about-us-blogs-article" />
              <div className="about-us">About Us</div>
            </div>
            <div className="ellipse-group">
              <div className="frame-child8" />
              <div className="blogs-article">{`Blogs & Article`}</div>
            </div>
            <div className="ellipse-container">
              <div className="frame-child9" />
              <div className="terms-and-condition">Terms And Condition</div>
            </div>
            <div className="ellipse-parent1">
              <div className="frame-child10" />
              <div className="privacy-policy">Privacy Policy</div>
            </div>
            <div className="ellipse-parent2">
              <div className="frame-child11" />
              <div className="contact-us2">Contact Us</div>
            </div>
          </div>
        </div>
      </div>
      <div className="contact-us-frame">
        <div className="newsletter-subscription-frame">
          <div className="news-letter-parent">
            <b className="news-letter">News Letter</b>
            <div className="frame-child12" />
          </div>
          <div className="contact-info">
            <input
              className="frame-parent11"
              placeholder="Entar Email Address"
              type="text"
            />
            <div className="button">
              <button className="subscribe-wrapper">
                <div className="subscribe">Subscribe</div>
              </button>
              <div className="we-never-span">We never span you!</div>
            </div>
          </div>
        </div>
      </div>
      <div className="frame-parent-wrapper">
        <div className="frame-parent12">
          <div className="text1">
            <b className="contact">Contact</b>
            <div className="text2" />
          </div>
          <div className="text3">
            <div className="vector2">
              <img className="vector-icon10" alt="" src="/vector-41.svg" />
              <div className="vector3">
                <img className="frame-icon1" alt="" src="/vector-42.svg" />
                <img className="frame-icon2" alt="" src="/vector-43.svg" />
              </div>
            </div>
            <div className="text4">
              <div className="text5">
                <div className="king-st-melbourne">
                  121 King St, Melbourne den 3000, Australia
                </div>
                <div className="infoexamplecom">Info@example.com</div>
              </div>
              <div className="contact-info1">+91 999999999</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default LinksFrame;
