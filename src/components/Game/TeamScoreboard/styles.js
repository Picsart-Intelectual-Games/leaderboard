import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  root: {
    display: 'grid',
    gridAutoFlow: 'column',
    gridAutoColumns: '1fr auto',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 16,
  },
  scoreboard: {
    display: 'flex',
    gap: 8,
  },
}, {
  name: 'teams-scoreboard',
});

export default useStyles;
