import React, {Component} from "react";
import Options from "../Options";
import './selects.css'

export default class SelectTemperature extends Component {

    render() {

        const {selectTemperature, onChangeSelect} = this.props

        const selectsTemp = selectTemperature.map((item) => {
            const {id, ...itemProps} = item

            return (
                <Options key={id}
                         {...itemProps}
                />

            )
        })

        return (
            <>
                <div className="selects">
                <p>Выберите датчик</p>
                <select onChange={onChangeSelect('tempTransmitter')}>
                    {selectsTemp}
                </select>
                </div>
            </>
        )
    }

}