import React, { useState, createContext } from 'react';
import moment from 'moment';
import Timeslots from '../../classes/Timeslots';

export const TimeslotContext = createContext();

const TimeslotContextProvider = (props) => {
    const [data, setData] = useState({
        today: moment().format("DD MMMM YYYY"),
        day: moment().day(),
        dayOfMonth: moment().date(),
        month: moment().month(),
        year: moment().year(),
        targetDate: moment(),
        avalibleDates: new Timeslots()
      });
    return (
        <TimeslotContext.Provider value={[data, setData]}>
        	{props.children}
        </TimeslotContext.Provider>
    );
}
export default TimeslotContextProvider;