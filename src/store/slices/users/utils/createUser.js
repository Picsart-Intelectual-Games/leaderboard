import { v4 as uuid } from 'uuid';

const createUser = (name) => {
  return {
    name,
    id: uuid(),
    teamId: '',
    rating: 1000,
  };
};

export default createUser;
