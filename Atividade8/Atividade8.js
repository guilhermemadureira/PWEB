let pesquisasCompleta = [];
let idade = 0;
let media = 0;
let mediaIdade = 0;
let opniao = 0;
let soma = 0;
let idadeMai = 0;
let idadeMen = 1000;
let contRuim = 0;
let contBomOtimo = 0;
let homem = 0;
let mulher = 0;

function pesquisa(idade, sexo,opniao){
    this.idade = parseInt(idade);
    this.sexo = sexo;
    this.opniao = opniao;
};

for(let i = 0; i < 3; i++){
    idade = prompt("Qual é a sua idade?");
    sexo = prompt("Qual é o seu sexo MASCULINO/M ou FEMININO/F?");
    alert("Qual é a sua opniao sobre o filme?");
    opniao = prompt("Otimo = 4 , Bom = 3, Regular = 2, Péssimo = 1");
    pesquisasCompleta.push(new pesquisa(idade,sexo,opniao));
}
pesquisasCompleta.forEach(element => {
    soma += element.idade;
    if(element.sexo == 'M'){
        homem++;
    }else if(element.sexo == 'F'){
        mulher++;
    }
    if(element.idade > idadeMai){
        idadeMai = element.idade;
    }
    if(element.idade < idadeMen){
        idadeMen = element.idade;
    }
    if(element.opniao == 1){
        contRuim++;
    }
    if(element.opniao == 3 || element.opniao == 4){
        contBomOtimo++;
    }
});
media = (contBomOtimo*100)/pesquisasCompleta.length;
mediaIdade= soma / pesquisasCompleta.length;
alert("A media de idade é " + mediaIdade.toFixed(2));
alert("A pessoa mais velha tem: " + idadeMai);
alert("A pessoa mais nova tem: " + idadeMen);
alert("A quantidade de pessoa que respodenram pessimo foi: " + contRuim);
alert("A porcetangem de pessoas que respoderam otimo ou bom foram " + media.toFixed(2) +"%");
alert("O numero de Homens que respoderam foi => " + homem + " e de Mulheres foi => " + mulher);

