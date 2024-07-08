function encriptarTexto(){
    
    let textoInicial = document.getElementById('seccion__texto__input').value;
    
    let encriptarTexto = textoInicial
    .replace(/e/gi, "enter")
    .replace(/i/gi, "imes")
    .replace(/a/gi, "ai")
    .replace(/o/gi, "ober")
    .replace(/u/gi, "ufat")

    if (textoInicial.length !=0){
        textoInicial = encriptarTexto;
    }

    document.getElementById('seccion__encriptado__parrafo').innerHTML = encriptarTexto;

    
    document.querySelector('.seccion__imagen__img').style.display="none";
    document.querySelector('.seccion__imagen__mensaje').style.display="none";
    document.querySelector('.seccion__imagen__titulo').style.display="none";
    document.querySelector('.seccion__encriptado').style.display="flex";
}



function desencriptarTexto(){

    let textoInicial = document.getElementById('seccion__texto__input').value;


    let desencriptarTexto = textoInicial
    .replace(/enter/gi, "e")
    .replace(/imes/gi, "i")
    .replace(/ai/gi, "a")
    .replace(/ober/gi, "o")
    .replace(/ufat/gi, "u")

    if (textoInicial.length !=0){
        textoInicial = desencriptarTexto;
    }

    document.getElementById('seccion__encriptado__parrafo').innerHTML = desencriptarTexto;

    document.querySelector('.seccion__imagen__img').style.display="none";
    document.querySelector('.seccion__imagen__mensaje').style.display="none";
    document.querySelector('.seccion__imagen__titulo').style.display="none";
    document.querySelector('.seccion__encriptado').style.display="flex";
}



function copy() {
    let copyText = document.querySelector("#seccion__encriptado__parrafo");
    let range = document.createRange();
    range.selectNode(copyText);
    window.getSelection().removeAllRanges(); // Eliminar cualquier selección 
    window.getSelection().addRange(range);
    document.execCommand("copy");
}

document.querySelector(".seccion__encriptado__boton").addEventListener("click", copy);




