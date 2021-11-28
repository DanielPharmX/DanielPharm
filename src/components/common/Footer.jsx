import * as Route from 'constants/routes';
import logo from 'images/logo-full.png';
import logo1 from 'images/logo_1.png'
import React from 'react';
import { useLocation } from 'react-router-dom';
if (window.screen.width <= 800){
  var margin='-80%'
}else{
  var margin=''
}
const Footer = () => {
  const { pathname } = useLocation();

  const visibleOnlyPath = [
    Route.HOME,
    Route.SHOP
  ];

  return !visibleOnlyPath.includes(pathname) ? null : (
    <footer className="footer">
      <div className="footer-col-1">
        
      </div>
      <div className="footer-col-2">
        <img alt="Footer logo" className="footer-logo" src={logo} style={{marginTop:margin}} />
        <h4> Copyright
          &copy;&nbsp;
          {new Date().getFullYear()}
          &nbsp;medix101pharmacy.com
        </h4>
      </div>
      <div className="footer-col-3" >
        {/*<strong>
        <h4 style={{marginRight:"15%"}}>Secured By:</h4>
        <img alt="Footer logo" src={logo1} style={{width:'15%', marginRight:'12%', marginTop:'-20px'}} />
        </strong>*/}
      </div>
    </footer>
  );
};

export default Footer;
