class Timeslots {
    constructor(){
        this.AllTimes = [{day: "Sunday", date: 12, month: "June", year: 2022}];
    }

    showTimes () {

        return (this.AllTimes.map( x => {
            return(<div className="output-date">{`${x.day} ${x.date} ${x.month} ${x.year}`}</div>)
        }))
    }

    addTime(day, date, month, year) {
        const newTime = {
            day: day,
            date: date,
            month: month,
            year: year
        }

        this.AllTimes.push(newTime)
    }
}

export default Timeslots;