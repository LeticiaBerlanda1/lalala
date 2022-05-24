
dayName = new Array ("Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado");
monName = new Array ("Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Agosto", "Outubro", "Novembro", "Dezembro");
now = new Date();
document.write ("<u>Hoje é " + dayName[now.getDay()] + ", " + now.getDate() + " de " + monName [now.getMonth()] + " de " + now.getFullYear () + ".</u> ");

document.write("<p>- Exemplo: ");
document.write("<br>");

var matriz1 = [];
matriz1.push([2, -6, 17]);
matriz1.push([4, 3, 28]);
matriz1.push([11, -18, 15]);
console.table(matriz1);

var matriz2 = [];
matriz2.push([1, -4, 11]);
matriz2.push([2, 1, -7]);
matriz2.push([24, 9, -8]);
console.table(matriz2);

document.write("<div class= 'container'>");
document.write("<table border=1>");
for (i = 0; i < matriz1.length; i++) {
    var linha = "<tr>";
    for (x = 0; x < matriz1[i].length; x++) {
        linha = linha + "<td>" + matriz1[i][x] + "</td>";
    }
    linha = linha + "</tr>"
    document.write(linha);
}
document.write("</table>");

document.write("<table border=1>");
for (i = 0; i < matriz2.length; i++) {
    var linha = "<tr>";
    for (x = 0; x < matriz2[i].length; x++) {
        linha = linha + "<td>" + matriz2[i][x] + "</td>";
    }
    linha = linha + "</tr>"
    document.write(linha);
}

document.write("<table border=1>");
for (i = 0; i < matriz1.length; i++) {
    var linha = "<tr>";
    for (x = 0; x < matriz1[i].length; x++) {
        var sub = matriz1[i][x] - matriz2[i][x];
        linha = linha + "<td>" + sub + "</td>";
    }
    linha = linha + "</tr>"
    document.write(linha);
}
document.write("</table>");
document.write("</div)");


