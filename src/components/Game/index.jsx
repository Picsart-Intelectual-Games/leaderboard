import { useCallback } from 'react';

import AddTeam from './AddTeam';
import TeamScoreboard from './TeamScoreboard';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from '../../store/slices/users/selectors';
import { getTeams } from '../../store/slices/teams/selectors';
import { getQuestionsCount } from '../../store/slices/general/selectors';
import usersSlice from '../../store/slices/users';
import useStyles from './styles';

const calculateRatings = (rating, score, questionsCount) => {
  console.log({ rating, score, questionsCount });
  return rating + (score - questionsCount / 2);
}

const Game = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const teams = useSelector(getTeams);
  const users = useSelector(getUsers);
  const questionsCount = useSelector(getQuestionsCount);

  const handleScoreRegister = useCallback(() => {
    // TODO: create a normal setter for this
    const updatedUsers = {};

    for (let key in users) {
      const user = users[key]
      const { rating, teamId } = user;

      updatedUsers[key] = !teamId
        ? user
        : {
          ...user,
          rating: calculateRatings(rating, teams[teamId].score, questionsCount),
        }
    }
    dispatch(usersSlice.actions.setUsers(updatedUsers));
  }, [dispatch, questionsCount, teams, users]);

  return (
    <div className={classes.root}>
      <AddTeam />
      <TeamScoreboard />
      <button className={classes.registerGameButton} onClick={handleScoreRegister}>
        Register the Scores
      </button>
    </div>
  )
};

export default Game;
