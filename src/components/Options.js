import React from "react";

const Options = ({label, value}) => {

    return (
        <>
            <option value={value}>{label}</option>
        </>
    )
}

export default Options;