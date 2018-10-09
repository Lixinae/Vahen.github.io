$(document).ready(function(){
	createClickableLoadPage('#Menu2048',"/pages/projets/2048.html","2048");
	createClickableLoadPage('#MenuMrWheel',"/pages/projets/MrWheelAdventure.html","MrWheelAdventure");
	createClickableLoadPage('#MenuPacman',"/pages/projets/Pacman3d.html","Pacman3D");
	createClickableLoadPage('#MenuPlatform',"/pages/projets/PlatformGame.html","PlatformGame");
});

/*
Copie de la fonction dans menu js -> doit etre changé plus tard
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