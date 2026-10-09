alert("js is connected");

const button = document.getElementById('hover-button');
const background = documf;zent.getElementById('background-container');

const defaultBg = "url('home-fridgeoutside-CLOSED.jpeg')";
const hoverBg = "url('home-fridgeoutside-OPEN.jpeg')";

button.addEventListener('mouseenter', () => {
  background.style.backgroundImage = hoverBg;
});

button.addEventListener('mouseleave', () => {
  background.style.backgroundImage = defaultBg;
});