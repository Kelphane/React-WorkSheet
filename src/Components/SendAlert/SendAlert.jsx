import React from "react";
import "./SendAlert.css";

const SendAlert = (props) => {
    return (
        <div>
        <button className="button-alert"onClick={props.alert}>Click Me</button>
        </div>
    );
}

export default SendAlert;
    