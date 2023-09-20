import React from "react";
import './Error.css';
import Header from "../Header/Header";

function Error(){
    return(
        <div className="error-container">
            <Header isError={true} />
            <div className='err-404'>404</div>
            <div className="err-message">Error message</div>
            <a href="#" className="back-home-btn">
                <div className="txt">Back Home</div>
            </a>
            <div className="hr-line"></div>
            <div className="sw_logo"></div>
            <div className="TM-txt">TM & © Lucasfilm Ltd. All Rights Reserved</div>
        </div>
    )
}
export default Error;