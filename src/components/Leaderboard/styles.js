import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '70%',
    border: '1px solid black',
    borderRadius: 8,
    fontSize: 24
  },
}, {
  name: 'leaderboard',
});

export default useStyles;
