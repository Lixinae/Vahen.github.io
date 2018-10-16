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

	$('#menu').html('');
	$('#menu').append('<li class="menuElement"><a id="MenuIndex" href="Javascript:void(0);"> Accueil </a></li>');

	$('#menu').append('<li class="menuElement"><div class="dropdown"> <a id="MenuProjet" href="Javascript:void(0);"> Projets </a></div></li>');

	$('.dropdown').append('<div class="dropdown-content">');
	$('.dropdown-content').append('<a id="Menu2048" href="Javascript:void(0);"> 2048 </a></br>');
	$('.dropdown-content').append('<a id="MenuMrWheel" href="Javascript:void(0);"> Mr Wheel Adventure </a></br>');
	$('.dropdown-content').append('<a id="MenuPacman" href="Javascript:void(0);"> Pacman 3D </a></br>');
	$('.dropdown-content').append('<a id="MenuPlatform" href="Javascript:void(0);"> PlatformGame </a></br>');
	$('.dropdown').append('</div>');

	$('#menu').append('<li class="menuElement"><a id="MenuContact" href="Javascript:void(0);"> Contact </a></li>');
	$('#menu').append('<li class="menuElement"><a id="MenuWhoAmI" href="Javascript:void(0);"> Qui suis je ? </a></li>');	

}

/*
Charge une page sans recharger la page
*/
function createClickableLoadPage(id,url,title){
	$(id).on('click', function(e){
        e.preventDefault();
        $(".bodyContent").load(url + " .bodyContent");

		// Pour modifier l'url sans recharger
		if (history.pushState) {
			window.history.pushState("", title, url);
		} else {
			document.location.href = url;
		}
		if(title === "Projets"){
			location = location;
			location.reload();	
		}
    });
}