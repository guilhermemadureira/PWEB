function validarDados() {
            
    var radio = document.forms.formulario1.elements.converte.value;
    var texto = document.forms.formulario1.elements.idLetra.value;

    if (texto == ""){
        alert("Não possui nada no texto");
        return 0;
    }
    if(radio == 1){
        texto = texto.toUpperCase();
    }else if (radio ==2){
        texto = texto.toLowerCase();
    }else{
        alert("Selecione um dos radios buttons");
        return 0;
    }

    document.forms.formulario1.elements.idLetra.value = texto;
    return 0;
}