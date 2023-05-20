import './App.css';
import Game from './components/Game';
import Teams from './components/Teams';
import Leaderboard from './components/Leaderboard';

function App() {
  return (
    <div className="App">
      <Game />
      <Teams />
      <Leaderboard />
    </div>
  );
}

export default App;
