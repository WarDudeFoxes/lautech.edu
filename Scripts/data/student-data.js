export const studentData = JSON.parse(localStorage.getItem('studentData')) ||
[{
  surname: 'Ganiu',
  firstname: 'Waris',
  othername: 'Olamilekan',
  email: 'wardude704@gmail.com',
  password: 'wardude500',
  phoneNumber: '09065721134',
  dob: '2004-05-29',
  sog: 'OYO',
  course: 'COMPUTER SCIENCE',
  image: ''
}];

export function saveData() {
  localStorage.setItem('studentData', JSON.stringify(studentData));
};