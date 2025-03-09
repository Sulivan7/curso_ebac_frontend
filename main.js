function Carro (marca, modelo, ano, valor) {
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
    this.valor = valor;
}

const carroDoLucas = new Carro('Toyota', 'Corolla', 2025, 190000);
const carroDoSulivan = new Carro('Fiat', 'Uno', 2010, 15000);
const carroDaLaura = new Carro('Ford', 'Ka', 2015, 55000);

function Pessoa(nome, idade, habilitacao) {
    this.nome = nome;
    this.idade = idade;
    this.habilitacao = habilitacao;
}

const lucas = new Pessoa('Lucas', 25, 'Não');
const sulivan = new Pessoa('Sullivan', 30, 'AB');
const laura = new Pessoa('Laura', 20, 'B');

function Cliente(nome, idade, habilitacao, carro) {
    Pessoa.call(this, nome, idade, habilitacao);
    Carro.call(this, carro.marca, carro.modelo, carro.ano, carro.valor);
}

const clienteLucas = new Cliente(lucas.nome, lucas.idade, lucas.habilitacao, carroDoLucas);
const clienteSulivan = new Cliente(sulivan.nome, sulivan.idade, sulivan.habilitacao, carroDoSulivan);
const clienteLaura = new Cliente(laura.nome, laura.idade, laura.habilitacao, carroDaLaura);

console.log(clienteLucas);
console.log(clienteSulivan);
console.log(clienteLaura);