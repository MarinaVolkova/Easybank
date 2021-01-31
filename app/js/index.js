const btmHamburger = document.querySelector('#btmHamburger');
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');
btmHamburger.addEventListener('click', function(){
  if(header.classList.contains('header_open')){
    header.classList.remove('header_open');
    overlay.classList.remove('fade-in');
    overlay.classList.add('fade-out');

  }else{
    overlay.classList.remove('fade-out');
    overlay.classList.add('fade-in');
    header.classList.add('header_open');
  }
  
});