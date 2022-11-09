class Person {
constructor(name){
this.name = name;
}

Saymyname(){
return `My Name Is: ${this.name}`
}
}

module.exports = {
Person,
}