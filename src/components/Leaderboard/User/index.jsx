import { memo, useCallback, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import usersSlice from '../../../store/slices/users';
import useStyles from './styles';
import { getTeamsArray } from '../../../store/slices/teams/selectors';
import classNames from 'classnames';

const User = ({ id, place, name, rating, teamId }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const teams = useSelector(getTeamsArray);

  const [isEditActive, setIsEditActive] = useState(false);
  const [currentName, setCurrentName] = useState(name);

  const handleUserEdit = useCallback(() => {
    if (isEditActive) {
      dispatch(usersSlice.actions.updateUserName({
        id,
        name: currentName
      }));
    }
    setIsEditActive(prev => !prev);
  }, [currentName, dispatch, id, isEditActive]);

  const handleNameChange = useCallback((e) => {
    setCurrentName(e.target.value);
  }, []);

  const teamInputHandler = useCallback((e) => {
    dispatch(usersSlice.actions.setUserTeam({
      userId: id,
      teamId: e.target.value,
    }));
  }, [dispatch, id]);

  return (
    <div className={classes.root}>
      <span className={classes.place}>{place}</span>
      <input
        className={classNames(classes.nameInput, {
          [classes.activeNameInput]: isEditActive,
        })}
        value={currentName}
        disabled={!isEditActive}
        placeholder='Enter a name'
        onChange={handleNameChange}
      />
      <span className={classes.rating}>{rating}</span>
      <button
        onClick={handleUserEdit}
        className={classNames(classes.editButton, {
          [classes.activeEditButton]: isEditActive,
        })}
      >
        {isEditActive ? 'Done' : 'Edit'}
      </button>
      <select
        className={classes.teamChooser}
        onChange={teamInputHandler}
        name={`${id}-teams`}
      >
        <option value="">Select Team</option>
        {teams.map(team => (
          <option
            key={team.id}
            value={team.id}
          >
            {team.name}
          </option>
        ))}
      </select>
    </div>
  )
};

export default memo(User);
