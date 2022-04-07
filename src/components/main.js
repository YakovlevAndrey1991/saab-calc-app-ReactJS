import React from "react";
import Selects from "./Selects/selects";

import './main.css'
import Inputs from "./Inputs/inputs";


const Main = ({
                  onChangeSelect,
                  onInputValue,

                  onCalc,
                  onCalcTemp,

                  res,
                  tempRes,

              }) => {

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
                    <button onClick={onCalc}>Кнопка</button>
                    <button onClick={onCalcTemp}>
                        Кнопка
                    </button>
                </div>

                <div className="results">
                    <p>Результат:</p>
                    <span>{res}</span>
                    <p>Результат:</p>
                    <span>{tempRes}</span>
                </div>
            </div>
        </>
    )
}

export default Main