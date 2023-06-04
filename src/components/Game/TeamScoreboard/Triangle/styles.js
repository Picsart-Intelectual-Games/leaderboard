import { createUseStyles } from 'react-jss';
import { BUTTON_PRIMARY_COLOR, BUTTON_PRIMARY_COLOR_ACTIVE } from '../../../../constants';

const useStyles = createUseStyles({
  root: {
    border: 'none',
    background: 'none',
    padding: 0,
    cursor: 'pointer'
  },
  polygon: {
    stroke: 'black',
    strokeWidth: 1
  },
  polygonPressed: {
    fill: BUTTON_PRIMARY_COLOR
  },
  polygonNotPressed: {
    fill: BUTTON_PRIMARY_COLOR_ACTIVE
  }
}, {
  name: 'triangle',
});

export default useStyles;
