import React, { Component } from "react";

import Header from "../header/header";
import Timer from "../timer/timer";
import BtnStart from "../btn-start/btn-start";

import "./app.css"

export default class extends Component {

    state = {
        start: false,
        timeLeft: 5,
    }

    interval = null;

    onTimerStart = () => {
        this.setState({ start: !this.state.start });
    }

    componentDidMount() {
        this.interval = setInterval(() => {
            if (this.state.start) {
                this.setState((state) => {
                    const newTimeLeft = state.timeLeft - 1;
                    return {
                        timeLeft: newTimeLeft >= 1 ? newTimeLeft: 0 
                    }
                })
            }
            if(this.state.timeLeft === 0) this.setState({ start: false })
        }, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        return (
            <div className="app-wrapper">
                <div>
                    <Header />
                    <Timer timeLeft={ this.state.timeLeft } />
                    <BtnStart onTimerStart={ this.onTimerStart } start={ this.state.start } />
                </div>
            </div>
        );
    }
}
