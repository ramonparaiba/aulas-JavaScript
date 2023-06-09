//var let e const
// Em JavaScript, var, let e const são palavras-chave usadas para declarar variáveis ​​e têm diferentes comportamentos e escopos.

//var: é uma variável que pode ser reatribuída e redeclarada em todo o escopo da função em que foi definida ou, se declarada fora de uma função, em todo o escopo global.
if(true){
    var a = 42
}
console.log(a); //Saída: 42


// A variável "a" pode ser acessada dentro e fora do bloco de código, o que é demonstrado pela impressão do valor "42"

//######################****####################################

//let: é uma variável que pode ser reatribuída, mas não pode ser redeclarada dentro do mesmo escopo. Ou seja, se você declarar uma variável let em um bloco de código, ela só pode ser usada dentro desse bloco de código.
if(true){
    let b = 50
    console.log(b); //saída: 50
}

// console.log(b) //Saída: erro

//const: é uma variável que não pode ser reatribuída nem redeclarada. Ou seja, se você declarar uma variável const em um bloco de código, ela só pode ser usada dentro desse bloco de código e seu valor não pode ser alterado.
if(true){
    const c = 25    
    console.log(c) //saída: 25
}
//  console.log(c) //saída: erro

if(true){
    const d = {sexo: 'masc'}
    //d = {sexo: 'fem'}  //saída: erro
    d.sexo = 'fem'
    console.log(d) 
}