let sout = "<table border '0.5' width = '300px'>"; 
let i, j;
for (i = 1; i <= 10; i++) {
    sout = sout + "<tr>";
    for (j = 1; j <= 10; j++) {
        //sout = sout + "<td>" + i + "*" + j + "=" + (i * j) + "</td>";
        sout = sout + "<td>" + i * j + "</td>";
    }
    sout = sout + "</tr>";
}
sout = sout + "</table>";
document.write(sout);