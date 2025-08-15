import { Personagem } from "./Personagem";

const p: Personagem = new Personagem();
p.nome = "Edéciomir";
p.classe = "Monge";
p.raca = "Undead";
p.nivel = Math.floor(1+ Math.random() * 99)
p.arma = "Bodoque";
p.manaMaxima = 100;
p.manaAtual = p.manaMaxima;
p.vidaMaxima = 100;
p.vidaAtual = p.vidaMaxima;
p.poderAtaque = 1;

console.table(p);