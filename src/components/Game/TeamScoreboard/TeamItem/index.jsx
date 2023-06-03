import { memo } from 'react';

import Triangle from "../Triangle";
import useStyles from './styles';

const TeamItem = ({ team, countHandler }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
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
