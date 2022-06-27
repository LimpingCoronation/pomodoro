import React from "react";

import "./btns.css";

const Btns = (props) => {

    const play = (
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
            viewBox="0 0 512.055 512.055" style={{ enableBackground: "new 0 0 512.055 512.055" }} space="preserve" className="btn-timer__icon">
                <g>
                    <g>
                        <path d="M500.235,236.946L30.901,2.28C16.717-4.813,0.028,5.502,0.028,21.361v469.333c0,15.859,16.689,26.173,30.874,19.081
                            l469.333-234.667C515.958,267.247,515.958,244.808,500.235,236.946z M42.694,456.176V55.879l400.297,200.149L42.694,456.176z"/>
                    </g>
                </g>
            </svg>
    );
    const pause = (
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
            width="277.338px" height="277.338px" viewBox="0 0 277.338 277.338" style={{ enableBackground: "new 0 0 277.338 277.338" }} space="preserve" className="btn-timer__icon">
            <g>
                <path d="M14.22,45.665v186.013c0,25.223,16.711,45.66,37.327,45.66c20.618,0,37.339-20.438,37.339-45.66V45.665
                    c0-25.211-16.721-45.657-37.339-45.657C30.931,0,14.22,20.454,14.22,45.665z"/>
                <path d="M225.78,0c-20.614,0-37.325,20.446-37.325,45.657V231.67c0,25.223,16.711,45.652,37.325,45.652s37.338-20.43,37.338-45.652
                    V45.665C263.109,20.454,246.394,0,225.78,0z"/>
            </g>
        </svg>
    );

    const render = props.start ? pause : play;

    return (
        <div className="btn-container">
            <button className="btn-timer" onClick={ props.onTimerStart }>
                { render }
            </button>
            <button className="btn-reset" onClick= { props.onTimerReset }>Reset</button>
        </div>
    );
}

export default Btns;
