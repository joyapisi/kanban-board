import img from './sources/img.gif';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={img} className="App-img" alt="img" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
