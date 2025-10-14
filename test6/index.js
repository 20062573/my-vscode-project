const msg = document.querySelector('#message');
const btn = document.querySelector('#changeBtn');

btn.addEventListener('click', () => {
  msg.textContent = "You clicked the button!";
});