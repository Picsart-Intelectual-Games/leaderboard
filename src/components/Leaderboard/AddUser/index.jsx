import { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import usersSlice from '../../../store/slices/users';
import useStyles from './styles';

const AddUser = () => {
  const classes = useStyles();
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
    <div className={classes.root}>
      <input
        value={name}
        onChange={handleNameChange}
        className={classes.nameInput}
        placeholder='Enter a name'
      />
      <button
        className={classes.addButton}
        onClick={handleAddUser}
      >
        Add User
      </button>
    </div>
  )
};

export default AddUser;
