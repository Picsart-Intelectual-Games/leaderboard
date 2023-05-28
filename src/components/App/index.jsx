import Game from '../Game';
import useStyles from './styles';
import Leaderboard from '../Leaderboard';

function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Game />
      <Leaderboard />
    </div>
  );
}

export default App;
