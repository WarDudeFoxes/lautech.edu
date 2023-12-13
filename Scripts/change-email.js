import { loginDetails, saveLoginData } from "./data/login-data.js";
import { studentData, saveData} from "./data/student-data.js";

const changeBtn = document.querySelector('.change-email');
changeBtn.addEventListener('click', () => {
  const newEmail = document.querySelector('.new-email');
  const error = document.querySelector('span')
  const emailValidation = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

  studentData.forEach(info => {
    const loginLink = document.querySelector('.login-link')
    if (emailValidation.test(newEmail.value) && (newEmail.value !== info.email) ) {
     
      loginDetails.forEach(data => {
        if (data.email === info.email) {
          data.email = newEmail.value
          info.email = newEmail.value
          saveData();
          saveLoginData();
          loginLink.setAttribute('href', 'lautech-login.html');
        };
      });
    } else {
      newEmail.style.borderColor = 'red'
      error.innerHTML = 'Please Input A Valid Email'
      loginLink.setAttribute('href', '#');
    };
  });
});