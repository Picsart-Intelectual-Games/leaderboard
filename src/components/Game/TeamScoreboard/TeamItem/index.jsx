import { memo, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import teamsSlice from '../../../../store/slices/teams';
import { getQuestionsCount } from '../../../../store/slices/general/selectors';
import useStyles from './styles';

const TeamItem = ({ team: { id, name, score } }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const questionsCount = useSelector(getQuestionsCount);

  const handleScoreChange = useCallback(e => {
    const { value } = e.target;
    const numericValue = Number(value.replace(/\D/, ''));

    if (numericValue > questionsCount) return;

    dispatch(teamsSlice.actions.setTeamScore({
      id,
      score: numericValue,
    }));
  }, [dispatch, id, questionsCount]);

  return (
    <div className={classes.root}>
      <input
        className={classes.scoreInput}
        value={score}
        size={2}
        onChange={handleScoreChange}
      />
      <span>{name}</span>
    </div>
  )
};

export default memo(TeamItem);
