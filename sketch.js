var towerImg, tower;
var doorImg, door, doorsGroup;
var climberImg, climber, climbersGroup;
var ghost, ghostImg;
var invisibleBlockGroup, invisibleBlock;
var gameState = "play";

function preload() {
  towerImg = loadImage("tower.png");
  doorImg = loadImage("door.png");
  climberImg = loadImage("climber.png");
  ghostImg = loadImage("ghost-standing.png");
  spookySound = loadSound("spooky.wav");
}

function setup() {
  createCanvas(600, 600);

  //  REPRODUCIR spookySound EN CICLO (O LOOP)
  

  //  INICIALIZAR TOWER CON SPRITE DE 300 X 300, AGREGAR SU IMAGEN Y DAR VELOCIDAD EN Y DE 1
  
  
  

  //  INICIALIZAR COMO NUEVOS GRUPOS doorsGroup, climbersGroup E invisibleBlockGroup



  
  //  CONFIGURAR SPRITE PARA GHOST



}

function draw() {
  background(200);

  if (gameState === "play") {
    //  PROGRAMAR LAS FLECHAS A LA IZQUIERDA Y A LA DERECHA, Y EL ESPACIO PARA SALTAR
    
    
    
    
    
    
    
    
    
    //  HACER CAER AL FANTASMA
    

    //  NO PERMITIR QUE LA TORRE SALGA DEL MAPA POR ABAJO
    
    
    
    //  APARECER PUERTAS
    

    //  DETENER FANTASMA SI CHOCA CON ALGUNA CONSTRUCCIÓN DEL GRUPO
    
    
    
    //  DESTRUIR FANTASMA Y TERMINAR EL JUEGO SI EL FANTASMA SE CAE O SI TOCA UN OBSTÁCULO INVISIBLE
    
    
    
    
  }
  //  CONFIGURAR ESTADO DE JUEGO "end"
  
  
  
  
  
  
  
  drawSprites();
}

//  FUNCIÓN PARA APARECER PUERTAS EN LA TORRE
function spawnDoors() {
  if (frameCount % 240 === 0) {
    //  DECLARAR VARIABLES PARA door Y climber
    
    

    //  DECLARAR Y invisibleBlock Y CONFIGURAR SU ANCHO DEL TAMAÑO DE climber Y SU ALTO EN 2
    
    
    
    
    //  CONFIGURAR LA POSICIÓN EN X DE door, climber E invisibleBlock EN EL MISMO LUGAR ALEATORIO
    
    
    
    
    //  CONFIGURAR LA POSICIÓN EN Y en 1 PARA door, climber E invisibleBlock
    
    
    
    
    //  AGREGAR IMÁGENES PARA door Y climber
    
    
    
    //  INTERCAMBIAR depth DE ghost Y door, QUEREMOS QUE LA DE ghost SEA LA MAYOR
    
    
    
    //  ASIGNAR TIEMPO DE VIDA DE 800 A LOS SPRITES
    
    
    

    //  AGREGAR door, climber E invisibleBlock AL GRUPO CORRESPONDIENTE
    
    
    

    //  AGREGAR debud A invisibleBlock
    
  }
}
