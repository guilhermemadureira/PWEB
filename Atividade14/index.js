function validar() {

    if (document.forms.formulario1.elements.idNome.value == "" || document.forms.formulario1.elements.idNome.value.length <= 9) {
        alert("Preencha campo NOME corretamente!");
        document.forms.formulario1.elements["idNome"].focus();
        return false;
    };

    if (document.forms.formulario1.elements["idEmail"].value == "" || document.forms.formulario1.elements["idEmail"].value.indexOf('@') == -1 || document.forms.formulario1.elements["idEmail"].value.indexOf('.') == -1) {
        alert("Preencha campo E-MAIL corretamente!");
        document.forms.formulario1.elements.idEmail.focus();
        return false;
    }

    if (document.forms.formulario1.elements.idComentario.value == "" || document.forms.formulario1.elements.idComentario.value.length <= 19) {
        alert("É necessario preencher o campo Comentario com mais de 19 caracteres!");
        document.getElementById("idComentario").focus();
        return false;
    }

    var radio = document.forms.formulario1.elements.pesquisa.value;

    if(radio == 1){
        alert("Que bom que você voltou a visitar esta página!")
    }else if (radio ==2){
        alert("Volte sempre à está página!")
    }else{
        alert("Selecione um dos radios buttons");
        return false;
    }    
    return true;
}