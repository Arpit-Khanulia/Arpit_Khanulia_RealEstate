import { FunctionComponent } from "react";
import "./TopNavBar.css";
import { Link } from "react-router-dom";

import { useAppSelector } from "../Redux/Hooks";

const TopNavBar: FunctionComponent = () => {

  const handleLogout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('accessToken');
    window.location.reload();
  }

  const data = useAppSelector(state=>state.saveUserAndToken.accessToken)

  console.log('access token data',data);
  
  

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
         
        </div>
      </div>
      <div className="about-us-frame">
        { data &&

        <div className="blog-article-frame">
          <Link to='/'><button className="btn">
            <div className="home">Home</div>
          </button></Link>
          
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
        }
      </div>

        { data && <button onClick={handleLogout} className="login-wrapper">Log Out</button>}
        { !data && <Link to='/login' className="login"><button className="login-wrapper">Login</button></Link>}
        { !data && <Link to='/register' className="login"><button className="login-wrapper">Register</button></Link>}

  
      
      
    </header>
  );
};

export default TopNavBar;
