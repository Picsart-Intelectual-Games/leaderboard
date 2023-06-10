import { createUseStyles } from 'react-jss';
import { BUTTON_PRIMARY_COLOR, BUTTON_PRIMARY_COLOR_ACTIVE } from '../../constants';

const useStyles = createUseStyles({
  root: {
    margin: 16,
    width: '100%',
  },
  registerGameButton: {
    backgroundColor: BUTTON_PRIMARY_COLOR,
    color: 'white',
    borderRadius: 12,
    fontSize: 24,
    padding: 8,
    border: 'none',
    '&:hover': {
      backgroundColor: BUTTON_PRIMARY_COLOR_ACTIVE,
    }
  }
}, {
  name: 'game',
});

export default useStyles;
