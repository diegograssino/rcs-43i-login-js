const userRole = JSON.parse(
  localStorage.getItem('auth')
);

window.addEventListener('load', () => {
  if (!userRole) {
    window.location.href = '../index.html';
  }
});
