let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
};
const sr = ScrollReveal ({
    distance: '65px' ,
    duration: 2600,
    delay: 450,
    reset: true

});
var nodeArray = [
  document.querySelector('.hero-text'),
  document.querySelector('#ABOUT-ME'),
];
 sr.reveal(nodeArray)
// sr.reveal('.hero-text', {delay:200, origin:'top'});

// sr.reveal('#ABOUT-ME', {delay:200, origin:'left'});



