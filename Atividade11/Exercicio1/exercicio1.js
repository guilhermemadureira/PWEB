function retangulo(x,y){
    this.base = x;
    this.altura=y;
    this.calculaArea = function(){
        return this.base * this.altura;
    }
}

var MyRetangulo = new retangulo(10,20);
var calculaArea = MyRetangulo.calculaArea();
alert(calculaArea);
