import { createUseStyles } from "react-jss";

import { BUTTON_PRIMARY_COLOR, BUTTON_PRIMARY_COLOR_ACTIVE } from "../../../constants";

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
    backgroundColor: BUTTON_PRIMARY_COLOR,
    color: 'white',
    borderRadius: 12,
    border: 'none',
    '&:hover': {
      backgroundColor: BUTTON_PRIMARY_COLOR_ACTIVE,
      cursor: 'pointer',
    }
  }
}, {
  name: 'add-team',
});

export default useStyles;
