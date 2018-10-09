$(document).ready(function(){
	$.getScript('menu.js', function(e){
		createClickableLoadPage('#Menu2048',"/pages/projets/2048.html","2048");
		createClickableLoadPage('#MenuMrWheel',"/pages/projets/MrWheelAdventure.html","MrWheelAdventure");
		createClickableLoadPage('#MenuPacman',"/pages/projets/Pacman3d.html","Pacman3D");
		createClickableLoadPage('#MenuPlatform',"/pages/projets/PlatformGame.html","PlatformGame");
	});	
});
