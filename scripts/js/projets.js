$(document).ready(function(){
	$.getScript('menu.js', function(){
		createClickableLoadPage('#Menu2048',"/pages/projets/2048.html");
		createClickableLoadPage('#MenuMrWheel',"/pages/projets/MrWheelAdventure.html");
		createClickableLoadPage('#MenuPacman',"/pages/projets/Pacman3d.html");
		createClickableLoadPage('#MenuPlatform',"/pages/projets/PlatformGame.html")
		// script is now loaded and executed.
		// put your dependent JS here.
	});	
});
