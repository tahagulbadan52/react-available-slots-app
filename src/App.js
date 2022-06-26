import './App.css';
import moment from 'moment';
import React, { useState, useContext } from 'react'
import Timeslot from "./components/Timeslot";
import DayColumn from "./components/DayColumn";
import Timeslots from "./classes/Timeslots";
import {TimeslotContext} from "./components/ContextAPI";


const App = () => {

  // const [data, setData] = useState({
  //   today: moment().format("DD MMMM YYYY"),
  //   day: moment().day(),
  //   dayOfMonth: moment().date(),
  //   month: moment().month(),
  //   year: moment().year(),
  //   targetDate: moment(),
  //   avalibleDates: new Timeslots()
  // });

  const [data, setData] = useContext(TimeslotContext);

  const weekdays = moment.weekdays();

  const nextWeek = () => {
    let newDate = data.targetDate.add(1, 'w')
    setData(prevData => ({...prevData, 'targetDate' : newDate}))
    console.log(data.targetDate);  
  }

  const previousWeek = () => {
    let newDate = data.targetDate.subtract(1, 'w')
    setData(prevData => ({...prevData, 'targetDate' : newDate}))
    console.log(data.targetDate);    
  }

  return (
    <div className="App">
      Today is {data.today} <br/>
      Date: {data.dayOfMonth} {data.month}, {data.year}
      <header>
        <button className='btn'>Today</button>
        <button className='btn' onClick={previousWeek}>&#60;</button>
        <button className='btn' onClick={nextWeek}>&#62;</button>
        <h4 className=''>June</h4>
        <h4 className=''>2022</h4>
      </header>
    
      
      <div className='cal-container'>
        
        {weekdays.map(
          (day, i) => {
            let displayDate = moment(data.targetDate).add((data.day * -1) + i, 'd');
            let displayDay = displayDate.date();
            let displayMonth = displayDate.month();
            let displayYear = displayDate.year();
            return (
              <DayColumn key={`${day}-${displayDay}`} weekday={day} date={displayDay}>
                {
                  [...Array(24)].map((x,i) => {
                    return (<Timeslot key={`${i}-${displayDay}-${displayMonth}-${displayYear}`} date={displayDay} month={displayMonth} year={displayYear} time={i} day={day} />)
                  })
                }
              </DayColumn> 
            )
          }
        )}
        
      </div>

      <div className='output'>
        {data.avalibleDates.showTimes()}
      </div>

    </div>
  );
}

export default App;
