import React from 'react';
import headerImage from '../../assets/Saly-13.png';
import behanceIcom from '../../assets/Behance.svg';
import facebookIcon from '../../assets/Facebook.svg';
import twitterIcon from '../../assets/Twitter.svg';
import dribbbleIcon from '../../assets/Dribbble.svg';
function Header() {
  return <section >
      <div className="container home">
            <img src={headerImage} alt={headerImage} />
            <div className="header">
                <h1><span>EXPERIENCE</span> MATTER</h1>
                <p>Your success is our objective. We’ll care for your brand, product and services as much as you do.</p>
            </div>
      </div>
      <div className="social">
          <div className="option">
                <img src={behanceIcom} alt={behanceIcom} />
                <p>Behance</p>
          </div>
          <div className="option">
                <img src={facebookIcon} alt={facebookIcon} />
                <p>Facebook</p>
          </div>
          <div className="option">
               
                <img src={twitterIcon} alt={twitterIcon} />
                <p>Twitter</p>
          </div>
          <div className="option">
                <img src={dribbbleIcon} alt={dribbbleIcon} />
                <p>Dribbble</p>
          </div>
      </div>

  </section>
}

export default Header;
