let spans = [...document.querySelectorAll(".main .row span")];

setInterval(() => {
  spans.forEach((span) => {
    span.style.backgroundColor = `
    rgb(${range(1, 255)},${range(1, 255)},${range(1, 255)})`;
  });
}, 1000);
function range(start, end) {
  let random = Math.floor(Math.random() * end + start);
  return random;
}
// add button to random color
// if hover span give color in hex or rgb
