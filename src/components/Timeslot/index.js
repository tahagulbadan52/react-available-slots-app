import React, {useContext} from "react";
import {TimeslotContext} from "../ContextAPI";

const Timeslot = ({time, day, date, month, year}) => {

    const [data, setData] = useContext(TimeslotContext);

    const clickHandler = () => {
        console.log(date, month, year);
        data.avalibleDates.addTime(day, date, month, year);
        setData(...data)
    }

    return (
        <div className="timeslot" onClick={clickHandler}>
            timeslot
        </div>
    )
}

export default Timeslot;