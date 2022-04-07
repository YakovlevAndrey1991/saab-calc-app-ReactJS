import React, {Component} from "react";
import Options from "../Options";
import './selects.css'

export default class SelectLevel extends Component {

    render() {

        const {selectLevel, onChangeSelect} = this.props

        const selectsLevel = selectLevel.map((item) => {
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
                    <p>Выберите уровнемер</p>
                    <select onChange={onChangeSelect('levelTransmitter')}>
                        {selectsLevel}
                    </select>
                </div>
            </>
        )
    }

}