const fs = require('fs');
let num1 = 5;
let num2 = 10;
let result = num1 + num2;
let content = result.toString();

let nome = "Marcos";
let nome2 = "João";
let content2 = nome + ' ' + nome2;

fs.writeFile('soma.txt', content, 'utf8', (err) => {
    if (err) {
        console.log(err);
    }
    console.log('Arquivo criado/atualizado com sucesso!');
});

fs.writeFile('arquivo.txt', content2, 'utf8', (err) => {
    if (err) {
        console.log(err);
    }
    console.log('Arquivo criado/atualizado com sucesso!');
});