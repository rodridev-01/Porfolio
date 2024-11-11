document.addEventListener("DOMContentLoaded", () => {
  const stars = document.createElement('div');
  stars.classList.add('stars');
  document.body.appendChild(stars);

  for (let i = 0; i < 100; i++) {
    const star = document.createElement('div');
    star.classList.add('star');
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;
    star.style.left = `${x}px`;
    star.style.top = `${y}px`;
    star.style.animationDelay = `${Math.random() * 5}s`;
    stars.appendChild(star);
  }
});

window.addEventListener('scroll', function () {
    let navbar = document.querySelector('.navbar');
  
    if (window.scrollY > 50) {  
      navbar.style.backgroundColor = "rgba(224, 224, 224, 0.5)"; 
    } else {
      navbar.style.backgroundColor = "rgba(224, 224, 224, 0.0)"; 
    }
  });
  

const themeToggleButton = document.querySelector('.theme-toggle');
const themeIcon = document.getElementById('theme-icon');

const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    document.body.classList.add('dark-mode');
    themeIcon.classList.remove('fa-moon');
    themeIcon.classList.add('fa-sun');
} else {
    document.body.classList.remove('dark-mode');
    themeIcon.classList.remove('fa-sun');
    themeIcon.classList.add('fa-moon');
}

themeToggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
    } else {
        localStorage.setItem('theme', 'light');
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
    }
});

let clickCount = 0;
const gifs = [
    "https://media.tenor.com/scX-kVPwUn8AAAAM/this-is-fine.gif",
    "https://media3.giphy.com/media/3jbR27OLT5YJv0ewvN/giphy.gif?cid=6c09b952kk0pzywlv4bhnjqh4zzv2jsmwqtc0r7j1f0de8d6&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=g",
    "https://media.tenor.com/xtjwnNUUUo8AAAAM/it%27s-fine-im-fine.gif",
    "https://media4.giphy.com/media/9M5jK4GXmD5o1irGrF/200w.gif?cid=6c09b952rm9l3q9gqntv7buxrd4q5zg54czsjjilv6huyu2u&ep=v1_gifs_search&rid=200w.gif&ct=g",
];

function handleSapoClick() {
    clickCount++;
    const gifElement = document.getElementById('development-gif');

    if (clickCount < gifs.length) {
        gifElement.src = gifs[clickCount];
    } else {
        closeDevelopmentMessage();
    }
}

function closeDevelopmentMessage() {
    document.getElementById('development-message').style.display = 'none';
}