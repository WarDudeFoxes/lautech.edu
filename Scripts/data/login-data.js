export const loginDetails = JSON.parse(localStorage.getItem('saveData')) ||
[{
  email: 'wardude704uu@gmail.com',
}];

export function saveLoginData() {
  localStorage.setItem('saveData', JSON.stringify(loginDetails));
};