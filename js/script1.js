

function cargaSelect() {

    var elergirEdad = document.getElementsByName("edad")[0]
    for (let i = 18; i <= 140; i++){
        var opt = document.createElement("option");
        opt.text = i;
        opt.value = i;
        elergirEdad.add(opt);
    }   
    }



function matricula(){
document.getElementById("validar").addEventListener('submit', function(event) {

let errores = [];
let nombre = document.getElementById('cajatexto1').value;
let rut = document.getElementById('cajatexto2').value;
let edad = document.getElementById('edad').value;
let checkone = document.getElementById('ckeck1').checked;
let checktwo = document.getElementById('check2').checked;


if (nombre === '') {
errores.push('El campo Nombre es obligatorio.');
}
if (rut === '') {
errores.push('El campo Rut es obligatorio.');
}
if (edad === '0') {
errores.push('El campo Edad es obligatorio.');
}
if (!checkone) { // si no es checkone (resulta ser verdadero)
errores.push('El campo check es obligatorio.');
}
if (!checktwo) { // si no es checktwo ( resulta ser verdadero)
errores.push('El campo check es obligatorio.');
}
if (errores.length > 0) {
event.preventDefault();
document.getElementById('errores').innerHTML = errores.
join('<br>');
window.alert('¡Error!, debe llenar todos los campos  '+ errores)}
else{
    window.alert('¡Felicidades, Usted se ha Matriculado Exitosamente!')
}
});
}

