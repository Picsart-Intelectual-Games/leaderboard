import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    margin: [0, 8],
    width: 100,
    border: '1px solid black'
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
