// Script for navigation bar
const nav = document.querySelector('nav');
const menu = nav.querySelector('.menu');
const navLinks= nav.querySelector('.nav-links');

menu.addEventListener('click', () => {
  if (navLinks.style.display === 'none'){
    navLinks.style.display = 'block';
    // document.body.style.overflowY= 'hidden'
  } 
  else {
    navLinks.style.display = 'none'
    // document.body.style.overflowY= 'scroll'
  } 
  
})