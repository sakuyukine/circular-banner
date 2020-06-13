// JavaScript Document
window.onload = rotate;
var thisAd = 0;
function rotate() {
var adImages = new Array("pic1.jpg","pic2.jpg","pic3.jpg","pic4.jpg","pic5.jpg");
thisAd++;
if (thisAd === adImages.length) {
thisAd = 0;
}
document.getElementById("Banner").src = adImages[thisAd];
setTimeout(rotate, 5 * 1000);
}