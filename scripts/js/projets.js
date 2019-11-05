
//import {createClickableLoadPage} from "menu";

$(document).ready(function(){
	$.getScript("menu.js", function() {
		createClickableLoadPage('#Link2048',"/pages/projets/2048.html","2048");
		//createClickableLoadPage('#LinkMrWheelAdventure',"/pages/projets/MrWheelAdventure.html","MrWheelAdventure");
		createClickableLoadPage('#LinkPacman',"/pages/projets/Pacman3d.html","Pacman3D");
		createClickableLoadPage('#LinkPlatformGame',"/pages/projets/PlatformGame.html","PlatformGame");
		createClickableLoadPage('#LinkRaytracer',"/pages/projets/Raytracer.html","Raytracer");
		createClickableLoadPage('#LinkWebcrawler',"/pages/projets/Webcrawler.html","Webcrawler");
		//createClickableLoadPage('#LinkAnimationPython',"/pages/projets/AnimationPython.html","AnimationPython");
	});

	
	$('.projects').html("");
	// todo : Ajouter le reste des arguments, description, langages, fichier image
	projetMiniature("2048","","Java");
	//projetMiniature("MrWheelAdventure","","Unity, C#");
	projetMiniature("Pacman 3D","","C++, OpenGL3+");
	projetMiniature("PlatformGame","","Unity, C#");
	projetMiniature("Raytracer","","C++, SDL1.2");
	projetMiniature("Webcrawler","","Python");
	//projetMiniature("AnimationPython","","Python");
});

function projetMiniature(titre, description="", langages="", imageLocation=""){
	
	var output = "<div class=\"content\">"
				+ "<div class=\"projectImage\">"
				//+ "<img src=\"/content/"+imageLocation+"\">"
				+ "</div>"
				+ "<div class=\"projectTitleDesc\">"
				+ "<h4>"+ titre +"</h4>"	
				+ "<p>" + description + "</p>"
				+ "<p>" + langages + "</p>"
				+ "<a class=\"projectLink\" id=\"Link"+titre+"\" href=\"Javascript:void(0);\"> Details </a>"
				+ "</div>"
				+ "</div>" ;
	
	$('.projects').append(output);
}