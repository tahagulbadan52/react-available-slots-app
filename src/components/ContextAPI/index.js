import React, { useState, useEffect, createContext } from 'react';
import moment from 'moment';

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
        <TimeslotContext.Provider value={{ 
            data: data,
            setData: setData
        }}>
        	{props.children}
        </TimeslotContext.Provider>
    );
}
export default TimeslotContextProvider;