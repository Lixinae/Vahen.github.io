
$(document).ready(function() {
	alert("hello");
	showMenu();
	alert("Finished");
})

/*
Affiche le menu
*/
function showMenu(){
	
$('.menu').append('</br>');	
$('.menu').append('<a href="https://vahen.github.io/Projets.html"> Projets </a>');
$('.menu').append('</br>');
$('.menu').append('<a href="https://vahen.github.io/Contact.html"> Contact </a>');
$('.menu').append('</br>');
$('.menu').append('<a href="https://vahen.github.io/WhoAmI.html"> Qui suis je ? </a>');	
$('.menu').append('</br>');
	
}