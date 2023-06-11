import { createUseStyles } from 'react-jss';
import { BUTTON_PRIMARY_COLOR, BUTTON_PRIMARY_COLOR_ACTIVE } from '../../../constants';

const useStyles = createUseStyles({
  root: {
    display: 'grid',
    gridAutoFlow: 'column',
    gridTemplateColumns: 'auto 1fr auto auto auto',
    gridGap: 8,
    padding: [8, 0],
    justifyContent: 'center',
    width: '100%',
    borderBottom: '1px solid black',
  },
  place: {
    width: 25,
    borderRight: '1px solid black',
  },
  nameInput: {
    width: '100%',
    fontSize: 'inherit',
    border: 'none',
    backgroundColor: 'white',
  },
  rating: {
    width: 60,
  },
  editButton: {
    padding: 0,
    margin: 0,
    width: 60,
    fontSize: 18,
    backgroundColor: BUTTON_PRIMARY_COLOR,
    color: 'white',
    borderRadius: 12,
    border: 'none',
    '&:hover': {
      backgroundColor: BUTTON_PRIMARY_COLOR_ACTIVE,
    }
  },
  activeEditButton: {
    backgroundColor: '#009e4c',
    '&:hover': {
      backgroundColor: '#1fcf74',
    }
  },
  teamChooser: {
    fontSize: 16,
    marginRight: 8,
  }
}, {
  name: 'user',
});

export default useStyles;
