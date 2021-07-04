import './App.css';
import NavBar from './components/NavBar.js';
import ItemListContainerHook from './components/ItemListContainerHook';
import ItemDetailContainer from './components/ItemDetailContainer';

function App() {
  return (
    <div className="App">
      <header>
        <NavBar />
      </header>
      <body>
        <ItemDetailContainer />
      </body>
    </div>
  );
}

export default App;
