const fs = require('fs');

const arqAntigo = "novoarquivo.txt";
const arqNovo = "novissimoarquivo.txt";

fs.rename(arqAntigo, arqNovo, (err) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log("Arquivo renomeado!");
});