// 01
console.log("----Exercicio 1----")
const eDia = true;

if (!eDia) {
    console.log("Está de noite")
} else {
    console.log("Está claro lá fora")
};

// 02
console.log("----Exercicio 2----")
let máximoDeNúmeros = 20;

for (let i = 0; i <= 20; i++) {
    if (i % 2 == 0) {
        console.log(i)
    }
};

//03
console.log("----Exercicio 3----")
const mostrarMensagem = () => {
    console.log("Caramba uma mensagem!")
};
mostrarMensagem();

// 04
console.log("----Exercicio 4----")
const mostrarNome = (nomeInserido) => {
    console.log(nomeInserido)
};

mostrarNome("Bruno");

// 05
console.log("----Exercicio 5----")
const registrarPessoa = (nome, idade, estiloMusical) => {
    console.log(`a pessoa registrada é ${nome}, tem ${idade} anos e gosta de ${estiloMusical}`)

};
registrarPessoa("Bruno", 21, "MPB");

//06
console.log("----Exercicio 6----")
const mostrarPreferencias = (filme, musica) => {
    console.log(`o filme escolhido foi ${filme} e a música escolhida foi ${musica}`)
};
mostrarPreferencias("Interestelar", "faroeste caboclo");

// 07
console.log("----Exercicio 7----")
const multiplicarPor3 = (numero) => {
    const numeroMultiplicado = numero * 3
    console.log(`O resultado da multiplicação entre 3 e ${numero} é de :  ${numero} x 3 = ${numeroMultiplicado}`)
    return numeroMultiplicado
};
let resultado = multiplicarPor3(15);
console.log(resultado);

//08
console.log("----Exercicio 8----")
const verdadeiroOuFalso = (valor) => {
    if (valor === true) {
        console.log('A variável é verdadeira.')

    } else if (valor === false) {
        console.log('A variável é falsa.')
    } else {
        console.log("A variável não é um valor booleano.")
    }

};
let eVerdadeiro = true;
let eFalso = false;
let umaArrey = [1, "animal", eVerdadeiro]

verdadeiroOuFalso(eVerdadeiro);
verdadeiroOuFalso(eFalso);
verdadeiroOuFalso(umaArrey);

//09
console.log("----Exercicio 9----")
let nomes = ["Ana", 'Pedro', "Maria", "Sofia", "Paula"];
console.log(nomes);

//10
console.log("----Exercicio 10----")
nomes.unshift("Julios");
console.log(nomes);

//11
console.log("----Exercicio 11----")
nomes.pop();
console.log(nomes);

//12
console.log("----Exercicio 12----")
nomes.push("Pedro", "Roberto");
console.log(nomes);



//13
console.log("----Exercicio 13----")
nomes.shift();
console.log(nomes);

//14
console.log("----Exercicio 14----")
let numbers = [7, 5, 6, 3, 8, 9, 2, 1, 4];
console.log(`A arrey [${numbers}] quando odenada fica: [${numbers.sort()}]`);

//14 coloquei 14 pq no classroom estava assim
console.log("----Exercicio 15----")
let sobreMim = {
    nome: "Bruno",
    idade: 21,
    nacionalidade: "brasileiro",
};
console.log(sobreMim);

//16
console.log("----Exercicio 16----")
sobreMim.naturalidade = "carioca"
console.log("Propriedade adicionada :'naturalidade'",sobreMim);

// 17
console.log("----Exercicio 17----")
delete sobreMim.idade
console.log(sobreMim,"A propriedade idade foi removida");

//18
console.log("----Exercicio 18----")
const chaves = Object.getOwnPropertyNames(sobreMim);
let numeroDaChave = 0
chaves.forEach(chave =>{
    numeroDaChave += 1
    console.log(`a chave na posião ${numeroDaChave} é ${chave}`)
})

//19
console.log("----Exercicio 19----")
const cadastro = [{
    nome: "Pedro" ,
    idade: 18,
    telefone: 4002-8922,
    amigos: ["Fernanda", "Gabriel", "Helena", "Isaac", "Julia"],
},
{
    nome: "Marcos",
    idade: 29,
    telefone: 4002-8922 ,
    amigos: ["Ursula", "Vinicius", "Wanda", "Xavier", "Yara"],
},
{
    nome: "Tais",
    idade:  19,
    telefone:4002-8922 ,
    amigos: ["Kaique", "Laura", "Mateus", "Natalia", "Otávio"],
},
{
    nome: "Carla",
    idade:  36,
    telefone: 4002-8922 ,
    amigos: ["Pedro", "Marcos", "Tais", "Zezinho", "Carlos"],
},
{
    nome: "Zezinho",
    idade: 60,
    telefone: 4002-8922,
    amigos: ["Alice", "Jonathan", "Carla", "Daniel", "Elena"],
}]
// 20
console.log("----Exercicio 20----")
cadastro.forEach(cadastrado =>{
    
    console.log(`Um dos amigos do(a) ${cadastrado.nome} é : ${cadastrado.amigos[1]}`)
})