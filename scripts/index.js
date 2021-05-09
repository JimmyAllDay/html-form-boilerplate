let name = document.getElementById('name');
let password = document.getElementById('password');
let newName = '';
let newPassword = '';

function submitButton() {
  newName = name.value;
  newPassword = password.value;
  console.log(
    `The user submitted a name: ${newName} and email: ${newPassword}`
  );
}

function checkUpdate() {
  console.log(newName, newPassword);
}

document.addEventListener('submit', function() {
  checkUpdate();
});
