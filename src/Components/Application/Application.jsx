import React from "react";
import './Application.css'
import { Link } from "react-router-dom";

const Application=()=>{
    return(
        <>
        <div className="container-3">
            <div className="Application-container">
                <h1 className="Application-h1">Application Fee</h1>
                <p className="Appplication-p">Payment is due 3 days prior to the start of the class</p>
                <div className="line-3"></div>
            <div className="payment-method">
                <h3>Payment Method</h3>
                <div className="payment-options">
                <label>
                    <input type="checkbox"/>
                    Credit Card
                </label>
                <label>
                    <input type="checkbox"/>
                    Mail a Check
                </label>
                <label>
                    <input type="checkbox"/>
                    in-person at school
                </label>
              </div>
              </div>
              <div className="line-4"></div>
              <div className="Application-btn">
              <Link to="/Education" className="education-btn1">
              Back
              </Link>
              <button className="Application-btn2">Submit Form</button>
              </div>
            </div>
        </div>
        </>
    )
}

export default Application;