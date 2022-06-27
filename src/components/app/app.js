import React, { Component } from "react";

import Timer from "../timer/timer";
import Btns from "../btn-start/btns";
import getZeroTime from "../helpers/getZeroTime";

import "./app.css"

export default class extends Component {

    state = {
        start: false,
        breakTime: false,
        timeLeft: 25*60,
    }

    interval = null;

    onTimerStart = () => {
        this.setState({ start: !this.state.start });
    }

    onTimerReset = () => {
        this.setState({
            start: false,
            breakTime: false,
            timeLeft: 25*60,
        });
    }

    timerMinusOne() {
        this.setState((state) => {
            const newTimeLeft = state.timeLeft - 1;
            return {
                timeLeft: newTimeLeft >= 1 ? newTimeLeft: 0 
            }
        })
    }

    componentDidMount() {
        this.interval = setInterval(() => {
            if (this.state.start && !this.state.breakTime) {
                this.timerMinusOne()
            }
            else if(this.state.start && this.state.breakTime) {
                this.timerMinusOne()
            }
            if(this.state.timeLeft === 0) {
                this.setState({ breakTime: !this.state.breakTime, timeLeft: !this.state.breakTime ? 5*60 : 25*60 });
            }
        }, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        return (
            <div className="app-wrapper">
                <div>
                    <Timer timeLeft={ this.state.timeLeft } />
                    <Btns onTimerStart={ this.onTimerStart } onTimerReset={ this.onTimerReset } start={ this.state.start } />
                </div>
            </div>
        );
    }
}
