import './App.css';
import CardList from './components/CardList/CardList';

function App() {
  return (
    <div>
      <div className="App">
        <CardList />
      </div>
      <button onClick={() => window.scrollTo(0, 0)} className="scroll-top">
        ↑
      </button>
    </div>
  );
}

export default App;
