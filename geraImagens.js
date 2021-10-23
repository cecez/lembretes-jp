var fs = require('fs');
var files = fs.readdirSync('/home/app/imagens/');

fs.writeFile(
    '/home/app/imagens.json', 
    JSON.stringify(files), 
    function (err) {
    if (err) return console.log(err);
    console.log('Dados > imagens.json');
  });