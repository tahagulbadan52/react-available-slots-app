import React from "react";

const Timeslot = ({time, day, date, month, year}) => {

    const clickHandler = () => {
        console.log(date, month, year);
    }

    return (
        <div className="timeslot" onClick={clickHandler}>
            timeslot
        </div>
    )
}

export default Timeslot;