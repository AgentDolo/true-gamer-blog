





document.addEventListener('DOMContentLoaded', function () {
  const toggleDetailsBtn = document.querySelector('.toggle-details-btn');
  const wzLoadoutSnippet = document.querySelector('.snippet');

  toggleDetailsBtn.addEventListener('click', function () {
    wzLoadoutSnippet.classList.toggle('show-details');
    toggleDetailsBtn.textContent = wzLoadoutSnippet.classList.contains('show-details') ? 'Hide Details' : 'Show Details';
  });
});





const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
const navLogo = document.querySelector('#navbar__logo');
const gamesList = document.getElementById('games-list');
const body = document.querySelector('body'); // Get the body element

// Display Mobile Menu
const mobileMenu = () => {
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
};

menu.addEventListener('click', mobileMenu);

// Show active menu when scrolling
const highlightMenu = () => {
  const elem = document.querySelector('.highlight');
  const homeMenu = document.querySelector('#home-page');
  const aboutMenu = document.querySelector('#about-page');
  const servicesMenu = document.querySelector('#services-page');
  let scrollPos = window.scrollY;

  // adds 'highlight' class to my menu items
  if (window.innerWidth > 960 && scrollPos < 600) {
    homeMenu.classList.add('highlight');
    aboutMenu.classList.remove('highlight');
    return;
  } else if (window.innerWidth > 960 && scrollPos < 1400) {
    aboutMenu.classList.add('highlight');
    homeMenu.classList.remove('highlight');
    servicesMenu.classList.remove('highlight');
    return;
  } else if (window.innerWidth > 960 && scrollPos < 2345) {
    servicesMenu.classList.add('highlight');
    aboutMenu.classList.remove('highlight');
    return;
  }

  if ((elem && window.innerWIdth < 960 && scrollPos < 600) || elem) {
    elem.classList.remove('highlight');
  }
};

window.addEventListener('scroll', highlightMenu);
window.addEventListener('click', highlightMenu);

// Close mobile Menu when clicking on a menu item
const hideMobileMenu = () => {
  const menuBars = document.querySelector('.is-active');
  if (window.innerWidth <= 768 && menuBars) {
    menu.classList.toggle('is-active');
    menuLinks.classList.remove('active');
  }
};

menuLinks.addEventListener('click', hideMobileMenu);
navLogo.addEventListener('click', hideMobileMenu);

// Assuming you have an array of games data
const gamesData = [
  { name: 'MW3', description: 'Description of MW3', imageUrl: 'assets/games/MW3.jpg' },
  { name: 'Fortnite', description: 'Description of Fortnite', imageUrl: 'assets/games/Fortnite.webp' },
  { name: 'Diablo', description: 'Description of Diablo', imageUrl: 'assets/games/Diablo.jpg' },
  { name: 'Fifa', description: 'Description of Fifa', imageUrl: 'assets/games/Fifa.jpeg' },
  { name: 'NBA 2K23', description: 'Description of NBA 2K23', imageUrl: 'assets/games/NBA-2K.jpg' },
  { name: 'Rocket League', description: 'Description of Rocket League', imageUrl: 'assets/games/Rocket-League.jpg' },
  { name: 'CS:GO', description: 'Description of CS:GO', imageUrl: 'assets/games/CS-Go.jpg' },
  { name: 'Madden 23', description: 'Description of Madden 23', imageUrl: 'assets/games/Madden-23.jpg' },
];

// ... (previous code)

function renderGames() {
  gamesData.forEach((game) => {
    const gameElement = document.createElement('div');
    gameElement.classList.add('game');

    const gameImage = document.createElement('div');
    gameImage.classList.add('game-image');
    const image = document.createElement('img');
    image.src = game.imageUrl;
    image.alt = game.name;
    gameImage.appendChild(image);

    // Overlay elements
    const overlay = document.createElement('div');
    overlay.classList.add('overlay');
    const soonText = document.createElement('span');
    soonText.innerHTML = 'COMING<br>SOON';
    overlay.appendChild(soonText);

    gameImage.appendChild(overlay);

    const gameInfo = document.createElement('div');
    gameInfo.classList.add('game-info');
    const title = document.createElement('h3');
    title.textContent = game.name;
    const description = document.createElement('p');
    description.textContent = game.description;
    gameInfo.appendChild(title);
    gameInfo.appendChild(description);

    gameElement.appendChild(gameImage);
    gameElement.appendChild(gameInfo);

    gamesList.appendChild(gameElement);
  });
}

// Initial render
renderGames();

// Implement infinite scroll logic here
// You may need to load more game data as the user scrolls
// Example: on scroll event, call renderGames() with additional data










var swiper = new Swiper('.swiper-container', {
  slidesPerView: '1.5',
  slidesPerColumn: 1,
  spaceBetween: 20,
  freeMode: true, // Enable free mode scrolling
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

document.getElementById('selectGameLink').addEventListener('click', function(event) {
  event.preventDefault(); // Prevent the default action (e.g., navigation)
  event.stopPropagation(); // Stop the event from propagating to parent elements
});






