// Definindo a classe Heroi
class Heroi {
    constructor(nome, idade, tipo) {
      this.nome = nome;
      this.idade = idade;
      this.tipo = tipo;
    }
  
    atacar() {
      let ataque = "";
  
      // Definindo o tipo de ataque com base no tipo do herói
      switch (this.tipo) {
        case "mago":
          ataque = "usou magia";
          break;
        case "guerreiro":
          ataque = "usou espada";
          break;
        case "monge":
          ataque = "usou artes marciais";
          break;
        case "ninja":
          ataque = "usou shuriken";
          break;
        default:
          ataque = "usou um ataque genérico";
      }
  
      // Exibindo a mensagem de ataque
      console.log(`O ${this.tipo} ${this.nome} atacou usando ${ataque}`);
    }
  }
  
  // Exemplo de utilização das classes
  const heroiMago = new Heroi("Gandalf", 1500, "mago");
  const heroiGuerreiro = new Heroi("Aragorn", 35, "guerreiro");
  
  heroiMago.atacar(); // Saída: O mago Gandalf atacou usando magia
  heroiGuerreiro.atacar(); // Saída: O guerreiro Aragorn atacou usando espada
  