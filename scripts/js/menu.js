

/*
Affiche le menu
*/
function showMenu(){
	
$('#menu').append('<a id="MenuIndex" class="menuElement" href="/index.html"> Accueil </a>');
$('#menu').append('<div class="dropdown"> <a id="MenuProjet" class="menuElement" href="/pages/Projets.html"> Projets </a></div>');

$('.dropdown').append('<div class="dropdown-content">');
$('.dropdown-content').append('<a id="Menu2048" href="/pages/projets/2048.html"> 2048 </a></br>');
$('.dropdown-content').append('<a id="MenuMrWheel" href="/pages/projets/MrWheelAdventure.html"> Mr Wheel Adventure </a></br>');
$('.dropdown-content').append('<a id="MenuPacman" href="/pages/projets/Pacman3d.html"> Pacman 3D </a></br>');
$('.dropdown-content').append('<a id="MenuPlatform" href="/pages/projets/PlatformGame.html"> PlatformGame </a></br>');
$('.dropdown').append('</div>');

$('#menu').append('<a id="MenuContact" class="menuElement" href="/pages/Contact.html"> Contact </a>');

$('#menu').append('<a id="MenuWhoAmI" class="menuElement" href="/pages/WhoAmI.html"> Qui suis je ? </a>');	
	
}

/*
Charge une page sans recharger la page
*/
function createClickableLoadPage(id,url){
	$(id).on('click', function(e){
        e.preventDefault();
        console.log('test');
        $("#content").load(url);
    });
	
}