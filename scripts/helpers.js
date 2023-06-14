import { users } from './users.js';

export const userOk = userValue => {
  let result = false;
  if (
    userValue.length > 6 &&
    userValue.length <= 50 &&
    userValue.match(
      /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/
    )
  ) {
    result = true;
  }
  return result;
};

export const passOk = passValue => {
  let result = false;
  if (
    passValue.length > 6 &&
    passValue.length <= 8 &&
    passValue.match(/[a-zA-Z0-9]/)
  ) {
    result = true;
  }
  return result;
};

export const credentialsOk = (
  userValue,
  passValue
) => {
  let result = false;
  if (
    users.find(user => user.user === userValue)
      .pass === passValue
  ) {
    result = true;
  }
  return result;
};

export const getUserRole = userValue => {
  const result = '';
  const userFound = users.find(
    user => user.user === userValue
  );
  console.log(
    users.find(user => user.user === userValue)
  );
  if (userFound) {
    result = userFound.role;
  }
  return result;
};
