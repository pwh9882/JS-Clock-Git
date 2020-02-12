const body = document.querySelector("body");

const IMG_NUMBER = 3;

function paintImage(imgNumber) {
  // const image = new Image();
  // image.src = `./img/${imgNumber + 1}.jpg`;
  // image.classList.add("bg-image");
  // body.prepend(image); ///이미지 로딩 확인용.

  const forUrl1 = `./img/${imgNumber + 1}.jpg`;
  const forUrl2 = `url(${forUrl1})`;

  body.style.backgroundImage = `${forUrl2}`;
  // body.style.backgroundImage = "url(`./img/${imgNumber + 1}.jpg`)";
}

function genRandom() {
  const number = Math.floor(Math.random() * IMG_NUMBER);
  return number;
}

function init() {
  const randomNumber = genRandom();
  paintImage(randomNumber);
  // body.style.backgroundImage = "url('./img/2.jpg')";
}

init();
