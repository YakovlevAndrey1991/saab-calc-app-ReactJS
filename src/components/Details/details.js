import React, {Component} from "react";

export default class Details extends Component {
    render() {

        const {levelAccuracy,tempAccuracy } = this.props

        return (
            <>
                <p>Относительная погрешность измерения уровня &#177;, %:</p>
                <span>{levelAccuracy}</span>
                <p>Относительная погрешность измерения температуры &#177; %:</p>
                <span>{tempAccuracy}</span>
            </>
        )
    }
}