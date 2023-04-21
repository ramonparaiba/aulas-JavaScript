//var let e const
// Em JavaScript, var, let e const são palavras-chave usadas para declarar variáveis ​​e têm diferentes comportamentos e escopos.

//var: é uma variável que pode ser reatribuída e redeclarada em todo o escopo da função em que foi definida ou, se declarada fora de uma função, em todo o escopo global.
var a = 10

function exemploVar(){
    var a = 15
    console.log(a);
}
exemploVar()
console.log(a);

// A variável "a" pode ser acessada dentro e fora da função, o que é demonstrado pela impressão do valor "10" nos dois casos.

//######################****####################################

//let: é uma variável que pode ser reatribuída, mas não pode ser redeclarada dentro do mesmo escopo. Ou seja, se você declarar uma variável let em um bloco de código, ela só pode ser usada dentro desse bloco de código.
let b = 25

function exemploLet(){
    let b = 27
    console.log(b);
}
exemploLet()
console.log(b);

//const: é uma variável que não pode ser reatribuída nem redeclarada. Ou seja, se você declarar uma variável const em um bloco de código, ela só pode ser usada dentro desse bloco de código e seu valor não pode ser alterado.


