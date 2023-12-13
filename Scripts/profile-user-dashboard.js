import { controller } from './utils/controller.js';
import { studentData , saveData} from './data/student-data.js';
import { loginDetails } from './data/login-data.js';


controller();
fillEduDetails();
function fillEduDetails() {

  let studentDetailsHTML = '';

  let matchingData;
  loginDetails.forEach(info => {

    studentData.forEach(element => {
      
      if (info.email === element.email) {
        matchingData = element

        studentDetailsHTML += 
        `
          <div class="details-type">
            <span>Student Name</span>
            <span>UTME Reg.No</span>
            <span>Department</span>
            <span>Session</span>
            <span>Email</span>
            <span>Phone</span>
            <span>Date of Birth</span>
            <span>State of Origin</span>
          </div>
          <div class="user-details">
            <div class="name student-name">${matchingData.surname} ${matchingData.firstname} ${matchingData.othername}</div>
            <div class="reg-no">20232084357IF</div>
            <div class="dept">${matchingData.course}</div>
            <div class="session">2023/2024</div>
            <div class="email">${matchingData.email}</div>
            <div class="phone">${matchingData.phoneNumber}</div>
            <div class="dob">${matchingData.dob}</div>
            <div class="soo">${matchingData.sog}</div>
          </div>
        `;
      };
    });
    document.querySelector('.student-name').innerHTML =  `${matchingData.firstname}`;
   

    document.querySelector('.student-full-name').innerHTML = `
    ${matchingData.surname} ${matchingData.firstname}'s`;

    
    document.querySelector('.profile-navbar-user-container img').setAttribute('src', matchingData.image);
    
  });
  document.querySelectorAll('.js-details-container').forEach(element => {
    element.innerHTML = studentDetailsHTML;
  });


  let educationDetails = '';
 
  educationDetails += 
  `
    <h4>EDUCATION INFORMATION</h4>
      <div class="details-container">
        <div class="details-type education-data-type">
          <span>Programme</span>
          <span>Department</span>
          <span>Faculty</span>
          <span>Degree</span>
          <span>Academic Session</span>
          <span>Application Type</span>
          <span>Admission Status</span>
        </div>
        <div class="user-details education-data-details ">
          <div class="programme">${matchingData.course}</div>
          <div class="dept">${matchingData.course}</div>
          <div class="faculty">FACULTITY OF COMPUTTING AND INFORMATICS</div>
          <div class="degree">B.Tech</div>
          <div class="session">2023/2024</div>
          <div class="type">UGD</div>
          <div class="admission-status">Not Yet Admitted</div>
        </div>
    </div>
  `;
  document.querySelector('.js-education-details').innerHTML = educationDetails;
};



const imageEl = document.querySelector('.profile-navbar-user-container img');
if (!(imageEl.getAttribute('src'))) {
  alert('Please Upload Your Passport');
};



document.querySelectorAll('.image-input').forEach(element => {
  const reader = new FileReader();
  
  element.addEventListener('change' , (event) => {
    const imageFile = event.target.files[0];
  
    if (imageFile) {
      reader.readAsDataURL(imageFile);
  
      reader.addEventListener('load', () => {
  
        let matchDetails;
        loginDetails.forEach(data => {
  
          studentData.forEach(info => {
            if (data.email === info.email) {
              matchDetails = info;
            };
          });
        });
        matchDetails.image = reader.result;
        saveData();
        location.reload()
      });
    };
  });
});
