import React, {Component} from "react";
import Input from "./input";

export default class Inputs extends Component {

    dataInput = [
        {
            description: 'Введите уровень продукта',
            placeholder: 'Введите уровень',
            id: "currentLevel",
            value: null
        },
        {
            description: 'Введите температуру продукта',
            placeholder: 'Введите температуру',
            id: "currentTemperature",
            value: null
        }
    ]

    render() {

        const {onInputValue} = this.props

        return (
            <>
                <Input
                    dataInput={this.dataInput}
                    onInputValue={onInputValue}
                />
            </>
        )
    }
}

