// JavaScript source code

var content = document.querySelectorAll('li');
var menu = document.querySelector('.menu-bar');
var nav = document.querySelector('.navigator');
var showProject = document.querySelector('.btn-project');
var showCustomer = document.querySelector('.btn-customers');
var dispProject = document.querySelector('.projects');
var dispCustomer = document.querySelector('.customers');
var header = document.querySelector('.header');
var bodyTop = document.querySelector('.statistics');
var bodyBottom = document.querySelector('.information')

nav.addEventListener("click", function () {

    if (screen.width <= 768) {
        menu.classList.toggle('display');
    }

    else if (screen.width > 768) {
        menu.classList.toggle('toggle');
        header.classList.toggle('header-width');
        bodyTop.classList.toggle('shift-page');
        bodyBottom.classList.toggle('shift-page');
    }
    
});

content.forEach(function(el) {
    el.addEventListener('click', function () {

        menu.querySelector('.active').classList.remove('active');

        el.classList.add('active');

    });
});

showProject.addEventListener("click", function () {
    dispProject.classList.toggle('hide-content');
});

showCustomer.addEventListener("click", function () {
    dispCustomer.classList.toggle('hide-content');
});



