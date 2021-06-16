import './App.css';
import NavBar from './components/NavBar.js';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <div className="App">
      <header>
        <NavBar />
      </header>
      <body>
        <ItemListContainer />
      </body>
    </div>
  );
}

export default App;
