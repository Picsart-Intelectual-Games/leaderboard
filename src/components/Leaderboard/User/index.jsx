import { memo } from 'react';

import TeamChooser from '../TeamChooser';

const User = ({ id, place, name, rating, teamId }) => (
  <div>
    <div>{place}</div>
    <div>{name}</div>
    <div>{rating}</div>
    <TeamChooser
      userId={id}
      teamId={teamId}
    />
  </div>
);

export default memo(User);
