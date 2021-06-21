import './App.css';
import NavBar from './components/NavBar.js';
import ItemListContainerHook from './components/ItemListContainerHook';

function App() {
  return (
    <div className="App">
      <header>
        <NavBar />
      </header>
      <body>
        <ItemListContainerHook />
      </body>
    </div>
  );
}

export default App;
