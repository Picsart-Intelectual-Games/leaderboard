import { v4 as uuid } from 'uuid';
import database from '../../../../db';
import { ref, set } from "firebase/database";

const createUser = (name) => {
  const id = uuid();

  // TODO: is this a good place?
  set(ref(database, 'users/' + id), {
    id,
    name,
    rating: 1000,
  });

  return {
    id,
    name,
    teamId: '',
    rating: 1000,
  };
};

export default createUser;
