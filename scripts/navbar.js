
function showMenu(event) {
  const navbarContent = document.getElementById('navbar-content');
  if (!navbarContent.style.display) {
    navbarContent.style.display = 'block';
  } else if (navbarContent.style.display == 'none') {
    navbarContent.style.display = 'block';
  } else if (navbarContent.style.display === 'block') {
    navbarContent.style.display = 'none';
  }
};


function addNavbar() {

  // <div class="nav-brand">
  //   <a href="/" class="site-logo">JCK</a>
  // </div>
  // <button id="nav-toggler" class="nav-toggler" onclick="showMenu()">
  //   |||
  // </button>

  const currentPage = window.location.pathname;
  console.log('current page', currentPage)

  // console.log(`.${''}/page`);

  let pageFolder = '';
  if (currentPage !== ' /index.html') {
    pageFolder = '/pages'
  }

  const navbarDiv = document.getElementById('navbar');

  const navMenu = document.createElement('ul');

  const homeLink = document.createElement('li');
  const homeAnchor = document.createElement('a');
  homeAnchor.href = '/';
  homeAnchor.textContent = 'Home';

  const contactLink = document.createElement('li');
  const contactAnchor = document.createElement('a');
  contactAnchor.href = `.${pageFolder}/contact.html`;
  contactAnchor.textContent = 'Contact';

  homeLink.append(homeAnchor);
  contactLink.append(contactAnchor);

  navMenu.append(homeLink);
  navMenu.append(contactLink);

  navbarDiv.append(navMenu);
}

window.onload = ((event) => {
  addNavbar();
});