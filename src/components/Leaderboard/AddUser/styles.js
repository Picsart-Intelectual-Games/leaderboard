import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  root: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
  },
  nameInput: {
    width: '100%',
    margin: 8,
    fontSize: 'inherit',
  },
  addButton: {
    margin: 8,
    fontSize: 18,
    whiteSpace: 'nowrap'
  }
}, {
  name: 'add-user',
});

export default useStyles;
