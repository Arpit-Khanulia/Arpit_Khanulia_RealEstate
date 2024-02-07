import { FunctionComponent } from "react";
import "./TopNavBar.css";
import { Link } from "react-router-dom";

const TopNavBar: FunctionComponent = () => {
  return (
    <header className="top-nav-bar">
      <div className="agent-frame">
        <img className="tour-frame-icon" alt="" src="/tour-frame.svg" />
      </div>
      <div className="search-bar">
        <h3 className="easy-housing">Easy Housing</h3>
      </div>
      <div className="maria-profile">
        <div className="link-group">
          <button className="btn">
            <div className="home">Home</div>
          </button>
          <div className="quick-links" />
        </div>
      </div>
      <div className="about-us-frame">
        <div className="blog-article-frame">
          <button className="btn">
            <div className="about">Profile</div>
          </button>

          <button className="btn">
            <div className="about">Property</div>
          </button>

          <button className="btn">
            <div className="about">My Property</div>
          </button>


        </div>
      </div>
      
        <Link to='/login' className="login"><button className="login-wrapper">Login</button></Link>
        <Link to='/register' className="login"><button className="login-wrapper">Register</button></Link>
      
    </header>
  );
};

export default TopNavBar;
