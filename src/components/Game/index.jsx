import { useCallback } from 'react';

import TeamScoreboard from './TeamScoreboard';
import { useDispatch, useSelector } from 'react-redux';
import { getUsersArray } from '../../store/slices/users/selectors';
import { getTeams } from '../../store/slices/teams/selectors';
import { getQuestionsCount } from '../../store/slices/general/selectors';
import usersSlice from '../../store/slices/users';

const calculateRating = (rating, score, questionsCount) => {
  console.log({ rating, score, questionsCount });
  return rating + (score - questionsCount / 2);
}

const Game = () => {
  const dispatch = useDispatch();

  const teams = useSelector(getTeams);
  const users = useSelector(getUsersArray);
  const questionsCount = useSelector(getQuestionsCount);

  const handleScoreRegister = useCallback(() => {
    // TODO: change to object before dispatching
    const updatedUsers = users.map(user => {
      const { rating, teamId } = user;
      if (!teamId) return user;

      // TODO: create new seter for ratings only
      return {
        ...user,
        rating: calculateRating(rating, teams[teamId].score, questionsCount),
      }
    });

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
