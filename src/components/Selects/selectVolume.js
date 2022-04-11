import React, {Component} from "react";
import Options from "./Options/Options";

export default class SelectVolume extends Component {

    render() {

        const {selectVolume, onChangeSelect} = this.props

        const selectsVolume = selectVolume.map((item) => {
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
                    <p>Выберите таблицу</p>
                    <select onChange={onChangeSelect('volumeTransmitter')}>
                        {selectsVolume}
                    </select>
                </div>
            </>
        )
    }

}