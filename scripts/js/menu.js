
$(document).ready(function() {
	showMenu();
});

/*
Affiche le menu
*/
function showMenu(){
	
$('#menu').append('<a class="menuElement" href="/index.html"> Accueil </a>');
$('#menu').append('<div class="dropdown"> <a class="menuElement" href="Projets.html"> Projets </a></div>');

$('.dropdown').append('<div class="dropdown-content">');
$('.dropdown-content').append('<a href="/projets/2048.html"> 2048 </a></br>');
$('.dropdown-content').append('<a href="/projets/MrWheelAdventure.html"> Mr Wheel Adventure </a></br>');
$('.dropdown-content').append('<a href="/projets/Pacman3d.html"> Pacman 3D </a></br>');
$('.dropdown-content').append('<a href="/projets/PlatformGame.html"> PlatformGame </a></br>');

$('.dropdown').append('</div>');

$('#menu').append('<a class="menuElement" href="Contact.html"> Contact </a>');

$('#menu').append('<a class="menuElement" href="WhoAmI.html"> Qui suis je ? </a>');	

	
}