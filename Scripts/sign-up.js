import { studentData, saveData } from "./data/student-data.js";
import { studentDetails } from "./student-details.js";


const createBtn = document.querySelector('.js-continue-account-btn')
createBtn.addEventListener('click', () => {
  const surname = document.querySelector('.surname');
  const firstname = document.querySelector('.firstname');
  const othername = document.querySelector('.othername');
  const email = document.querySelector('.email');
  const password = document.querySelector('.password');
  const password2 = document.querySelector('.password-check');
  const error = document.querySelector('small');

  namesCheck(firstname);
  emailCheck(email);
  passwordCheck(password, 'Password not strong');
  passwordCheck(password2, 'Password do not match');
  namesCheck(surname);

  if (surname.style.borderColor === 'red' || firstname.style.borderColor === 'red' || password.style.borderColor === 'red' || password2.style.borderColor === 'red' || email.style.width === '30%' || email.style.borderColor === 'red') {
    error.style.visibility = 'visible';
    error.innerHTML = 'Please fill the correct details'
  } else {
    const created = document.querySelector('.continue');
    created.setAttribute('href', '#');
    document.querySelector('.personal-details').classList.add('display');
    document.querySelector('.student-details-container').classList.remove('display');

    studentDetails(surname, email, firstname, othername, password, password2);
  };
});


function namesCheck(input) {

  const error = document.querySelector('small');

  if (input.value !== '' && !((input.value).includes(' ')) && (input.value).length > 2) {
    input.style.borderColor = 'gainsboro';
    error.style.visibility = 'hidden';
  } else {
    error.innerHTML = 'Please fill a valid name';
    error.style.visibility = 'visible';
    input.style.borderColor = 'red';
  };
};

document.querySelectorAll('.name').forEach(name => {
  name.addEventListener('keyup', () => {
    namesCheck(name);
  });
});


function emailCheck(email) {
  const error = document.querySelector('.error');
  const emailValidation = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  const topError = document.querySelector('small');

  let matchingItem
  studentData.forEach(info => {
    if ((email.value).toLowerCase() === info.email) {
      matchingItem = info
    };
  });

  if (matchingItem) {
    topError.innerText = 'Email address has been used'
    email.style.borderColor = 'red';
    topError.style.visibility = 'visible';
    document.querySelector('.error').style.display = 'none';
      document.querySelector('.email').style.width = '100%';
  } else if (!(emailValidation.test(email.value))) {
    error.style.width = '30%'
    error.style.display = 'inline'
    error.style.fontSize = '12px'
    error.innerText = 'Invalid email address'
    topError.innerText = ''
  } else {
    console.log('no po');
    document.querySelector('.error').style.display = 'none';
    document.querySelector('.email').style.width = '100%';
    email.style.borderColor = 'gainsboro';
    topError.innerText = ''
  };
};

document.querySelector('.email').addEventListener('keyup', () => {
  const email = document.querySelector('.email');
  emailCheck(email);
});


function passwordCheck(password, message) {

  const error = document.querySelector('small');

  if (password.value !== '' && !((password.value).includes(' ')) && (password.value).length > 7) {
    password.style.borderColor = 'gainsboro';
    error.style.visibility = 'hidden';
  } else {
    error.innerHTML = message
    error.style.visibility = 'visible';
    password.style.borderColor = 'red';
  };
};

document.querySelector('.password').addEventListener('keyup', () => {
  const password = document.querySelector('.password');
  passwordCheck(password, 'Password not strong');
});


document.querySelector('.password-check').addEventListener('keyup', () => {
  const password = document.querySelector('.password');
  const password2 = document.querySelector('.password-check');
  const error = document.querySelector('small');

  if (password2.value !== password.value) {
    password2.style.borderColor = 'red';
    error.innerHTML = 'Password do not match';
    error.style.visibility = 'visible';
  } else {
    error.style.visibility = 'hidden';
    password2.style.borderColor = 'gainsboro';
  };
});