import { memo, useCallback, useState } from 'react';

import TeamChooser from '../TeamChooser';
import { useDispatch } from 'react-redux';
import usersSlice from '../../../store/slices/users';

const User = ({ id, place, name, rating, teamId }) => {
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
    <div>
      <div>{place}</div>
      <input
        value={currentName}
        disabled={!isEditActive}
        placeholder='Enter a name'
        onChange={handleNameChange}
      />
      <div>{rating}</div>
      <button onClick={handleUserEdit}>{isEditActive ? 'Done' : 'Edit'}</button>
      <TeamChooser
        userId={id}
        teamId={teamId}
      />
    </div>
  )
};

export default memo(User);
