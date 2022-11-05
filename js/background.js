const body = document.querySelector("body");

function changeImg(randomNum) {
    const image = new Image();
    image.src = `img/${randomNum}.jpg`;
    image.classList.add("bgImg");
    body.appendChild(image);
}
function init() {
    const IMG_NUM = 3;
    changeImg(Math.floor(Math.random() * IMG_NUM) + 1);
}

init();
