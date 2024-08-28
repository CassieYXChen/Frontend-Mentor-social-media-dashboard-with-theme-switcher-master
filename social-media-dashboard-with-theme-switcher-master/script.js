// const darkModeToggle = document.getElementById('darkModeButton');
// const root = document.documentElement;

// darkModeToggle.addEventListener('change', function() {
//   if (this.checked) {
//     root.style.setProperty('--bg-color', 'hsl(230, 17%, 14%)');
//     root.style.setProperty('--main-text-color', 'hsl(0, 0%, 100%)');
//   }
// });

document.addEventListener('DOMContentLoaded', function() {
  const darkModeToggle = document.getElementById('darkModeButton');
  const root = document.documentElement;

  darkModeToggle.addEventListener('change', function() {
    if (this.checked) {
      console.log('Dark mode enabled');
      root.classList.add('dark-mode');
    } else {
      console.log('Dark mode disabled');
      root.classList.remove('dark-mode');
    }
  });
});