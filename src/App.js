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
        density: null,
        volume: null,
        weight: null,

        levelAccuracy: null,
        tempAccuracy: null,
        pressureAccuracy: null,
        densityAccuracy: null,
        weightAccuracy: null
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

        const {levelTransmitter, level, temp, tempTransmitter, pressureTransmitter, pressure, volume} = this.state

        let levelAccuracy = (100 / (level / levelTransmitter)).toFixed(4)
        let tempAccuracy = (100 / (temp / tempTransmitter)).toFixed(4)
        let density = (1.21 + ((pressure / (level * 9.81) )* 1000)).toFixed(4)
        let weight = (+density * +volume).toFixed(4)
        const weightAccuracy = 0.5
        let densityAccuracy = ((+density / 100) * ((+levelAccuracy + (+pressureTransmitter)))).toFixed(4)


        this.setState({
            weightAccuracy
        })

        if (levelTransmitter && level) {
            this.setState({levelAccuracy})
        } else {
            this.setState({
                levelAccuracy: 'Ошибка!'
            })
        }
        if (temp && tempTransmitter) {
            this.setState({tempAccuracy})
        } else {
            this.setState({
                tempAccuracy: 'Ошибка!'
            })
        }
        if (level && pressure) {
            this.setState({density})
        } else {
            this.setState({
                density: 'Ошибка!'
            })
        }
        if (density && levelAccuracy && pressureTransmitter) {
            this.setState({
                densityAccuracy
            })

        } else {
            this.setState({
                densityAccuracy: 'Ошибка!'
            })
        }

        if (density && volume) {
            this.setState({
                weight
            })
        } else {
            this.setState({
                weight: 'Ошибка!'
            })
        }

    }

    render() {
        return (
            <div>
                <header className="App-header">
                    <Main
                        onInputValue={this.onInputValue}
                        onChangeSelect={this.onChangeSelect}

                        onCalc={this.onCalc}

                        levelAccuracy={this.state.levelAccuracy}
                        tempAccuracy={this.state.tempAccuracy}
                        density={this.state.density}
                        densityAccuracy={this.state.densityAccuracy}
                        weight={this.state.weight}
                        weightAccuracy={this.state.weightAccuracy}
                    />
                </header>
            </div>
        );
    }
}

