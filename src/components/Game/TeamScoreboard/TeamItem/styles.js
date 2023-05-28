import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    margin: [0, 8],
  },
  scoreInput: {
    border: 'none',
    textAlign: 'center',
    fontSize: 64,
  }
}, {
  name: 'team-item',
});

export default useStyles;
