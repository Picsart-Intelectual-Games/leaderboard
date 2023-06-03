import React, { memo, useCallback, useState, useMemo } from 'react';
import useStyles from './styles'

const TriangleButton = ({ isUp = false, onClick }) => {
  const classes = useStyles();
  const [isPressed, setIsPressed] = useState(false);
  const points = useMemo(() => isUp ? '5,45 45,45 25,25' : '5,5 45,5 25,25', [isUp]);

  const handleMouseUp = useCallback(() => {
    setIsPressed(false);
    onClick();
  }, [onClick]);

  return (
    <button
      className={classes.root}
      onMouseDown={() => setIsPressed(true)}
      onMouseUp={handleMouseUp}
    >
      <svg width='50' height='50'>
        <polygon
          points={points}
          className={`${classes.polygon} ${isPressed ? classes.polygonPressed : classes.polygonNotPressed}`}
        />
      </svg>
    </button>
  );
}

export default memo(TriangleButton);
