
$(document).ready(function(){
	/*
	createClickableLoadPage('#Link2048',"/pages/projets/2048.html","2048");
	createClickableLoadPage('#LinkMrWheel',"/pages/projets/MrWheelAdventure.html","MrWheelAdventure");
	createClickableLoadPage('#LinkPacman',"/pages/projets/Pacman3d.html","Pacman3D");
	createClickableLoadPage('#LinkPlatformGame',"/pages/projets/PlatformGame.html","PlatformGame");
	*/
	$('.projects').html("");
	// todo : Ajouter le reste des arguments, description, langages, fichier image
	projetMiniature("2048","","Java");
	projetMiniature("MrWheelAdventure","","Unity, C#");
	projetMiniature("Pacman 3D","","C++, OpenGL3+");
	projetMiniature("PlatformGame","","Unity, C#");
	projetMiniature("Raytracer","","C++, SDL1.2");
	projetMiniature("Webcrawler","","Python");
	projetMiniature("AnimationPython","","Python");
});

function projetMiniature(titre, description="", langages="", imageLocation=""){
	
	var output = "<div class=\"content\">"
				+ "<div class=\"projectImage\">"
				+ "<img src=\"/content/"+imageLocation+"\">"
				+ "</div>"
				+ "<div class=\"projectTitleDesc\">"
				+ "<h4>"+ titre +"</h4>"	
				+ "<p>" + description + "</p>"
				+ "<p>" + langages + "</p>"
				+ "<a class=\"projectLink\" href=\"Javascript:void(0);\"> Details </a>"
				+ "</div>"
				+ "</div>" ;
	
	$('.projects').append(output);
	/*
	$('.projects').append("<div class=\"content\">");
	$('.projects').append("<div class=\"projectImage\">");
	$('.projects').append("<img src=\"/content/"+imageLocation+"\">");
	$('.projects').append("</div>");
	$('.projects').append("<div class=\"projectTitleDesc\">");
	$('.projects').append("<h4>"+ titre +"</h4>");
	$('.projects').append("<p>" + description + "</p>" );
	$('.projects').append("<p>" + langages + "</p>" );
	$('.projects').append("<a class=\"projectLink\" href=\"Javascript:void(0);\"> Details </a>" );
	$('.projects').append("</div>");
	$('.projects').append("</div>");*/
}

			
/*
Copie de la fonction dans menu js -> doit etre changé plus tard
*/
/*function createClickableLoadPage(id,url,title){
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
}*/