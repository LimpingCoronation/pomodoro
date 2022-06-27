import React, { Component } from "react";

import Header from "../header/header";
import Timer from "../timer/timer";
import Btns from "../btns/btns";

import "./app.css"

export default class extends Component {

    state = {
        start: false,
        breakTime: false,
        timeLeft: 5,
    }

    interval = null;

    onTimerStart = () => {
        this.setState({ start: !this.state.start });
    }

    onTimerReset = () => {
        this.setState({
            start: false,
            timeLeft: 5,
        });
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
                    <Btns onTimerStart={ this.onTimerStart } onTimerReset={ this.onTimerReset } start={ this.state.start } />
                </div>
            </div>
        );
    }
}
