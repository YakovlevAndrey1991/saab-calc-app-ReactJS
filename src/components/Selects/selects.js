import React, {Component} from "react";
import SelectTemperature from "./selectTemperature";
import SelectLevel from "./selectLevel";

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
            </>

        );
    }
}