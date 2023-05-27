import { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import usersSlice from '../../../store/slices/users';

const AddUser = () => {
  const dispatch = useDispatch();

  const [name, setName] = useState('');

  const handleNameChange = useCallback(e => {
    setName(e.target.value);
  }, []);

  const handleAddUser = useCallback(() => {
    dispatch(usersSlice.actions.addUser(name));
    setName('');
  }, [dispatch, name]);

  return (
    <div>
      <input
        value={name}
        onChange={handleNameChange}
        placeholder='Enter a name'
      />
      <button onClick={handleAddUser}>Add User</button>
    </div>
  )
};

export default AddUser;
