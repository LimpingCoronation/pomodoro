import React from "react";

import "./btn-start.css";

const BtnStart = () => {

    return (
        <button className="btn-timer">
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
            viewBox="0 0 512.055 512.055" style={{ enableBackground: "new 0 0 512.055 512.055", color: "white" }} space="preserve" className="btn-timer__icon">
                <g>
                    <g>
                        <path d="M500.235,236.946L30.901,2.28C16.717-4.813,0.028,5.502,0.028,21.361v469.333c0,15.859,16.689,26.173,30.874,19.081
                            l469.333-234.667C515.958,267.247,515.958,244.808,500.235,236.946z M42.694,456.176V55.879l400.297,200.149L42.694,456.176z"/>
                    </g>
                </g>
            </svg>
        </button>
    );
}

export default BtnStart;
