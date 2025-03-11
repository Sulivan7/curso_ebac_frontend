function Veiculo (rodas, motor, combustivel) {
    this.rodas = rodas;
    this.motor = motor;
    this.combustivel = combustivel;
    this.ligar = function() {
        console.log('O veículo ligou');
    }
    this.desligar = function() {
        console.log('O veículo desligou');
    }
}

function Carro (rodas, motor, combustivel, portas, janelas) {
    Veiculo.call(this, rodas, motor, combustivel);
    this.portas = portas;
    this.janelas = janelas;
}

function Hb20 (rodas, motor, combustivel, portas, janelas, marca, ano) {
    Carro.call(this, rodas, motor, combustivel, portas, janelas);
    this.marca = marca;
    this.ano = ano;
}

const carroDaLaura = new Hb20(4, '1.6', 'gasolina', 4, 4, 'Hyundai', 2015);
const carroDoJoao = new Hb20(4, '10', 'gasolina', 4, 4, 'Hyundai', 2018);

function Moto (rodas, motor, combustivel, capacete,) {
    Veiculo.call(this, rodas, motor, combustivel);
    this.capacete = capacete;
}

function Biz (rodas, motor, combustivel, capacete, marca, ano) {
    Moto.call(this, rodas, motor, combustivel, capacete);
    this.marca = marca;
    this.ano = ano;
}

const motoDoJoao = new Biz(2, '125cc', 'gasolina', 'fechado', 'Honda', 2018);
const motoDaLarissa = new Biz(2, '125cc', 'gasolina', 'fechado', 'Honda', 2015);

function Pessoa (nome, idade) {
    this.nome = nome;
    this.idade = idade;
    this.habilitacao = function() {
        if (idade >= 18) {
            console.log(`Legal ${this.nome} Você Tem Habilitação`);
        }else {
            console.log(`Que pena ${this.nome} Você não pode ter habilitação ainda`);
        }
    }
}

Object.freeze(Pessoa);

const laura = new Pessoa('Laura', 20);
const joao = new Pessoa('João', 15);
const larissa = new Pessoa('Larissa', 18);
const pedro = new Pessoa('Pedro', 17);

function Cliente (nome, idade, veiculoDoCliente) {
    Pessoa.call(this, nome, idade);
    this.veiculoDoCliente = veiculoDoCliente;
}

const clienteLaura = new Cliente(laura.nome, laura.idade, carroDaLaura);
const clienteJoao = new Cliente(joao.nome, joao.idade, motoDoJoao);
const clienteLarissa = new Cliente('Larissa', 18, motoDaLarissa);
const clientePedro = new Cliente('Pedro', 17, carroDoJoao);

console.log(clienteLaura);
carroDaLaura.ligar();
carroDaLaura.desligar();
clienteLaura.habilitacao();

console.log(clienteJoao);
motoDoJoao.ligar();
motoDoJoao.desligar();
clienteJoao.habilitacao();

console.log(clienteLarissa);
motoDaLarissa.ligar();
motoDaLarissa.desligar();
clienteLarissa.habilitacao();

console.log(clientePedro);
carroDoJoao.ligar();
carroDoJoao.desligar();
clientePedro.habilitacao();