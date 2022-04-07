import './App.css';
import React, {Component} from "react";

import Main from "./components/main";

export default class App extends Component {

    state = {
        levelTransmitter: null,
        tempTransmitter: null,
        pressureTransmitter: null,
        volumeTransmitter: null,

        level: null,
        temp: null,
        pressure: null,
        volume: null,

        res: null,
        tempRes: null,
    }

    onInputValue = (id) => (e) => {
        switch (id) {
            case 'currentLevel':
                this.setState({
                    level: e.target.value
                })
                break
            case 'currentTemperature':
                this.setState({
                    temp: e.target.value
                })
                break
            case 'currentPressure':
                this.setState({
                    pressure: e.target.value
                })
                break
            case 'currentVolume':
                this.setState({
                    volume: e.target.value
                })
                break
        }
    }

    onChangeSelect = (id) => (e) => {
        switch (id) {
            case 'levelTransmitter':
                this.setState({
                    levelTransmitter: e.target.value
                })
                break
            case 'tempTransmitter':
                this.setState({
                    tempTransmitter: e.target.value
                })
                break
            case 'pressureTransmitter':
                this.setState({
                    pressureTransmitter: e.target.value
                })
                break
            case 'volumeTransmitter':
                this.setState({
                    volumeTransmitter: e.target.value
                })
                break
        }
    }


    onCalc = () => {
        if (this.state.levelTransmitter && this.state.level) {
            this.setState({
                res: +this.state.levelTransmitter / +this.state.level
            })
        } else {
            this.setState({
                res: 'Ошибка!'
            })
        }
    }

    onCalcTemp = () => {
        this.setState({
            tempRes: +this.state.tempTransmitter * +this.state.temp
        })
    }

    render() {
        return (
            <div>
                <header className="App-header">
                    <Main
                        onInputValue={this.onInputValue}
                        onChangeSelect={this.onChangeSelect}

                        onCalc={this.onCalc}
                        onCalcTemp={this.onCalcTemp}

                        res={this.state.res}
                        tempRes={this.state.tempRes}
                    />
                </header>
            </div>
        );
    }
}

