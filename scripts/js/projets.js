$(document).ready(function(){
	createClickableLoadPage('#Content2048',"/pages/projets/2048.html","2048");
	createClickableLoadPage('#ContentMrWheel',"/pages/projets/MrWheelAdventure.html","MrWheelAdventure");
	createClickableLoadPage('#ContentPacman',"/pages/projets/Pacman3d.html","Pacman3D");
	createClickableLoadPage('#ContentPlatform',"/pages/projets/PlatformGame.html","PlatformGame");
	alert("plop");
});

/*
Copie de la fonction dans menu js -> doit etre changé plus tard
*/
function createClickableLoadPage(id,url,title){
	$(id).on('click', function(e){
        e.preventDefault();
        $(" .bodyContent").load(url + " .bodyContent");
		// Pour modifier l'url sans recharger
		if (history.pushState) {
			window.history.pushState("", title, url);
		} else {
			document.location.href = url;
		}
    });
}