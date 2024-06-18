class Conta{
    numeroDaConta: number;
    saldo: number = 0;
    
    constructor(numeroDaConta: number){
        this.numeroDaConta = numeroDaConta;
    }
}

class ContaSalario extends Conta {
    depositar(valor: number){
        this.saldo +=valor;
    }
}

interface ITrasacional {
    transferir:(valor: number, destinatario: Conta) =>boolean;  
    taxaTransaferencia: number;
}

class ContaCorrente extends Conta implements ITrasacional {
    transferir(valor: number, destinatario: Conta) {
        destinatario.saldo += (valor - this.taxaTransaferencia);
        return true;
    };
    taxaTransaferencia: number = 0;

}