import { v4 as uuid } from 'uuid';
import { useDispatch } from "react-redux";
import { useCallback, useState } from "react";
import teamsSlice from "../../../store/slices/teams";
import useStyles from './styles';

const AddTeam = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [newTeamName, setNewTeamName] = useState('');

  const createTeamHandler = useCallback(() => {
    dispatch(teamsSlice.actions.setTeams({
      id: uuid(),
      name: newTeamName,
      score: 0,
    },));
    setNewTeamName('');
  }, [dispatch, newTeamName]);

  return (
    <div className={classes.root}>
      <input
        size={30}
        value={newTeamName}
        className={classes.input}
        onChange={e => setNewTeamName(e.target.value)}
      />
      <button
        className={classes.button}
        onClick={createTeamHandler}
        disabled={!newTeamName}
      >
        Create a Team
      </button>
    </div>
  )
};

export default AddTeam;
