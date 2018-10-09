$(document).ready(function(){
	showMenu();
	createClickableLoadPage('#MenuIndex',"/index.html","Accueil");
	createClickableLoadPage('#MenuProjet',"/pages/Projets.html","Projets");
	createClickableLoadPage('#Menu2048',"/pages/projets/2048.html","2048");
	createClickableLoadPage('#MenuMrWheel',"/pages/projets/MrWheelAdventure.html","MrWheelAdventure");
	createClickableLoadPage('#MenuPacman',"/pages/projets/Pacman3d.html","Pacman3D");
	createClickableLoadPage('#MenuPlatform',"/pages/projets/PlatformGame.html","PlatformGame");
	createClickableLoadPage('#MenuContact',"/pages/Contact.html","Contact");
	createClickableLoadPage('#MenuWhoAmI',"/pages/WhoAmI.html","WhoAmI");
});

/*
Affiche le menu
*/
function showMenu(){
	
$('#menu').append('<a id="MenuIndex" class="menuElement" href="Javascript:void(0);"> Accueil </a>');
$('#menu').append('<div class="dropdown"> <a id="MenuProjet" class="menuElement" href="Javascript:void(0);"> Projets </a></div>');

$('.dropdown').append('<div class="dropdown-content">');
$('.dropdown-content').append('<a id="Menu2048" href="Javascript:void(0);"> 2048 </a></br>');
$('.dropdown-content').append('<a id="MenuMrWheel" href="Javascript:void(0);"> Mr Wheel Adventure </a></br>');
$('.dropdown-content').append('<a id="MenuPacman" href="Javascript:void(0);"> Pacman 3D </a></br>');
$('.dropdown-content').append('<a id="MenuPlatform" href="Javascript:void(0);"> PlatformGame </a></br>');
$('.dropdown').append('</div>');

$('#menu').append('<a id="MenuContact" class="menuElement" href="Javascript:void(0);"> Contact </a>');

$('#menu').append('<a id="MenuWhoAmI" class="menuElement" href="Javascript:void(0);"> Qui suis je ? </a>');	
	
}

/*
Charge une page sans recharger la page
*/
function createClickableLoadPage(id,url,title){
	$(id).on('click', function(e){
        e.preventDefault();
        $("#content").load(url);
		// Pour modifier l'url sans recharger
		/*if (history.pushState) {
			window.history.pushState("", title, url);
		} else {
			document.location.href = url;
		}*/
    });

}