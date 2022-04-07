import React, {Component} from "react";
import './input.css'


export default class Input extends Component {

    render() {
        const {dataInput, onInputValue} = this.props

        const input = dataInput.map((item) => {
            const {description, placeholder, id} = item

            return (

                <div className="inputValue"
                key={id}>
                    <p>{description}</p>
                    <input
                        id={id}
                        onChange={onInputValue(id)}
                        type="number"
                        placeholder={placeholder}
                    />
                </div>
            )
        })

        return (
            <>
                    {input}
            </>
        )
    }
}