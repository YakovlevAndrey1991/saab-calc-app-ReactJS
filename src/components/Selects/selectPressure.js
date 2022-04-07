import React, {Component} from "react";
import Options from "./Options/Options";

export default class SelectPressure extends Component {

    render() {

        const {selectPressure, onChangeSelect} = this.props

        const selectsPressure = selectPressure.map((item) => {
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
                    <select onChange={onChangeSelect('pressureTransmitter')}>
                        {selectsPressure}
                    </select>
                </div>
            </>
        )
    }

}