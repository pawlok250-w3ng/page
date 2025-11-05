
const hamburger = document.querySelector('.menu-open');
hamburger.addEventListener('click', showMenu);
const x_button = document.querySelector('.menu-close');
x_button.addEventListener('click', hideMenu);

const menu = document.querySelector('.menu');
function showMenu()
{
document.querySelector('.menu').style.display = 'block';
	document.querySelector('.menu-open').style.display="none";
	document.querySelector('.menu-close').style.display="block";
}

function hideMenu()
{
document.querySelector('.menu').style.display = 'none';
	document.querySelector('.menu-open').style.display="block";
	document.querySelector('.menu-close').style.display="none";
}

window.addEventListener('resize', menuOnResize);

function menuOnResize() {
	
	let header_width = window.innerWidth ||
	docuemnt.documentElement.clientWidth ||
	document.body.clientWidth;
	
	if(header_width > 750){
		menu.style.display = 'block';
		x_button.style.display = 'none';
		hamburger.style.display = 'none';
		
		
	}else
	{
	  	menu.style.display = 'none';
		x_button.style.display = 'none';
		hamburger.style.display = 'block';
	}
	
	
	
	
	
}

document.body.addEventListener('click', function(e) {
	
	if (!e.target.closest('.menu-open'))
	{
		let header_width = window.innerWidth ||
		document.documentElement.clientWidth ||
		document.body.clientWidth;
		
		if (header_width <= 750) hideMenu();


	}		
	
	
	
});
	
	
	