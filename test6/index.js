const msg = document.querySelector('#message');
const btn = document.querySelector('#changeBtn');

btn.addEventListener('click', () => {
  msg.textContent = "button is used";
});