import { studentData } from "./data/student-data.js";

const statusBtm = document.querySelector('.status-check');
const stausInput = document.querySelector('.js-status-input');
const stausOption = document.querySelector('.js-status-option');

statusBtm.addEventListener('click', () => {

  let student;
  studentData.forEach(data => {
    if (stausInput.value === data.phoneNumber) {
      student = data
    };
  });
  console.log(student);

  if (stausOption.value !== 'Select Programme') {
    console.log(stausOption.value);
  };
});