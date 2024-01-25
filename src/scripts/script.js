






















document.addEventListener('DOMContentLoaded', function () {
  const searchInput = document.getElementById('searchInput');

  searchInput.addEventListener('input', function () {
    const searchText = searchInput.value.toLowerCase();
    filterLoadouts(searchText);
  });

  function filterLoadouts(searchText) {
    const wzLoadouts = document.querySelectorAll('.snippet');

    wzLoadouts.forEach((wzLoadout) => {
      const title = wzLoadout.querySelector('.snippet__wz-gun-name').textContent.toLowerCase();
      const author = wzLoadout.querySelector('.snippet__wz-loadout-author').textContent.toLowerCase();

      // Logic to filter loadouts based on searchText
      if (title.includes(searchText) || author.includes(searchText)) {
        wzLoadout.style.display = 'block'; // Show the loadout
      } else {
        wzLoadout.style.display = 'none'; // Hide the loadout
      }
    });

    // Adjust the styling of the grid after filtering
    adjustGridStyling();
  }

  // Function to adjust grid styling
  function adjustGridStyling() {
    const wzLoadoutContent = document.getElementById('wz-loadout-content');
    wzLoadoutContent.classList.remove('search-active');

    // Check if any loadouts are displayed
    const displayedLoadouts = document.querySelectorAll('.snippet[style="display: block;"]');
    if (displayedLoadouts.length > 0) {
      wzLoadoutContent.classList.add('search-active');
    }
  }
});





document.addEventListener('DOMContentLoaded', function () {
  const toggleDetailsBtns = document.querySelectorAll('.toggle-details-btn');

  toggleDetailsBtns.forEach((toggleDetailsBtn) => {
    toggleDetailsBtn.addEventListener('click', function () {
      const wzLoadoutSnippet = toggleDetailsBtn.closest('.snippet');
      wzLoadoutSnippet.classList.toggle('show-details');
      toggleDetailsBtn.textContent = wzLoadoutSnippet.classList.contains('show-details') ? 'HIDE DETAILS' : 'SHOW DETAILS';
    });
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
  { name: 'WZ', description: 'Description of WZ', imageUrl: 'assets/games/WZ.jpg', link: '/wz', status: 'soon' },
  { name: 'MW3', description: 'Description of MW3', imageUrl: 'assets/games/MW3.jpg', link: '/mw3'},
  { name: 'Fortnite', description: 'Description of Fortnite', imageUrl: 'assets/games/Fortnite.webp', link: 'javascript:void(0)' },
  { name: 'Diablo', description: 'Description of Diablo', imageUrl: 'assets/games/Diablo.jpg', link: 'javascript:void(0)' },
  { name: 'FC 24', description: 'Description of Fifa', imageUrl: 'assets/games/Fifa.jpeg', link: 'javascript:void(0)' },
  { name: 'NBA 2K24', description: 'Description of NBA 2K23', imageUrl: 'assets/games/NBA-2K.jpg', link: 'javascript:void(0)' },
  { name: 'Rocket League', description: 'Description of Rocket League', imageUrl: 'assets/games/Rocket-League.jpg', link: 'javascript:void(0)' },
  { name: 'CS:GO', description: 'Description of CS:GO', imageUrl: 'assets/games/CS-Go.jpg', link: 'javascript:void(0)' },
  { name: 'Madden 24', description: 'Description of Madden 23', imageUrl: 'assets/games/Madden-23.jpg', link: 'javascript:void(0)' },
];

// ... (previous code)

function renderGames() {
  gamesData.forEach((game) => {
    const gameElement = document.createElement('div');
    gameElement.classList.add('game');

    const gameImage = document.createElement('div');
    gameImage.classList.add('game-image');
    const anchor = document.createElement('a');
    anchor.href = game.link;
    const image = document.createElement('img');
    image.src = game.imageUrl;
    image.alt = game.name;
    anchor.appendChild(image);
    gameImage.appendChild(anchor);

    // Overlay elements
    const overlay = document.createElement('div');
    overlay.classList.add('overlay');

    // Check the game status and set overlay text and background accordingly
    if (game.status === 'soon') {
      overlay.innerHTML = 'NEW!';
      overlay.style.backgroundColor = 'var(--clr-primary-500)'; // Set the color for soon to be updated games
    } else {
      overlay.innerHTML = 'SOON!';
      overlay.style.backgroundColor = 'var(--clr-primary-400)'; // Set the color for updated games
    }

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






