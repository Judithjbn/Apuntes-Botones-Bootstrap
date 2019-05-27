function saltar()
{
    location.href="pagina2.html"; //Enlazar a otra página, no aconsejable mejor utilizar <a....><a/>
}
function trampa ()
{
    if (confirm("¿Está seguro de ir a Google"))
        {
            //Retorno true
            return true;
        }
    else
        {
            //Retorno false
            event.preventDefault(); //Anula el evento producido por un usuario
            return false;

            // location.href="http://www.yahoo.com"; // Si quieres reedirigir la página.
        }

}

function Numeros(string)
{
    //Solo numeros
	var out = '';
    var filtro = '1234567890'; //Caracteres validos

	//Recorrer el texto y verificar si el caracter se encuentra en la lista de validos
    for (var i=0; i<string.length; i++)
       if (filtro.indexOf(string.charAt(i)) != -1)
		   //Se añaden a la salida los caracteres validos
		   out += string.charAt(i);

	//Retornar valor filtrado
    return out;
}
