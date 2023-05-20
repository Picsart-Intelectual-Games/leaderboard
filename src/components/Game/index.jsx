import { useState, useCallback } from 'react';

import TeamScoreboard from './TeamScoreboard';

const Game = () => {
  const [isGameRegisterActive, setIsGameRegisterActive] = useState(false);

  const handleGameRegister = useCallback(() => {
    setIsGameRegisterActive(!isGameRegisterActive);
  }, [isGameRegisterActive]);

  return (
    <div>
      <button onClick={handleGameRegister}>
        {isGameRegisterActive ? 'Register the Scores' : 'Create a Game'}
      </button>
      {
        isGameRegisterActive && <TeamScoreboard />
      }
    </div>
  )
};

export default Game;
