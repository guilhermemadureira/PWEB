let lista = new Array(3);

function RetornaMaior(p1,p2,p3){
    if(p1 > p2 && p1 > p3){
        return(p1);
    }
    else if(p2 > p1 && p2 > p3){
        return(p2);
    }else{
        return(p3);
    }
}

function Organizar(or1,or2,or3){
    let aux = 0;
    if(or1 > or2 && or1 > or3){
        lista[0] = or1;
        if(or2 > or3){
            lista[1] = or2;
            lista[2] = or3;
        }else{
            lista[1] = or3;
            lista[2] = or2;
        }
        
    }
    else if(or2 > or1 && or2 > or3){
        lista[0] = or2;
        if(or1 > or3){
            lista[1] = or1;
            lista[2] = or3;
        }else{
            lista[1] = or3;
            lista[2] = p1;
        }
    }else{
        lista[0] = or3;
        if(or1 > or2){
            lista[1] = or1;
            lista[2] = or2;
        }else{
            lista[1] = or2;
            lista[2] = or1;
        }
    }
    return lista;
}

alert("O maior é => " + RetornaMaior(10,20,30));
alert("Ordem crescente é => " + Organizar(9,5,10));