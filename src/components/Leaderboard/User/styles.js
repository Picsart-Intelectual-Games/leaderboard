import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  root: {
    display: 'flex',
    justifyContent: 'center',
  },
  place: {
    margin: 8,
  },
  name: {
    margin: 8,
  },
  rating: {
    margin: 8,
  },
  editButton: {
    margin: 8,
  }
}, {
  name: 'user',
});

export default useStyles;
