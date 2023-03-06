

import React from "react";
import './Booked.css'
 
const Popup = props => {
  return (
    <div className="popup-box1">
      <div className="box1">
      {/* <img  src="https://starclinch.com/static/images/home/StarClinch-Logo-new.svg"></img> */}
        {/* <h3>Booking Confirmation Details</h3> */}
        <span className="close-icon" onClick={props.handleClose}>x</span>
        {props.content}
        {/* <h4>**Congratulations your booking has been confirmed**</h4> */}
        {/* <h5>PLEASE TAKE SCREEN SHOT OF THIS BOOKING CONFIRMATION</h5> */}
      </div>
    </div>
  );
};
 
export default Popup;