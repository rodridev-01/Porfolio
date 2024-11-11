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

function closeDevelopmentMessage() {
    document.getElementById("development-message").style.display = "none";
}
