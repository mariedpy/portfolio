		// div#top-nav

function menuBurger(){

let menuIcon = document.getElementById('nav-icon'); // div#nav-icon [hamburger and close icon, svg] 
		let topNav = document.getElementById('list-flex');
		// when hamburger icon is clicked
		menuIcon.addEventListener('click', function(){
			// div#top-nav add class .nav-active
			topNav.classList.toggle('nav-active');
			// change menu icon from menu-ham-black to menu-close-black.svg (in CSS background)
			menuIcon.classList.toggle('menu-close');
		});