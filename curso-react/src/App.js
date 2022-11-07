import FirstComponent from './components/FirstComponent';
import './App.css';
import TemplateExpressions from './components/TemplateExpressions';
import Events from './components/Events';
import Challenge from './components/Challenge';
import Vini from './assets/vin.jpg'
import ManagerData from './components/ManagerData';

function App() {
  return (
    <div className="App">
      <h1>Vinicius s</h1>
      <ManagerData></ManagerData>
      {/* <div>
      <img src="./logo512.png" alt="" />
      </div>
      <div>
        <img src={Vini} alt="foto de vinicius fazendo joinha" />
      </div> */}
      {/* <FirstComponent></FirstComponent>
      <TemplateExpressions></TemplateExpressions>
      <Events />
      <Challenge></Challenge> */}
    </div>
  );
}

export default App;
