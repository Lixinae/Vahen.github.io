

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