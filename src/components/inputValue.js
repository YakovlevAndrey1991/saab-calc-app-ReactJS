import React, {Component} from "react";

import './levelInput.css'

export default class InputValue extends Component {

    render() {

        const {description, placeholder, onInputValue, id} = this.props

        return (
            <>
                <div className="inputValue">
                    <p>{description}</p>
                    <input
                        id={id}
                        onChange={onInputValue}
                        type="number"
                        placeholder={placeholder}
                    />
                </div>
            </>
        )
    }
}