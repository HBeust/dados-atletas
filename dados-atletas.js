class Atleta {
  constructor(nome, idade, peso, altura, notas) {
    this.nome = nome;
    this.idade = idade;
    this.peso = peso;
    this.altura = altura;
    this.notas = notas;
  }

  obtemNomeAtleta() {
    return this.nome;
  }

  obtemIdadeAtleta() {
    return this.idade;
  }

  obtemPesoAtleta() {
    return this.peso;
  }

  obtemAlturaAtleta() {
    return this.altura;
  }

  obtemNotasAtleta() {
    return this.notas;
  }

  obtemCategoria() {
    return this.calculaCategoria();
  }

  obtemIMC() {
    return this.calculaIMC();
  }

  obtemMediaValida() {
    return this.calculaMediaValida();
  }

  calculaCategoria() {
    const idade = this.idade;

    if (idade >= 9 && idade <= 11) {
      return "Infantil";
    } else if (idade === 12 || idade === 13) {
      return "Juvenil";
    } else if (idade === 14 || idade === 15) {
      return "Intermediário";
    } else if (idade >= 16 && idade <= 30) {
      return "Adulto";
    } else {
      return "Sem categoria";
    }
  }

  calculaIMC() {
    return this.peso / (this.altura * this.altura);
  }

  calculaMediaValida() {
    //Ordena as notas
    let notasOrdenadas = this.notas.slice().sort((a, b) => a - b);

    //Remove a menor e a maior
    let notasComputadas = notasOrdenadas.slice(1, notasOrdenadas.length - 1);

    //Soma
    let soma = 0;
    notasComputadas.forEach(n => soma += n);

    //Média
    return soma / notasComputadas.length;
  }
}

const atleta = new Atleta(
  "Cesar Abascal",
  30,
  80,
  1.70,
  [10, 9.34, 8.42, 10, 7.88]
);

console.log(`Nome: ${atleta.obtemNomeAtleta()}`);
console.log(`Idade: ${atleta.obtemIdadeAtleta()}`);
console.log(`Peso: ${atleta.obtemPesoAtleta()}`);
console.log(`Altura: ${atleta.obtemAlturaAtleta()}`);
console.log(`Notas: ${atleta.obtemNotasAtleta().join(",")}`);
console.log(`Categoria: ${atleta.obtemCategoria()}`);
console.log(`IMC: ${atleta.obtemIMC()}`);
console.log(`Média válida: ${atleta.obtemMediaValida()}`);