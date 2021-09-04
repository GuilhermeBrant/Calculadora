// JavaScript Document

function back()
{
    var resultado = document.getElementById('visualizacao').innerHTML;
    document.getElementById('visualizacao').innerHTML = resultado.substring(0, resultado.length -1);
}

function insert(num)
{
    var numero = document.getElementById('visualizacao').innerHTML
    if (numero === '0' && num !== '.') {
        document.getElementById('visualizacao').innerHTML = numero.substring(0, numero.length -1) + num
    } else {
    document.getElementById('visualizacao').innerHTML = numero + num;
    }
};

function clean()
{
    document.getElementById('visualizacao').innerHTML = "0";
}



function calcular()
{
    var resultado = document.getElementById('visualizacao').innerHTML;
    if(resultado)
        {
            document.getElementById('visualizacao').innerHTML = eval(resultado);
        }
        else
        {
                document.getElementById('visualizacao').innerHTML = "Nada..."
        }
}