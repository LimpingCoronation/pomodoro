import React, { useState } from "react";

import Header from "../header/header";
import Timer from "../timer/timer";
import BtnStart from "../btn-start/btn-start";

import "./app.css"

const App = () => {
    return (
        <div className="app-wrapper">
            <div>
                <Header />
                <Timer />
                <BtnStart />
            </div>
        </div>
    );
}

export default App;
