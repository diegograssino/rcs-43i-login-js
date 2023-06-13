// Inicializaciones
const USERS = [
  { user: 'maria@maria.com', pass: 'maria' },
  { user: 'jose@jose.com', pass: 'jose' },
];

// Seleccion de HTML
const user = document.getElementById('user');
const password =
  document.getElementById('password');
const button = document.getElementById('button');
button.addEventListener('click', e =>
  handleClick(e)
);

// Logica
const handleClick = event => {
  event.preventDefault();
  const userValue = user.value;
  const passValue = password.value;
  if (
    userValue.length > 6 &&
    userValue.length <= 50 &&
    userValue.match(
      /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/
    )
  ) {
    console.log('User validado');
  } else {
    console.log('User no validado');
  }

  if (
    passValue.length > 6 &&
    passValue.length <= 8 &&
    passValue.match(/[a-zA-Z0-9]/)
  ) {
    console.log('Password validado');
  } else {
    console.log('Password no validado');
  }

  const userFound = USERS.find(
    user => user.user === userValue
  );
  const passOk = userFound.pass === passValue;

  if (userFound && passOk) {
    console.log('Logueado');
  } else {
    console.log('No logueado');
  }
};
