import logo from './logo.svg';
import './App.css';
import { CalculatorScore } from './Components/CalculatorScore';

function App() {
  return (
    <div>
      <CalculatorScore Name={"Nirman Raj"}
      School={"KIIT UNIVERSITY"}
      total={299}
      goal={3}/>
    </div>
  );
}

export default App;
