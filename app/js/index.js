const btmHamburger = document.querySelector('#btmHamburger');
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');
const hasfade = document.querySelector('.has-fade');
btmHamburger.addEventListener('click', function(){
  if(header.classList.contains('header_open')){
    header.classList.remove('header_open');
    overlay.classList.remove('fade-in');
    overlay.classList.add('fade-out');
    hasfade.classList.remove('has-in');
    hasfade.classList.add('has-out');
  }else{
    overlay.classList.remove('fade-out');
    overlay.classList.add('fade-in');
    hasfade.classList.add('has-in');
    hasfade.classList.remove('has-out');
    header.classList.add('header_open');
  }
  
});