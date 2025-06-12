function modProp(){
    var gif = document.getElementById("gif")
    var styleCss= document.querySelector(".box3")// el querySelector no lleva all porque la clase solo esta aplicando a Ejemplo Item 3
    
    var opcs = document.getElementsByName("modificar")
    for (let i = 0; i < opcs.length; i++) {
        if (opcs[i].checked == true){
            switch (opcs[i].value) {
                case "borde":
                    styleCss.style.border ="10px ridge rgb(35, 14, 94)";
                    break;
                case "tamañoGif":
                    gif.style.width = "485px";
                    gif.style.height ="495px";
                    break;
                case "tipoFuente":
                    styleCss.style.fontFamily= "cursive";
                    break;
                case "colorA":
                    styleCss.style.color ="#11FF00"
                    break;   
                case "fondo":
                    styleCss.style.backgroundColor ="#0267D2"
                    break;         
                default:
                    break;     
            }
        }
        
    }
}

