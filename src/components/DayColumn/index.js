import React from "react";
import './style.css';

const DayColumn = (props) => {
    return (
        <div className="col">
            <div className="col-header">
                <div className="col-header-day">{props.weekday}</div>
                <div className="col-header-date">{props.date}</div>
            </div>
            <div className="col-body">
                {props.children}
            </div>
        </div>
    )
}

export default DayColumn;