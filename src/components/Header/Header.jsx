import React from "react";
import "./Header.styles.css";
const Header = () => {
  return (
    <div className="header_container">
      <div className="container">
        <div className="header_top">
          <div className="row">
            <div className="col-sm-12">
              <div className="custom_menu">
                <ul>
                  <li>
                    <a href="#">Best Sellers</a>
                  </li>
                  <li>
                    <a href="#">Gift Ideas</a>
                  </li>
                  <li>
                    <a href="#">New Releases</a>
                  </li>
                  <li>
                    <a href="#">Today's Deals</a>
                  </li>
                  <li>
                    <a href="#">Customer Service</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
