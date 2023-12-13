import { studentData } from "./data/student-data.js";
import { saveData } from "./data/student-data.js";


const phoneNumber = document.querySelector('.phone-number');
const continueBtn = document.querySelector('.js-create-account-btn');
const error = document.querySelector('.small');
const dob = document.querySelector('.date-of-birth')
const sog = document.querySelector('.state')
const course = document.querySelector('.course')

export function studentDetails(surname, email, firstname, othername, password, password2) {
  continueBtn.addEventListener('click', () => {
  
    phoneNumberValidation();
    DOBValidation();
    stateValidation();
    courseValidation();

    if ((phoneNumber.style.borderColor === 'red') || (dob.style.borderColor === 'red') || (sog.style.borderColor === 'red') || (course.style.borderColor === 'red')) {
      error.innerHTML = 'Please fill the details'
    } else {
      studentData.push({
        surname:  `${surname.value[0].toUpperCase() + surname.value.substring(1)}`,
        firstname: `${firstname.value[0].toUpperCase() + firstname.value.substring(1)}`,
        othername: othername.value ? `${othername.value[0].toUpperCase() + othername.value.substring(1)}` : '',
        email: (email.value).toLowerCase(),
        password: password.value,
        phoneNumber: phoneNumber.value,
        dob: dob.value,
        sog: sog.value,
        course: course.value,
        image: ''
      });
      saveData();
      const created = document.querySelector('.create');
      created.setAttribute('href', 'signup-confirmation.html');
      surname.value = '';
      firstname.value = '';
      othername.value = '';
      email.value = ''
      password.value = '';
      password2.value = '';
      phoneNumber.value = ''
      dob.value = '';
      sog.value = '';
      course.value = ''
    };
  });
};

function phoneNumberValidation() {
  
  const countryCodes = ['091', '081', '070', '090', '080'];
  const phone = phoneNumber.value;
 
    
  const phoneValidation = countryCodes.some(elem => phone.match('^' + elem) && (phone.length > 10 && phone.length < 12));

  if (phoneValidation) {
    phoneNumber.style.borderColor = 'gainsboro';
    error.style.visibility = 'hidden';
  } else if (phone === '' ) {
    error.innerHTML = 'Please Enter a valid phone number';
    error.style.visibility = 'visible';
    phoneNumber.style.borderColor = 'red';
  } else if (!phoneValidation) {
    error.innerHTML = 'Invalid Phone Number';
    error.style.visibility = 'visible';
    phoneNumber.style.borderColor = 'red';
  };
};

phoneNumber.addEventListener('keyup', () => {
  phoneNumberValidation()
});



function DOBValidation() {

  const year = [dob.value[0],dob.value[1],dob.value[2],dob.value[3]]
  
  if (((year[0] === '2') && (year[2] < 1 && year[3] < '8')) || ((year[0] === '1') && (year[1] ===  ('9' || '8')) && (year[2] < 10) && (year[3] < 10))) {
    dob.style.borderColor = 'gainsboro';
    error.style.visibility = 'hidden';
  } else if (!dob.value){
    error.innerHTML = 'Please chose a D.O.B';
    error.style.visibility = 'visible';
    dob.style.borderColor = 'red';
  } else {
    error.innerHTML = 'Applicant must be upto 16 years';
    error.style.visibility = 'visible';
    dob.style.borderColor = 'red';
  };
};

function stateValidation() {
  if (sog.value !== 'State Of Origin') {
    sog.style.borderColor = 'gainsboro';
    error.style.visibility = 'hidden';
  } else {
    error.innerHTML = 'Please chose your S.O.G';
    error.style.visibility = 'visible';
    sog.style.borderColor = 'red';
  };
};


function courseValidation() {
  if (course.value !== 'PROGRAMME') {
    course.style.borderColor = 'gainsboro';
    error.style.visibility = 'hidden';
  } else {
    error.innerHTML = 'Please chose a programme';
    error.style.visibility = 'visible';
    course.style.borderColor = 'red';
  };
};






// ((year[0] === '2') && (year[2] < 1 && year[3] < 8)) || ((year[0] === 1) && (year[1] === (8 || 9)) && (year[2] < 10 && year[2] > 0) && (year[3] < 10 && year[3] > 0))


// const validation = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/
