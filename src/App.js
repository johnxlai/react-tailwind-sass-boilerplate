import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="text-3xl font-bold underline">
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <h1 className="text-blue-400">test</h1>
        <h2 className="custom-orange">ORANGE HERE</h2>
        <h3 className="text-secondary">Secondary Color</h3>
        <div className="bg-secondary">
          <div className="text-tertiary p-5">HEllo</div>
        </div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
