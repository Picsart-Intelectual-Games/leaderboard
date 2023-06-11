import { createUseStyles } from 'react-jss';
import { BUTTON_PRIMARY_COLOR, BUTTON_PRIMARY_COLOR_ACTIVE } from '../../../constants';

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
    border: 'none',
    backgroundColor: 'white',
  },
  addButton: {
    margin: 8,
    fontSize: 18,
    whiteSpace: 'nowrap',
    backgroundColor: BUTTON_PRIMARY_COLOR,
    color: 'white',
    borderRadius: 12,
    border: 'none',
    '&:hover': {
      backgroundColor: BUTTON_PRIMARY_COLOR_ACTIVE,
    }
  }
}, {
  name: 'add-user',
});

export default useStyles;
