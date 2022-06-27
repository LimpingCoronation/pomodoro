import React, { useState, useEffect } from "react";
import getZeroTime from "../helpers/getZeroTime";

import "./timer.css"
import tomato from "./tomato.png"

const Timer = ({ timeLeft }) => {

    const minutes = Math.floor(timeLeft / 60);
    const seconds = Math.floor(timeLeft - minutes * 60);

    return (
        <div className="timer">
            <img src={ tomato } alt="not found" className="timer__img"/>
            <span className="timer__text">{ getZeroTime(minutes.toString()) }:{ getZeroTime(seconds.toString()) }</span>
        </div>
    );
}

export default Timer;
