const images = [
"images/fifith cake.jpg",
"images/first cake.jpg",
"images/fourth cake.jpg",
"images/second cake.jpg",
"images/sixth cake.jpg",
"images/third cake.jpg"
];


const slider = document.getElementById("slider");
const status = document.getElementById("status");
let index = 0;


function wait(ms) {
return new Promise(resolve => setTimeout(resolve, ms));
}


async function changeImages() {
while (true) {
status.textContent = "Loading fresh pastries...";
await wait(800);


slider.src = images[index];
status.textContent = "Fresh item loaded!";


index = (index + 1) % images.length;
await wait(2500);
}
}


changeImages();