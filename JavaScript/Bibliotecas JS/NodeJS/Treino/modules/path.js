const path = require("path");

// File Name

console.log(path.basename(__filename));

// Folder name

console.log(path.dirname(__filename));

// ext Name

console.log(path.extname(__filename));

// All infos

console.log(path.parse(__filename));

// Join diretorios de arquivos 

console.log(path.parse(__dirname, "test","teste.html"));
