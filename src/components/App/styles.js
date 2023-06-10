import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  root: {
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
}, {
  name: 'app',
});

export default useStyles;
