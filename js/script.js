let navbar = document.querySelector('.header .flex .navbar');

document.querySelector('#menu-btn').onclick = () =>{
  navbar.classList.toggle('active');
}

window.onscroll = () =>{
  navbar.classList.remove('active');
}


document.querySelectorAll('input[type="number"]').forEach(inputNumber => {
   inputNumber.oninput = () =>{
      if(inputNumber.value.length > inputNumber.maxLength) inputNumber.value = inputNumber.value.slice(0, inputNumber.maxLength);
   };
});

// script.js dosyası
// Aktif sayfayı belirlemek için JavaScript kullanımı
var currentLocation = window.location.href;
var navLinks = document.querySelectorAll('.navbar a');

for (var i = 0; i < navLinks.length; i++) {
  if (navLinks[i].href === currentLocation) {
    navLinks[i].classList.add('active');
    break;
  }
}
AOS.init({
  duration: 400,
  delay: 200,
});




