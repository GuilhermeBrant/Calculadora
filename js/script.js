// JavaScript Document



var soMa=document.querySelector('#soma').addEventListener('click', soma);

function soma(){
	var valor1=parseFloat(document.getElementById('numeros').value);
	var valor2=parseFloat(document.getElementById('numero').value);
	
	var calc= valor1 + valor2;
	
	document.getElementById('resultado').value= calc;
	
}

var subTracao=document.querySelector('#subtracao').addEventListener('click', subtracao);

function subtracao(){
	var valor1=parseFloat(document.getElementById('numeros').value);
	var valor2=parseFloat(document.getElementById('numero').value);
	
	var calc= valor1 - valor2;
	
	document.getElementById('resultado').value= calc;
	
}

var diviSao=document.querySelector('#divisao').addEventListener('click', divisao);

function divisao(){
	var valor1=parseFloat(document.getElementById('numeros').value);
	var valor2=parseFloat(document.getElementById('numero').value);
	
	var calc= valor1 / valor2;
	
	document.getElementById('resultado').value= calc;
	
}

var multiPlitacacao=document.querySelector('#multiplicacao').addEventListener('click', multi);

function multi(){
	var valor1=parseFloat(document.getElementById('numeros').value);
	var valor2=parseFloat(document.getElementById('numero').value);
	
	var calc= valor1 * valor2;
	
	document.getElementById('resultado').value= calc;
	
}