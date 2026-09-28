/*
let nombre = prompt("Ingrese el nombre del jugador");

let experienciaTotal = 0;
let misiones = 0;
let continuar = "si";

while (continuar === "si") {

    let experiencia = Number(prompt("Ingrese los puntos de experiencia obtenidos en la misión"));

    experienciaTotal = experienciaTotal + experiencia;
    misiones = misiones + 1;

    continuar = prompt("¿Desea completar otra misión? (si/no)");
}

let nivel;

if (experienciaTotal < 500) {
    nivel = "Novato";
} else if (experienciaTotal < 1000) {
    nivel = "Avanzado";
} else if (experienciaTotal < 2000) {
    nivel = "Experto";
} else {
    nivel = "Leyenda";
}

document.write("RESUMEN DE LA PARTIDA<br><br>");
document.write("Jugador: " + nombre + "<br>");
document.write("Misiones completadas: " + misiones + "<br>");
document.write("Experiencia total: " + experienciaTotal + "<br>");
document.write("Nivel alcanzado: " + nivel);
*/




let equipo1 = prompt("Ingrese el nombre del primer equipo");
let equipo2 = prompt("Ingrese el nombre del segundo equipo");

let goles1 = Number(prompt("Ingrese los goles del " + equipo1));
let goles2 = Number(prompt("Ingrese los goles del " + equipo2));

let puntos1 = 0;
let puntos2 = 0;
let resultado;
let diferencia;


if (goles1 > goles2) {

    diferencia = goles1 - goles2;
    resultado = "Ganó " + equipo1;

    puntos1 = 3;
    puntos2 = 0;

} else if (goles2 > goles1) {

    diferencia = goles2 - goles1;
    resultado = "Ganó " + equipo2;

    puntos1 = 0;
    puntos2 = 3;

} else {

    diferencia = 0;
    resultado = "Empate";

    puntos1 = 1;
    puntos2 = 1;
}


document.write("RESULTADO DEL PARTIDO<br><br>");

document.write(equipo1 + ": " + goles1 + " goles<br>");
document.write(equipo2 + ": " + goles2 + " goles<br><br>");

document.write("Resultado: " + resultado + "<br>");

if (goles1 != goles2) {
    document.write("Diferencia de goles: " + diferencia + "<br>");
}

document.write("<br>");
document.write("Puntos de " + equipo1 + ": " + puntos1 + "<br>");
document.write("Puntos de " + equipo2 + ": " + puntos2 + "<br>");
