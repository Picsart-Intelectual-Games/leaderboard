import Game from '../Game';
import useStyles from './styles';
import Leaderboard from '../Leaderboard';
import { ref, child, get } from "firebase/database";
import { useEffect } from 'react';
import database from '../../db';
import { useDispatch } from 'react-redux';
import usersSlice from '../../store/slices/users';

function App() {
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    const dbRef = ref(database);
    get(child(dbRef, 'users')).then((snapshot) => {
      if (snapshot.exists()) {
        dispatch(usersSlice.actions.setUsers(snapshot.val()));
        console.log(snapshot.val());
      } else {
        console.log("No data available");
      }
    }).catch((error) => {
      console.error(error);
    });
    // TODO: CI/CD forced to add this dependancy, check for rerenders
  }, [dispatch]);

  return (
    <div className={classes.root}>
      <Game />
      <Leaderboard />
    </div>
  );
}

export default App;
