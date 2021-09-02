// JavaScript Document

function insert(num)
{
    var numero = document.getElementById('visualizacao').innerHTML;
    document.getElementById('visualizacao').innerHTML = numero + num;
}

function clean()
{
    document.getElementById('visualizacao').innerHTML = "";
}

function back()
{
    var resultado = document.getElementById('visualizacao').innerHTML;
    document.getElementById('visualizacao').innerHTML = resultado.substring(0, resultado.length -1);
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