import './App.css';
import moment from 'moment';
import React, { useState } from 'react'


const App = () => {

  const [data, setData] = useState({
    today: moment().format("DD MMMM YYYY"),
    day: moment().day(),
    dayOfMonth: moment().date(),
    month: moment().month(),
    year: moment().year(),
    targetDate: moment()
  });

  const weekdays = moment.weekdays();

  const nextWeek = () => {
    // setData(prevData => prevData.targetDate = prevData.targetDate.add(1, 'w'))
    let newDate = data.dayOfMonth + 1
    setData(dat => ({...dat, ['dayOfMonth']: newDate}))
    console.log(data);
  
  }

  return (
    <div className="App">
      Today is {data.today} <br/>
      Date: {data.dayOfMonth} {data.month}, {data.year}
      <header>
        <button className='btn'>Today</button>
        <button className='btn'>&#60;</button>
        <button className='btn' onClick={nextWeek}>&#62;</button>
        <h4 className=''>June</h4>
        <h4 className=''>2022</h4>
      </header>
    
      <table>
        <thead>
        <tr>
          {weekdays.map(day => {
            return (<th key={day}>{day}</th>);
          })}
        </tr>
        <tr>
          { [...Array(7)].map( (x, i) => {
            
            let displayDate = moment(data.targetDate).add((data.day * -1) + i, 'd').date();
            console.log(displayDate)
            return(<td key={displayDate}>{displayDate}</td>)
          }
          )}
        </tr>
        </thead>
      </table>
    </div>
  );
}

export default App;
