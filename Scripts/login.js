import { studentData } from "./data/student-data.js"; 
import { loginDetails, saveLoginData } from "./data/login-data.js";

const loginBtn = document.querySelector('.js-login-button');
loginBtn.addEventListener('click', () => {
  const email = document.querySelector('.login-email')
  const password = document.querySelector('.login-password')
  const error = document.querySelector('span')
  console.log(studentData);
  studentData.forEach(info => {
    if ((email.value).toLowerCase() === info.email && password.value === info.password) {

      loginDetails.length = 0

      loginDetails.unshift({
        email: (email.value).toLowerCase()
      });

      saveLoginData();

      const profileLink = document.querySelector('.login-options a');
      profileLink.setAttribute('href', 'lautech-profile.html');
      error.style.display = 'none'
    } else if (email.value === '' || password.value === '') {
      error.innerText = 'Please fill up your login details';
    } else {
      error.innerText = 'Account is not valid';
    };
  });
});