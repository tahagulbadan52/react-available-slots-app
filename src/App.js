import './App.css';
import moment from 'moment';

console.log(moment().format())
function App() {
  let today = moment().format("DD MMMM YYYY")


  return (
    <div className="App">
      This is a test {today} <br/>
      Day is {moment().day()}
    
    </div>
  );
}

export default App;
