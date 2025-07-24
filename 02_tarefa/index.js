const inquirer = require('inquirer')
const chalk = require('chalk')

inquirer.prompt([
    {
        name: 'p1',
        message: 'Digite seu nome: ',
    },
    {
        name: 'p2',
        message: 'Informe sua idade: ',
    }
]).then((resp) => {
    let nome = resp.p1;
    let idade = parseInt(resp.p2);
    console.log(chalk.bgYellow.black(`Seu nome é ${nome} e sua idade é ${idade} anos.`))
}).catch(err => console.log(err));