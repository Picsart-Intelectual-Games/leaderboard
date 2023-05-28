import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    margin: [0, 8],
  },
  questionInput: {
    border: 'none',
    textAlign: 'center',
    fontSize: 64,
  }
}, {
  name: 'question-board',
});

export default useStyles;
