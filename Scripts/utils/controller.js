
export function controller() {
  document.querySelector('.mini-toggle-sidebar').addEventListener('click', () => {
    document.querySelector('.profile-side-bar').classList.remove('js-classlist-display');
    document.querySelector( ".profile-mini-side-bar").classList.add('js-classlist-display');
  });

  document.querySelector('.toggle-sidebar').addEventListener('click', () => {
    document.querySelector('.profile-side-bar').classList.add('js-classlist-display');
    document.querySelector( ".profile-mini-side-bar").classList.remove('js-classlist-display');
    document.querySelector('.profile-body-container').classList.remove('width4');
  });

  document.querySelector('.hamburger-pop-icon').addEventListener('click', () => {
    document.querySelector( ".profile-mini-side-bar").classList.toggle('js-classlist-display');
    document.querySelector('.profile-side-bar').classList.toggle('js-classlist-display');
    document.querySelector('.profile-body-container').classList.toggle('width');
    // document.querySelector('.profile-body-container').classList.toggle('width3');
  });

  document.querySelector('.profile-body-content').addEventListener('click', () => {
    if (window.innerWidth < 400) {
      document.querySelector( ".profile-mini-side-bar").classList.add('js-classlist-display');
        document.querySelector('.profile-body-container').classList.add('width');
      document.querySelector('.profile-navbar-user-container').classList.add('width2');
    };
  });
};
