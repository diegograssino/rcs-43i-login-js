import {
  userOk,
  passOk,
  credentialsOk,
  getUserRole,
} from './helpers.js';
import { users } from './users.js';

const user = document.getElementById('user');
const password =
  document.getElementById('password');
const button = document.getElementById('button');
button.addEventListener('click', e =>
  handleClick(e)
);

const handleClick = event => {
  event.preventDefault();
  if (
    userOk(user.value) &&
    passOk(password.value) &&
    credentialsOk(user.value, password.value)
  ) {
    console.log('User validado');
    localStorage.setItem(
      'auth',
      users.find(user => user.user === user.value)
    );
    // window.location.href = '/home/index.html';
  } else {
    console.log('User no validado');
  }
};
