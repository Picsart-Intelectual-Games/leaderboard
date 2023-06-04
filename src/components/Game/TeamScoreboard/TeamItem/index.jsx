import { useMemo, memo } from 'react';
import classnames from 'classnames';

import Triangle from "../Triangle";
import useStyles from './styles';

const TeamItem = ({ team, countHandler }) => {
  const classes = useStyles();
  console.log(team.id)
  const isQuestion = useMemo(() => team.id === 'questions', [team.id])

  return (
    <div className={classnames(classes.root, {
      [classes.question]: isQuestion,
    })}>
      <Triangle isUp onClick={() => countHandler(team, true)} />
      <div
        className={classes.scoreInput}
      >
        {team.score}
      </div>
      <Triangle onClick={() => countHandler(team)} />
      <span>{team.name}</span>
    </div>
  )
};

export default memo(TeamItem);
