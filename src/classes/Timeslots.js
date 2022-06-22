class Timeslots {
    constructor(){
        this.AllTimes = [{day: "Sunday", date: 12, month: "June", year: 2022}];
    }

    showTimes () {
        return (this.AllTimes[0].day + this.AllTimes[0].date + this.AllTimes[0].month + this.AllTimes[0].year)
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