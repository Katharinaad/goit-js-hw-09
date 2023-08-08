const onBtn = document.querySelector(['button[data-start']);
const offBtn = document.querySelector(['button[data-stop']);

let intervalId = null;
offBtn.disabled = true;

onBtn.addEventListener('click', () => {
  intervalId = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
  onBtn.disabled = true;
  offBtn.disabled = false;
});

offBtn.addEventListener('click', () => {
  clearInterval(intervalId);
  offBtn.disabled = true;
  onBtn.disabled = false;
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
