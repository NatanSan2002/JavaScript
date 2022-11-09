//const {Person} = require("./person.js");

const dotenv = require("dotenv");

const connect_DataBase = require("./src/database/connect.js");

dotenv.config();

connect_DataBase();

//require("./modules/path.js")
//require("./modules/fs.js");

//require("./modules/http.js"); //servidor "nato"

require("./modules/express.js")

//const pessoa = new Person("Felipe");

