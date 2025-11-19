// =================================================================
// === DECLARACIONES GLOBALES CORREGIDAS ===
// =================================================================

// 1. CORRECCIÓN: Usar 'let' y inicializar con la data del sprite A
let position = 0;
let puntosTotales = 50;
const Puntos = [];
const Puntos2 = [];
let velocidad = 1;
let SpriteMonster1 = []; // Ahora se inicializa más tarde
let SpriteMonster2 = [];

const pixelDataMonster1A = 
// ... (Toda tu matriz A) ...
[[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,"#030202","#030202","#030202","#030202",null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,"#030202","#1b8519","#1b8519","#1b8519","#1b8519","#030202",null,null,null,null,null,null,null],[null,null,null,null,null,null,null,"#030202","#b4c1b3","#1b8519","#1b8519","#b4c1b3","#030202",null,null,null,null,null,null,null],[null,null,null,null,null,null,null,"#030202","#000000","#1b8519","#1b8519","#000000","#030202",null,null,null,null,null,null,null],[null,null,null,null,null,null,"#030202","#1b8519","#1b8519","#1f6d1c","#1f6d1c","#1b8519","#1b8519","#030202",null,null,null,null,null,null],[null,null,null,null,null,null,"#030202","#030202","#1f6d1c","#154413","#154413","#1f6d1c","#030202","#030202",null,null,null,null,null,null],[null,null,null,null,"#030202","#030202","#6b6b6b","#6b6b6b","#6b6b6b","#1f6d1c","#1f6d1c","#6b6b6b","#6b6b6b","#6b6b6b","#030202","#030202",null,null,null,null],[null,null,null,"#030202","#8d918d","#8d918d","#8d918d","#8d918d","#8d918d","#6b6b6b","#6b6b6b","#8d918d","#8d918d","#8d918d","#8d918d","#8d918d","#030202",null,null,null],[null,null,"#030202","#8d918d","#8d918d","#8d918d","#8d918d","#8d918d","#8d918d","#8d918d","#8d918d","#8d918d","#8d918d","#8d918d","#8d918d","#8d918d","#8d918d","#030202",null,null],[null,null,"#030202","#8d918d","#8d918d","#8d918d","#8d918d","#8d918d","#8d918d","#8d918d","#8d918d","#8d918d","#8d918d","#8d918d","#8d918d","#8d918d","#8d918d","#030202",null,null],[null,null,null,"#030202","#8d918d","#8d918d","#8d918d","#8d918d","#8d918d","#8d918d","#8d918d","#8d918d","#8d918d","#8d918d","#8d918d","#8d918d","#030202",null,null,null],[null,null,null,null,"#030202","#030202","#8d918d","#8d918d","#8d918d","#030202","#030202","#8d918d","#8d918d","#8d918d","#030202","#030202",null,null,null,null],[null,null,null,null,"#000000","#1c8519","#030202","#030202","#030202",null,null,"#030202","#030202","#030202","#1c8519","#000000",null,null,null,null],[null,null,null,null,"#000000","#1c8519","#000000",null,null,null,null,null,null,"#000000","#1c8519","#000000",null,null,null,null],[null,null,null,"#000000","#000000","#1c8519","#000000",null,null,null,null,null,null,"#000000","#1c8519","#000000","#000000",null,null,null],[null,null,"#000000","#1c8519","#000000","#1c8519","#000000",null,null,null,null,null,null,"#000000","#1c8519","#000000","#1c8519","#000000",null,null],[null,null,null,"#000000","#1c8519","#1c8519","#000000",null,null,null,null,null,null,"#000000","#1c8519","#1c8519","#000000",null,null,null],[null,null,null,null,"#000000","#000000",null,null,null,null,null,null,null,null,"#000000","#000000",null,null,null,null],[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null]];
const pixelDataMonster1B = 
// ... (Toda tu matriz B) ...
[[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,"#000000","#000000","#000000","#000000",null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,"#000000","#b3c1b3","#1c8519","#1c8519","#1c8519","#000000",null,null,null,null,null,null,null,null],[null,null,null,null,null,"#000000","#1c8519","#1c8519","#000000","#1c8519","#1c8519","#1c8519","#000000",null,null,null,null,null,null,null],[null,null,null,null,null,"#000000","#1c8519","#1c8519","#1c8519","#1e6e1b","#1c8519","#1c8519","#000000",null,null,null,null,null,null,null],[null,null,null,null,null,"#000000","#b3c1b3","#1c8519","#1e6e1b","#144413","#1d6f1a","#1b8519","#1c8519","#000000",null,null,null,null,null,null],[null,null,null,null,null,null,"#000000","#000000","#144413","#1e6e1b","#1c8519","#1c8519","#1c8519","#000000",null,null,null,null,null,null],[null,null,null,null,"#030202","#030202","#6b6b6b","#6b6b6b","#6b6b6b","#1c8519","#1c8519","#6b6b6b","#6b6b6b","#6b6b6b","#030202","#030202",null,null,null,null],[null,null,null,"#030202","#8d918d","#8d918d","#8d918d","#8d918d","#8d918d","#6b6b6b","#6b6b6b","#8d918d","#8d918d","#8d918d","#8d918d","#8d918d","#030202",null,null,null],[null,null,"#030202","#8d918d","#8d918d","#8d918d","#8d918d","#8d918d","#8d918d","#8d918d","#8d918d","#8d918d","#8d918d","#8d918d","#8d918d","#8d918d","#8d918d","#030202",null,null],[null,null,"#030202","#8d918d","#8d918d","#8d918d","#8d918d","#8d918d","#8d918d","#8d918d","#8d918d","#8d918d","#8d918d","#8d918d","#8d918d","#8d918d","#8d918d","#030202",null,null],[null,null,null,"#030202","#8d918d","#8d918d","#8d918d","#8d918d","#8d918d","#8d918d","#8d918d","#8d918d","#8d918d","#8d918d","#8d918d","#8d918d","#030202",null,null,null],[null,null,null,null,"#030202","#030202","#8d918d","#8d918d","#8d918d","#030202","#030202","#8d918d","#8d918d","#8d918d","#030202","#030202",null,null,null,null],[null,null,null,"#000000","#1c8519","#1c8519","#030202","#030202","#030202",null,null,"#030202","#030202","#030202","#1c8519","#1c8519","#000000",null,null,null],[null,null,"#000000","#1c8519","#1c8519","#000000",null,null,null,null,null,null,null,null,"#000000","#1c8519","#1c8519","#000000",null,null],[null,"#000000","#000000","#1c8519","#000000",null,null,null,null,null,null,null,null,null,null,"#000000","#1c8519","#000000","#000000",null],["#000000","#1c8519","#000000","#1c8519","#000000",null,null,null,null,null,null,null,null,null,null,"#000000","#1c8519","#000000","#1c8519","#000000"],[null,"#000000","#1c8519","#1c8519","#000000",null,null,null,null,null,null,null,null,null,null,"#000000","#1c8519","#1c8519","#000000",null],[null,null,"#000000","#000000",null,null,null,null,null,null,null,null,null,null,null,null,"#000000","#000000",null,null],[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null]];
const pixelDataMonster1C =
[[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,"#030202","#030202","#030202","#030202",null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,"#030202","#1b8519","#1b8519","#1b8519","#1b8519","#030202",null,null,null,null,null,null,null],[null,null,null,null,null,null,null,"#030202","#b4c1b3","#1b8519","#1b8519","#b4c1b3","#030202",null,null,null,null,null,null,null],[null,null,null,null,null,null,null,"#030202","#000000","#1b8519","#1b8519","#000000","#030202",null,null,null,null,null,null,null],[null,null,null,null,null,null,"#030202","#1b8519","#1b8519","#1f6d1c","#1f6d1c","#1b8519","#1b8519","#030202",null,null,null,null,null,null],[null,null,null,null,null,null,"#030202","#030202","#1f6d1c","#154413","#154413","#1f6d1c","#030202","#030202",null,null,null,null,null,null],[null,null,null,null,"#030202","#030202","#6b6b6b","#6b6b6b","#6b6b6b","#1f6d1c","#1f6d1c","#6b6b6b","#6b6b6b","#6b6b6b","#030202","#030202",null,null,null,null],[null,null,null,"#030202","#8d918d","#8d918d","#8d918d","#8d918d","#8d918d","#6b6b6b","#6b6b6b","#8d918d","#8d918d","#8d918d","#8d918d","#8d918d","#030202",null,null,null],[null,null,"#030202","#8d918d","#8d918d","#8d918d","#8d918d","#8d918d","#8d918d","#8d918d","#8d918d","#8d918d","#8d918d","#8d918d","#8d918d","#8d918d","#8d918d","#030202",null,null],[null,null,"#030202","#8d918d","#8d918d","#8d918d","#8d918d","#8d918d","#8d918d","#8d918d","#8d918d","#8d918d","#8d918d","#8d918d","#8d918d","#8d918d","#8d918d","#030202",null,null],[null,null,null,"#030202","#8d918d","#8d918d","#8d918d","#8d918d","#8d918d","#8d918d","#8d918d","#8d918d","#8d918d","#8d918d","#8d918d","#8d918d","#030202",null,null,null],[null,null,null,null,"#030202","#030202","#8d918d","#8d918d","#8d918d","#030202","#030202","#8d918d","#8d918d","#8d918d","#030202","#030202",null,null,null,null],[null,null,null,"#000000","#000000","#1c8519","#030202","#030202","#030202",null,null,"#030202","#030202","#030202","#1c8519","#000000","#000000",null,null,null],[null,null,"#000000","#1c8519","#1c8519","#000000",null,null,null,null,null,null,null,null,"#000000","#1c8519","#1c8519","#000000",null,null],[null,null,"#000000","#1c8519","#000000",null,null,null,null,null,null,null,null,null,null,"#000000","#1c8519","#000000",null,null],[null,null,"#000000","#1c8519","#000000",null,null,null,null,null,null,null,null,null,null,"#000000","#1c8519","#000000",null,null],[null,null,"#000000","#1c8519","#000000",null,null,null,null,null,null,null,null,null,null,"#000000","#1c8519","#000000",null,null],[null,null,"#000000","#1c8519","#1c8519","#000000",null,null,null,null,null,null,null,null,"#000000","#1c8519","#1c8519","#000000",null,null],[null,null,null,"#000000","#000000",null,null,null,null,null,null,null,null,null,null,"#000000","#000000",null,null,null]];
const pixelDataMonster1D =
[[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null,null,null,"#000000","#000000","#000000","#000000",null,null,null,null,null],[null,null,null,null,null,null,null,null,null,"#000000","#000000","#1c8519","#1c8519","#b5c0b3","#1c8519","#000000",null,null,null,null],[null,null,null,null,null,null,null,null,"#000000","#1c8519","#1c8519","#1c8519","#000000","#1c8519","#1c8519","#1c8519","#000000",null,null,null],[null,null,null,null,null,null,null,"#000000","#1c8519","#1c8519","#1c8519","#1e6e1b","#1c8519","#1c8519","#1c8519","#b5c0b3","#000000",null,null,null],[null,null,null,null,null,null,"#000000","#1c8519","#1c8519","#1c8519","#1e6e1b","#164413","#1e6e1b","#1c8519","#000000","#1c8519","#000000",null,null,null],[null,null,null,null,null,null,"#000000","#1c8519","#1c8519","#1c8519","#1c8519","#1e6e1b","#164413","#1e6e1b","#1c8519","#000000",null,null,null,null],[null,null,null,null,"#030202","#030202","#6b6b6b","#6b6b6b","#6b6b6b","#1c8519","#1c8519","#6b6b6b","#6b6b6b","#6b6b6b","#030202","#030202",null,null,null,null],[null,null,null,"#030202","#8d918d","#8d918d","#8d918d","#8d918d","#8d918d","#6b6b6b","#6b6b6b","#8d918d","#8d918d","#8d918d","#8d918d","#8d918d","#030202",null,null,null],[null,null,"#030202","#8d918d","#8d918d","#8d918d","#8d918d","#8d918d","#8d918d","#8d918d","#8d918d","#8d918d","#8d918d","#8d918d","#8d918d","#8d918d","#8d918d","#030202",null,null],[null,null,"#030202","#8d918d","#8d918d","#8d918d","#8d918d","#8d918d","#8d918d","#8d918d","#8d918d","#8d918d","#8d918d","#8d918d","#8d918d","#8d918d","#8d918d","#030202",null,null],[null,null,null,"#030202","#8d918d","#8d918d","#8d918d","#8d918d","#8d918d","#8d918d","#8d918d","#8d918d","#8d918d","#8d918d","#8d918d","#8d918d","#030202",null,null,null],[null,null,null,null,"#030202","#030202","#8d918d","#8d918d","#8d918d","#030202","#030202","#8d918d","#8d918d","#8d918d","#030202","#030202",null,null,null,null],[null,null,null,null,"#000000","#1c8519","#030202","#030202","#030202",null,null,"#030202","#030202","#030202","#1c8519","#000000",null,null,null,null],[null,null,null,null,"#000000","#1c8519","#000000",null,null,null,null,null,null,"#000000","#1c8519","#000000",null,null,null,null],[null,null,null,null,"#000000","#1c8519","#000000",null,null,null,null,null,null,"#000000","#1c8519","#000000",null,null,null,null],[null,null,null,null,null,"#000000","#1c8519","#000000",null,null,null,null,"#000000","#1c8519","#000000",null,null,null,null,null],[null,null,null,null,null,"#000000","#1c8519","#1c8519","#000000",null,null,"#000000","#1c8519","#1c8519","#000000",null,null,null,null,null],[null,null,null,null,null,null,"#000000","#1c8519","#000000",null,null,"#000000","#1c8519","#000000",null,null,null,null,null,null],[null,null,null,null,null,null,null,"#000000","#000000",null,null,"#000000","#000000",null,null,null,null,null,null,null]];
const pixelDataMonster2A =
[[null,null,null,null,null,null,null,"#434724","#434724","#8026d9","#8026d9","#434724","#434724",null,null,null,null,null,null,null],[null,null,null,null,null,null,"#434724","#8026d9","#8026d9","#11ff00","#11ff00","#8026d9","#8026d9","#434724",null,null,null,null,null,null],[null,null,null,null,null,"#434724","#8026d9","#8026d9","#8026d9","#11ff00","#11ff00","#8026d9","#8026d9","#8026d9","#434724",null,null,null,null,null],[null,null,null,null,"#434724","#292796","#292796","#292796","#292796","#8026d9","#8026d9","#292796","#292796","#292796","#292796","#434724",null,null,null,null],[null,null,null,null,"#434724","#ce26d9","#cd26d9","#cd26d9","#292796","#cd26d9","#cd26d9","#292796","#cd26d9","#cd26d9","#ce26d9","#434724",null,null,null,null],[null,null,null,null,null,"#434724","#292796","#292796","#cd26d9","#292796","#292796","#cd26d9","#292796","#292796","#434724",null,null,null,null,null],[null,null,null,"#36635e","#36635e","#36635e","#36635e","#292796","#292796","#292796","#292796","#292796","#292796","#36635e","#36635e","#36635e","#36635e",null,null,null],[null,null,"#36635e","#5abfb3","#5abfb3","#5abfb3","#5abfb3","#36635e","#36635e","#afcac7","#afcac7","#36635e","#36635e","#5abfb3","#5abfb3","#5abfb3","#5abfb3","#36635e",null,null],[null,null,"#36635e","#5abfb3","#5abfb3","#5abfb3","#5abfb3","#5abfb3","#36635e","#000000","#000000","#36635e","#5abfb3","#5abfb3","#5abfb3","#5abfb3","#5abfb3","#36635e",null,null],[null,null,"#36635e","#5abfb3","#5abfb3","#5abfb3","#5abfb3","#5abfb3","#36635e","#36635e","#36635e","#36635e","#5abfb3","#5abfb3","#5abfb3","#5abfb3","#5abfb3","#36635e",null,null],[null,null,"#36635e","#5abfb3","#5abfb3","#5abfb3","#36635e","#36635e","#36635e","#36635e","#36635e","#36635e","#36635e","#36635e","#5abfb3","#5abfb3","#5abfb3","#36635e",null,null],[null,null,"#36635e","#5abfb3","#5abfb3","#5abfb3","#36635e",null,"#9a8b28","#9a8b28","#9a8b28","#9a8b28",null,"#36635e","#5abfb3","#5abfb3","#5abfb3","#36635e",null,null],[null,"#36635e","#36635e","#36635e","#36635e","#36635e","#36635e","#36635e","#9a8b28","#9a8b28","#9a8b28","#9a8b28",null,"#36635e","#36635e","#36635e","#36635e","#36635e",null,null],[null,"#36635e","#b4bbbb","#b4bbbb","#b4bbbb","#b4bbbb","#b4bbbb","#36635e",null,"#9a8b28","#9a8b28",null,"#36635e","#b4bbbb","#b4bbbb","#b4bbbb","#b4bbbb","#b4bbbb","#36635e",null],[null,"#36635e","#b4bbbb","#b4bbbb","#b4bbbb","#b4bbbb","#b4bbbb","#36635e",null,"#9a8b28","#9a8b28",null,"#36635e","#b4bbbb","#b4bbbb","#b4bbbb","#b4bbbb","#b4bbbb","#36635e",null],[null,null,"#36635e","#36635e","#36635e","#36635e","#36635e",null,null,"#9a8b28","#9a8b28",null,null,"#36635e","#36635e","#36635e","#36635e","#36635e",null,null],[null,null,"#36635e",null,"#36635e",null,"#36635e",null,"#9a8b28","#d2bd32","#c8c5b1","#9a8b28",null,"#36635e",null,"#36635e",null,"#36635e",null,null],[null,null,"#36635e",null,"#36635e",null,"#36635e","#9a8b28","#d2bd32","#d2bd32","#d2bd32","#c8c5b1","#9a8b28","#36635e",null,"#36635e",null,"#36635e",null,null],[null,null,null,null,null,null,null,null,"#9a8b28","#9a8b28","#9a8b28","#9a8b28",null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null]];
// 2. CORRECCIÓN: Usar la data de un sprite existente para las dimensiones

const rows = pixelDataMonster1A.length;
const cols = pixelDataMonster1A[0].length;

const pixelSize = 10;

// Inicializamos SpriteMonster1 al principio
SpriteMonster1 = pixelDataMonster1A;
SpriteMonster2 = pixelDataMonster2A

// =================================================================
// === FUNCIONES DE CANVAS ===
// =================================================================

function canvasBox() {
    // ... (Tu función canvasBox, no la modificamos) ...
    const canvas = document.getElementById("FondoNegro");
    if (!canvas.getContext) return;
    const ctx = canvas.getContext("2d");

    if (Puntos.length === 0) {
        for (let i = 0; i < puntosTotales; i++) {
            Puntos.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height
            });
        }
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "white";
    Puntos.forEach(p => {
        ctx.fillRect(p.x, p.y, 4, 4);
        p.y -= velocidad; 

        if (p.y < 0) p.y = canvas.height;
    });

    requestAnimationFrame(canvasBox);
}

// 3. CORRECCIÓN: Usamos requestAnimationFrame para redibujar el monstruo continuamente
// Esto es mejor que solo llamar a canvasBoxMonstruo una vez.
function canvasBoxMonstruo(){
    const canvas = document.getElementById("CanvasBoxMonstruo");
    if (!canvas.getContext) return;
    const ctx = canvas.getContext("2d");

    canvas.width = cols * pixelSize;
    canvas.height = rows * pixelSize;
    
    // Limpiar canvas en cada frame
    ctx.clearRect(0,0,canvas.width,canvas.height)

    // Dibuja el sprite actual
    drawPixelArt(ctx); 
    
    // Llamada recursiva para el loop de dibujo.
    requestAnimationFrame(canvasBoxMonstruo);
}
function canvasBoxMonstruo2(){
    const canvas = document.getElementById("CanvasBoxMonstruo");
    if (!canvas.getContext) return;
    const ctx = canvas.getContext("2d");

    canvas.width = cols * pixelSize;
    canvas.height = rows * pixelSize;
    
    // Limpiar canvas en cada frame
    ctx.clearRect(0,0,canvas.width,canvas.height)

    // Dibuja el sprite actual
    drawPixelArt2(ctx); 
    
    // Llamada recursiva para el loop de dibujo.
    requestAnimationFrame(canvasBoxMonstruo2);
}

function canvasBox5() {
    // ... (Tu función canvasBox5, no la modificamos) ...
    const canvas = document.getElementById("FondoNegro2");
    if (!canvas.getContext) return;
    const ctx = canvas.getContext("2d");

    if (Puntos2.length === 0) {
        for (let i = 0; i < puntosTotales; i++) {
            Puntos2.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height
            });
        }
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    ctx.fillStyle = "white";
    Puntos2.forEach(p => {
        ctx.fillRect(p.x, p.y, 2, 2);
        p.y -= velocidad * 2.5; 

        if (p.y < 0) p.y = canvas.height;
    });

    requestAnimationFrame(canvasBox5);
}


function drawPixelArt(ctx) {
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const color = SpriteMonster1[r][c];

        if (color !== null) {
          ctx.fillStyle = color;
          // Si quieres que el monstruo se mueva, aquí deberías usar 'position'
          // Por ejemplo: ctx.fillRect((c * pixelSize) + position, r * pixelSize, pixelSize, pixelSize);
          ctx.fillRect(c * pixelSize, r * pixelSize, pixelSize, pixelSize);
        }
      }
    }
}
function drawPixelArt2(ctx) {
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const color = SpriteMonster2[r][c];

        if (color !== null) {
          ctx.fillStyle = color;
          // Si quieres que el monstruo se mueva, aquí deberías usar 'position'
          // Por ejemplo: ctx.fillRect((c * pixelSize) + position, r * pixelSize, pixelSize, pixelSize);
          ctx.fillRect(c * pixelSize, r * pixelSize, pixelSize, pixelSize);
        }
      }
    }
}

// === Lógica de cambio de Sprite ===
function changeSprite(){
    // La comparación de arrays en JS usando '===' siempre será FALSE 
    // a menos que sean la misma referencia en memoria.
    // Pero si solo tienes dos sprites, este método funciona perfectamente
    // para alternar entre ellos.
    if (SpriteMonster1 === pixelDataMonster1D)
    {
        SpriteMonster1 = pixelDataMonster1A;
    }
    else if (SpriteMonster1 === pixelDataMonster1A)
    {
        SpriteMonster1 = pixelDataMonster1B;
    }
    else if (SpriteMonster1 === pixelDataMonster1B)
    {
        SpriteMonster1 = pixelDataMonster1C;
    }
    else
    {
        SpriteMonster1 = pixelDataMonster1D;
    }
    
    // No necesitamos llamar a canvasBoxMonstruo aquí, 
    // ya que está en un bucle de requestAnimationFrame.
};


// ---- Función para convertir grados a radianes ----
function degToRad(degrees) {
    return degrees * Math.PI / 180;
}

// =================================================================
// === INICIO DE LA APLICACIÓN ===
// =================================================================

window.onload = function () {
    canvasBox();
    canvasBox5();
    
    // Inicia el loop de dibujo del monstruo
    canvasBoxMonstruo(); 
    
    // Inicia el loop de animación (cambio de sprite) cada 300ms (ajusta el tiempo)
    // Usar setInterval garantiza el cambio de sprite continuo.
    setInterval(changeSprite, 100); 
};


// ---- Movimiento con teclas (Ajustado) ----
window.addEventListener("keydown", function(event) {
    if (event.key === "ArrowLeft") {
        position -= 5; 
        // No necesitas llamar a canvasBoxMonstruo, el loop rAF lo maneja.
        // PERO debes implementar 'position' en drawPixelArt para ver el movimiento.
    } else if (event.key === "ArrowRight") {
        position += 5;
        // No necesitas llamar a canvasBoxMonstruo, el loop rAF lo maneja.
    }
});