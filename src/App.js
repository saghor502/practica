import './App.css';
import button from './button';
import slider from './slider';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className = "video">
          Aqui va a estar el video jajajaja
        </div>
        <div className = "seccion">
          {button()}
          {slider()}
        </div>
      </header>
    </div>
  );
}

export default App;
