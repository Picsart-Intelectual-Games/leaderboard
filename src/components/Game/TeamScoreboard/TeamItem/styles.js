import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  root: {
    width: 100,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    border: '1px solid black'
  },
  scoreInput: {
    border: 'none',
    textAlign: 'center',
    fontSize: 64,
  },
  question: {
    
  }
}, {
  name: 'team-item',
});

export default useStyles;

