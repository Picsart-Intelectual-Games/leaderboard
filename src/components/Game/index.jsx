import { useCallback } from 'react';

import TeamScoreboard from './TeamScoreboard';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from '../../store/slices/users/selectors';
import { getTeams } from '../../store/slices/teams/selectors';
import { getQuestionsCount } from '../../store/slices/general/selectors';
import usersSlice from '../../store/slices/users';

const calculateRatings = (rating, score, questionsCount) => {
  console.log({ rating, score, questionsCount });
  return rating + (score - questionsCount / 2);
}

const Game = () => {
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
    <div>
      <button onClick={handleScoreRegister}>
        Register the Scores
      </button>
      <TeamScoreboard />
    </div>
  )
};

export default Game;
