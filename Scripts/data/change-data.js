export const chageData = JSON.parse(localStorage.getItem('change-data')) ||
[{
  email: 'wardude704uu@gmail.com'
}]

export function saveChangeData() {
  localStorage.setItem('change-data', JSON.stringify(chageData))
}