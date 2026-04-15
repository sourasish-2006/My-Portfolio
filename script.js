function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({
    behavior: 'smooth'
  });
}

// Simple animation on load
window.onload = () => {
  document.querySelector("header h1").style.opacity = 0;
  setTimeout(() => {
    document.querySelector("header h1").style.transition = "1s";
    document.querySelector("header h1").style.opacity = 1;
  }, 200);
};