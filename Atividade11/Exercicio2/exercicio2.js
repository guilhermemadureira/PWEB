class Conta{
    constructor(){
        this._nome;
        this._banco;
        this._numeroConta;
        this._saldo;
    }

    get nome(){
        return this._nome;
    }

    get banco(){
        return this._banco;
    }
    get numeroConta(){
        return this._numeroConta;
    }
    get saldo(){
        return this._saldo;
    }

    set nome(_nome){
        this._nome = _nome;
    }

    set banco(_banco){
        this._banco = _banco;
    }

    set numeroConta(_numeroConta){
        this._numeroConta = _numeroConta;
    }
    set saldo(_saldo){
        this._saldo = _saldo;
    }
}

class contaCorrente extends Conta{
    constructor(){
        super();
        this._saldoEspecial;
    }

    get saldoEspecial(){
        return this._saldoEspecial
    }

    set saldoEspecial(_saldoEspecial){
        this._saldoEspecial = _saldoEspecial;
    }
}

class contaPoupanca extends Conta{
    constructor(){
        super();
        this._juros;
        this._vencimento;
    }

    get juros(){
        return this._juros;
    }

    set juros(_juros){
        this._juros = _juros;
    }

    get vencimento(){
        return this._vencimento;
    }

    set vencimento(_vencimento){
        this._vencimento = _vencimento;
    }
}

var objPessoaContaCorrente = new contaCorrente();
var objpessoaContaPoupanca = new contaPoupanca();

objPessoaContaCorrente.nome = "Guilherme";
objPessoaContaCorrente.banco = 9584;
objPessoaContaCorrente.numeroConta = 1234;
objPessoaContaCorrente.saldo = 4000;
objPessoaContaCorrente.saldoEspecial = 1000;

objpessoaContaPoupanca.nome = "Jean";
objpessoaContaPoupanca.banco = 4543;
objpessoaContaPoupanca.numeroConta = 22315;
objpessoaContaPoupanca.saldo= 6000;
objpessoaContaPoupanca.juros = 13.75;

const d = new Date('2022-11-21');
let dia = d.getDate() + "/" + d.getMonth() + "/" + d.getFullYear();
objpessoaContaPoupanca.vencimento = dia;

alert("Nome => " + objPessoaContaCorrente.nome + ", Numero Banco => " + objPessoaContaCorrente.banco + 
      ", Numero Conta => " + objPessoaContaCorrente.numeroConta + ", Saldo => " + objPessoaContaCorrente.saldo + 
      ", Saldo do especial => " + objPessoaContaCorrente.saldoEspecial + ".");

alert("Nome => " + objpessoaContaPoupanca.nome + ", Numero Banco => " + objpessoaContaPoupanca.banco + 
      ", Numero Conta => " + objpessoaContaPoupanca.numeroConta + ", Saldo => " + objpessoaContaPoupanca.saldo + 
      ", Juros da poupança => " + objpessoaContaPoupanca.juros + ", Data vencimento => " + objpessoaContaPoupanca.vencimento + ".");

