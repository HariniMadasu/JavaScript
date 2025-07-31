const darkColorsArr = [
    "#eb4034",
    "#8a4b27",
    "#ebb515",
    "#8742f5",
    "#51e09d",
    "#b87874",
    "#717826",
    "#2e4e69",
    "#754150",
    "#95e612",
    "#2d7372",
    "#393f70",
    "#615758",
    "#53b848",
    "#ce42f5",
    "#cc3b4c"

];

function getRandomIndex() {
  const randomIndex = Math.floor(darkColorsArr.length * Math.random());
  return randomIndex;
}

const body = document.querySelector("body");
const bgHexCodeSpanElement = document.querySelector("#bg-hex-code");

function changeBackgroundColor() {
  const color = darkColorsArr[getRandomIndex()];

  bgHexCodeSpanElement.innerText = color;
  body.style.backgroundColor = color;
}
const btn = document.querySelector("#btn");

btn.onclick = changeBackgroundColor;