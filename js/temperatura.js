$(document).ready(function(){
	

	var temperatura_dia = $('.temperatura-dia');
	var temperatura_noche = $('.temperatura-noche');

	/*  Sacar .d-mercurio y .texto-temperatura desde las clases 'temperatura'
		Para .d-mercurio, los valores extremos son:
		 50°C 	= top: 10px
		 0°C 	= top: 140px

		 cada grado equivale a 2.8px

		por lo tanto, para una temperatura de 21°C, 
		el equivalente en top sería top: 58.8px

	*/

	/* Obtener un valor random entre 0 y 50*/
	var grados_dia = Math.floor((Math.random() * 100)/2 + 1);
	var grados_noche = Math.floor((Math.random() * 100)/2 + 1);

	/* Obtener el equivalente en pixeles de 'grados'*/
	var pixeles_dia = 140 - Math.floor((grados_dia * 2.8));
	var pixeles_noche = 140 - Math.floor((grados_noche * 2.8));

	/* Cambiar el texto de la temperatura con respecto a 'grados'*/
	var texto_dia = temperatura_dia.find('.texto-temperatura');
	var texto_noche = temperatura_noche.find('.texto-temperatura');
	texto_dia.text(grados_dia + '°C');
	texto_noche.text(grados_noche + '°C');

	/* Cambiar la altura del mercurio con respecto a 'pixeles'*/
	var mercurio_dia = temperatura_dia.find('.d-mercurio');
	var mercurio_noche = temperatura_noche.find('.d-mercurio');
	mercurio_dia.css('top', pixeles_dia + 'px');
	mercurio_noche.css('top', pixeles_noche + 'px');

	



});