import { studentData, saveData } from "./data/student-data.js";
import { chageData, saveChangeData } from "./data/change-data.js";


const resetPassword = document.querySelector('.reset-password')


resetPassword.addEventListener('click', () => {
  const email = document.querySelector('.student-email');
  const error = document.querySelector('.login-content span');
  let student;

  studentData.forEach(data => {
    if (email.value === data.email) {
      student = data
    }; 
  });

  if (student) {
    chageData.length = 0;

    chageData.push({
      email: email.value
    });
    saveChangeData();
    error.innerHTML = '';
    document.querySelector('.new-password-container').classList.remove('display');
    document.querySelector('.email-container').classList.add('display');
  } else {
   error.innerHTML = 'Email address is not valid';
  };

  // newPassword()
});

const changeBtn = document.querySelector('.continue')

changeBtn.addEventListener('click', () => {
  newPassword();
});

function newPassword() {
  const new_password = document.querySelector('.newPassword');
  const confirm_password = document.querySelector('.confirmPassword');
  const error = document.querySelector('.login-content span');

  let student;

  chageData.forEach(data => {

    studentData.forEach(info => {

      if (data.email === info.email)  {
        student = info
      };
    });
  });

  if (new_password.style.borderColor === 'red' || confirm_password.style.borderColor === 'red') {
    error.innerHTML = 'Please Check The Passwords'
  } else if (  new_password.value === '' || confirm_password.value === '') {
  error.innerHTML = 'Please fill your passwords'
  error.style.visibility = 'visible';
  const loginLink = document.querySelector('.login-link');
  loginLink.setAttribute('href', '#');
  } else {
    student.password = new_password.value;
    saveData();
    const loginLink = document.querySelector('.login-link');
    loginLink.setAttribute('href', 'lautech-login.html');
  };
};


function passwordCheck(password, message) {

  const error = document.querySelector('.login-content span');

  if (password.value !== '' && !((password.value).includes(' ')) && (password.value).length > 7) {
    password.style.borderColor = 'gainsboro';
    error.style.visibility = 'hidden';
  } else {
    error.innerHTML = message
    error.style.visibility = 'visible';
    password.style.borderColor = 'red';
  };
};

const new_password = document.querySelector('.newPassword');
new_password.addEventListener('keyup', () => {
  passwordCheck(new_password, 'Password Too weak');
});

const confirm_password = document.querySelector('.confirmPassword');
confirm_password.addEventListener('keyup', () => {
  const error = document.querySelector('.login-content span');

  if (confirm_password.value !== new_password.value) {
    error.innerText = 'Password do not match';
    error.style.visibility = 'visible';
  } else {
    error.style.visibility = 'hidden';
  }
});