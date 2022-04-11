import React, {Component} from "react";
import SelectTemperature from "./selectTemperature";
import SelectLevel from "./selectLevel";
import SelectPressure from "./selectPressure";
import SelectVolume from "./selectVolume";

export default class Selects extends Component {

    dataOptionsLevel = [
        {
            label: 'Выберите уровнемер',
            value: null,
            id: null

        },
        {
            label: '5900S',
            value: 1,
            id: 4
        },
        {
            label: '5900C',
            value: 2,
            id: 5
        }
    ]

    dataOptionsTemperature = [
        {
            label: 'Выберите термопреобразователь',
            value: null,
            id: 6
        },
        {
            label: 'NLI/WLS',
            value: 0.25,
            id: 7
        },
        {
            label: '2240S',
            value: 0.5,
            id: 8
        }
    ]

    dataOptionsPressure = [
        {
            label: 'Выберите датчик давления',
            value: null,
            id: 9
        },
        {
            label: '3051S Ultra for Flow',
            value: 0.04,
            id: 10
        },
        {
            label: '3051S Ultra',
            value: 0.025,
            id: 11
        },
        {
            label: '3051S Classic',
            value: 0.035,
            id: 12
        },

    ]

    dataOptionsVolume = [
        {
            label: 'Выберите погрешность таблицы',
            value: null,
            id: 13
        },
        {
            label: '0.05',
            value: 0.05,
            id: 14
        },
        {
            label: '0.1',
            value: 0.1,
            id: 15
        },
        {
            label: '0.2',
            value: 0.2,
            id: 16
        },
    ]

    render() {

        const {onChangeSelect} = this.props

        return (
            <>
                <SelectLevel
                    selectLevel={this.dataOptionsLevel}
                    onChangeSelect={onChangeSelect}
                />
                <SelectTemperature
                    selectTemperature={this.dataOptionsTemperature}
                    onChangeSelect={onChangeSelect}
                />
                <SelectPressure
                    onChangeSelect={onChangeSelect}
                    selectPressure={this.dataOptionsPressure}
                />
                <SelectVolume
                    onChangeSelect={onChangeSelect}
                    selectVolume={this.dataOptionsVolume}
                />
            </>

        );
    }
}