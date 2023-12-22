randomNumber1 = Math.round((Math.random() * 5)+ 1);
randomNumber2 = Math.round((Math.random() * 5)+ 1);

const imagesPath1 = `./images/dice${randomNumber1}.png`;
const imagesPath2 = `./images/dice${randomNumber2}.png`;

document.querySelector(".img1").setAttribute("src", imagesPath1);
document.querySelector(".img2").setAttribute("src", imagesPath2);