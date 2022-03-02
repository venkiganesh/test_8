function openmenu() {
  let x = document.getElementById('navbartoggle');
  x.style.animation="navopen 0.2s  forwards linear";

}
function closemenu() {
  let x = document.getElementById('navbartoggle');
  x.style.animation="navclose 0.2s  forwards linear";
}

function searchclick() {
  let x = document.getElementById('navbar');
  x.style.animation="navup 0.2s  forwards linear";
  let y = document.getElementById('search-bar');
  y.style.animation="searchup 0.2s  forwards linear";
  let z = document.getElementById('close2');
  z.style.visibility="visible";

}
function searchclick2() {
  let x = document.getElementById('navbar');
  x.style.animation="navdown 0.2s  forwards linear";
  let y = document.getElementById('search-bar');
  y.style.animation="searchdown  0.2s  forwards linear";
  let z = document.getElementById('close2');
  z.style.visibility="hidden";

}
