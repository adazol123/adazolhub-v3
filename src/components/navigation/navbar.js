import React from 'react';
import { Theme } from '../util/Theme';
import Navlist from './navlist';

function Navbar() {
  return (
    <nav>
        <div className="nav">
            <h4 className='appname'><span>ADAZOL</span>HUB.</h4>
            <Navlist/>
            {/* <Theme style={{ marginLeft: '4em'}}/> */}
            <button className='solid'>
              Contact us
            </button>
        </div>
    </nav>
  )
}

export default Navbar;
