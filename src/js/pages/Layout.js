import React from "react";
import { Link } from "react-router";

import Footer from "../components/layout/Footer";
import Nav from "../components/layout/Nav";

import Display from "../../../src/Display";

export default class Layout extends React.Component {
  render() {
    const { location } = this.props;
    const containerStyle = {
      marginTop: "60px",
      backgroundImage: 'url("http://onehdwallpaper.com/wp-content/uploads/2015/07/Big-Ben-Beautifl-London-Wallpapers.jpg")',
      position:"absolute",
      WebkitBackgroundSize: 'cover', // note the capital 'W' here
      height:"100%",
      width:"100%",
    };

    return (
      <div>

        <Nav location={location} />

        <div class="container" style={containerStyle}>
          <div class="row">
            <div class="col-lg-12">

              {this.props.children}

            </div>
          </div>
          <Footer/>
        </div>
      </div>

    );
  }
}