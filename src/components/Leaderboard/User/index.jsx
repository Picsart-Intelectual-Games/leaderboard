import { memo, useCallback, useState } from 'react';

import TeamChooser from '../TeamChooser';
import { useDispatch } from 'react-redux';
import usersSlice from '../../../store/slices/users';
import useStyles from './styles';

const User = ({ id, place, name, rating, teamId }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

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

  return (
    <div className={classes.root}>
      <span className={classes.place}>{place}</span>
      <input
        className={classes.nameInput}
        value={currentName}
        disabled={!isEditActive}
        placeholder='Enter a name'
        onChange={handleNameChange}
      />
      <span className={classes.rating}>{rating}</span>
      <button
        onClick={handleUserEdit}
        className={classes.editButton}
      >
        {isEditActive ? 'Done' : 'Edit'}
      </button>
      <TeamChooser
        userId={id}
        teamId={teamId}
      />
    </div>
  )
};

export default memo(User);
