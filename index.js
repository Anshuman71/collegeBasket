let message = document.getElementById('change');
console.log(message);
let count = 0;
setInterval(() => {
  if (count < 3) {
    count++;
    message.innerText = message.innerText + '.';
  } else {
    count = 0;
    message.innerText = 'Coming Soon';
  }
}, 500);
