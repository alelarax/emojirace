let xJogador = [20, 20, 20, 20];
let yJogador = [50, 150, 250, 350];
let jogador = ["👻", "👾","◉‿◉", "🎡"];
let contagem = jogador.length;
let teclas = ["a", "s", "d", "f"];


function setup() {
  createCanvas(400, 400);
}

function draw(){
  defineTela();
  mostraJogadores();
  desenhaChegada();
  defineVencedor();
  
function defineTela(){
  if (focused == true){
     background("#9C27B0");}  
    else {
     background("#F8F8F8")
  }
}
function mostraJogadores(