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