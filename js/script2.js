var ventana;



function confirmarFechas(){
    var comienzo = document.getElementById("fechadeinicio").value;
    var fin= document.getElementById("fechadecierre").value;
        if (!comienzo || !fin){
        window.alert("rellena ambas casillas")
        return;
         }
    var fInicio = new Date(comienzo)
    var fcierre = new Date(fin)

        if (fInicio>fcierre){
        window.alert("¡Error! La fecha de inicio no puede ser mayor a la fecha de cierre")
        return;
        }
}



function verVentana(comienzo,fin){

    var opciones="left=100,top=100,width=650,height=450,toolbar=yes,menubar=yes";
    ventana = window.open('','calendario',opciones);

    var contenido = "<html><head><title>Fechas Programadas</title>";

    contenido += "<link href='https://cdn.jsdelivr.net/npm/bootstrap@5.3.6/dist/css/bootstrap.min.css' rel='stylesheet' integrity='sha384-4Q6Gf2aSP4eDXB8Miphtr37CMZZQ5oXLH2yaXMJ2w8e2ZtHTl7GptT4jmndRuHDT' crossorigin='anonymous'>";
    contenido += "<script src='https://cdn.jsdelivr.net/npm/bootstrap@5.3.6/dist/js/bootstrap.bundle.min.js' integrity='sha384-j1CDi7MgGQ12Z7Qab0qlWQ/Qqz24Gc6BM0thvEMVjHnfYGF0rmFCozFSxQBxwHKO' crossorigin='anonymous'></script>";
    contenido += "</head>";
    contenido += "<body class ='container p-3 mb-2 bg-secondary text-white'><center><h2>Fechas Programadas</h2><br/>";
    contenido += "<table class='table table-dark table-hover'><thead><tr><th>Fecha Inicio</th><td>Fecha Cierre</td></tr></thead><tbody>";
    ventana.document.write(contenido);


    ventana.document.write("<tr><td>"+comienzo+"</td>");
    ventana.document.write("<td>"+fin+"</td></tr>");

    contenido = "</tbody></table></center></body></html>";
    ventana.document.write(contenido);
    ventana.document.close();
};

function enviarFechas(){
    var comienzo = document.getElementById("fechadeinicio").value;
    var fin= document.getElementById("fechadecierre").value;
        if (!confirmarFechas()){
            verVentana(comienzo,fin);
        }
}


