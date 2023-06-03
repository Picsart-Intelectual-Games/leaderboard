import { createUseStyles } from 'react-jss';

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
    fill: 'red'
  },
  polygonNotPressed: {
    fill: 'orange'
  }
}, {
  name: 'triangle',
});

export default useStyles;
