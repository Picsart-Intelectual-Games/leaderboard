import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  root: {
    display: 'flex',
    justifyContent: 'center',
    gap: 10,
  },
  input: {
    fontSize: 20,
    padding: [8, 8],
    border: '1px solid black',
    borderRadius: 12,
  },
  button: {
    backgroundColor: '#08659c',
    color: 'white',
    borderRadius: 12,
    border: 'none',
    '&:hover': {
      backgroundColor: '#0b8cd9',
      cursor: 'pointer',
    }
  }
}, {
  name: 'add-team',
});

export default useStyles;
