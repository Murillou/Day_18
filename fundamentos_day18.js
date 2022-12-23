//SINTAX DE PROMESSA/PROMISE

// promessa leva uma função de callback dentro do parenteses, e a função leva 2 parametros, resolve e reject
const promessa = new Promise((resolve, reject) => { 
    resolve('sucesso')
    reject('falhou')
}) 

const promise = new Promise((resolve, reject) => { // levando uma função de callback com 2 parametros
    setTimeout(() => { // criando uma função de settar Tempo
    const habilidades = ['HTML', 'CSS', 'JavaScript', 'WordPress']
    if(habilidades.length > 0){
        resolve(habilidades) // utilizando o primeiro parametro
    }else{
        reject('Algo de errado aconteceu') // utilizando o segundo parametro
    }
}, 2000) // 2 segundos após iniciar o código irá mostrar o resultado
})

//syntax para mostrar o resultado
promise
    .then(resultado => { // utiizamos o metodo .then para mostrar o resultado
        console.log(resultado)
    }) 
    .catch(error => console.log(error)) // e o .catch para mostrar o erro, caso aconteça


// acessando uma API com o metódo fetch

const url = 'https://restcountries.com/v2/all' // API dos países
fetch(url)
    .then(resposta => resposta.json()) // acessando os dados da API como JSON
    .then(dados => {
        console.log(dados) // obtendo os dados
    })
    .catch(error => console.log(error))



// Utilizando Async e Await

//exemplo de async

const quadrado = async function(n){ // quanto colocamos async na frente da função, significa que ela retornará uma promessa
    return n * n
}
console.log(quadrado(2))

// para acessar o valor da promessa utilizamos o Await

const valor = await quadrado(2)
console.log(valor) 

// lembrando que async e await andam juntos, um não pode coexistir sem o outro
