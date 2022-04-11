import React, {Component} from "react";
import Selects from "./Selects/selects";
import Details from "./Details/details";

import './main.css'
import Inputs from "./Inputs/inputs";


export default class Main extends Component {

    state = {
        showDetails: false,
        buttonTitle: 'Показать детали'
    }

    onShowDetails = () => {

        this.setState({
            showDetails: !this.state.showDetails
        })
    }

    render() {

        const {
            onChangeSelect,
            onInputValue,

            onCalc,

            levelAccuracy,
            tempAccuracy,
            density,
            densityAccuracy,
            weight,
            weightAccuracy
        } = this.props

        let details = this.state.showDetails ?
            <Details levelAccuracy={levelAccuracy}
                     tempAccuracy={tempAccuracy}
            /> : null

        return (
            <>
                <div className="main">
                    <div className="selects">
                        <Selects
                            onChangeSelect={onChangeSelect}
                        />
                    </div>

                    <div className="inputs">
                        <Inputs onInputValue={onInputValue}/>
                    </div>

                    <div className="buttons">
                        <button onClick={onCalc}>Произвести расчет

                        </button>

                    </div>

                    <div className="results">

                        <p>Плотность продукта кг/м3:</p>
                        <span>{density}</span>
                        <p>Погрешность измерения плотности &#177;, кг/м3</p>
                        <span>{densityAccuracy}</span>
                        <p>Масса, тонн</p>
                        <span>{weight}</span>
                        <p>Погрешность измерения массы &#177;, %</p>
                        <span>{weightAccuracy}</span>
                        <button onClick={this.onShowDetails}>{this.state.buttonTitle}</button>
                        {details}
                    </div>
                </div>
            </>
        )
    }

}