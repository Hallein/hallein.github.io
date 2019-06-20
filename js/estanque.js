
function compuertaEntrada(elemento){
	var cnt = document.getElementById("count");
	var water = document.getElementById("water");
	var interval;

	if(elemento.checked && cnt.innerText < 100){
		loader('Abriendo compuerta de entrada');
	}else if(!elemento.checked && cnt.innerText >= 0){
		loader('Cerrando compuerta de entrada');
	}

	if(elemento.checked && cnt.innerText >= 0 && cnt.innerText < 100){

		interval = setInterval(function(){
			var percent = cnt.innerText;
		  	percent++;
			cnt.innerHTML = percent;
			water.style.transform = 'translate(0' + ',' + (100 - percent) + '%)';

			if(percent == 100 || !elemento.checked){
				clearInterval(interval);
				elemento.checked = false;
			} 

		},400);

	}else{
		//Bajar el flujo de la sección 2 (entrada)
		elemento.checked = false;
	}
}

function compuertaSalida(elemento){
	var cnt = document.getElementById("count");
	var water = document.getElementById("water");
	var interval;

	if(elemento.checked && cnt.innerText > 0){
		loader('Abriendo compuerta de salida');
	}else if(!elemento.checked && cnt.innerText > 0){
		loader('Cerrando compuerta de salida');
	}

	if(elemento.checked && cnt.innerText > 0 && cnt.innerText <= 100){

		interval = setInterval(function(){
			var percent = cnt.innerText;
		  	percent--;
			cnt.innerHTML = percent;
			water.style.transform = 'translate(0' + ',' + (100 - percent) + '%)';

			if(percent == 0 || !elemento.checked){
				clearInterval(interval);
				elemento.checked = false;
			} 

		},400);

	}else{
		//Bajar el flujo de la sección 2 (salida)
		elemento.checked = false;
	}
}

function loader(mensaje){
	$('#overlay-loader').fadeIn(400);
	$('#loader-message').text(mensaje);

	setTimeout(function(){			
	 	$('#overlay-loader').fadeOut(400);
	}, 2800);

}