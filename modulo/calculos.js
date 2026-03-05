/*********************************************************************************************************************************************************************
 * Objetivo: Guardar as funções que realizam as operações matemáticas.
 * Autor: Lucas kolle
 * Data: 27/02/2026
 * Versão: 1.0.02.26
 *******************************************************************************************************************************************************************/

//criando função para validar operação matemática
const validarOperacao = function(operacao){

    let operacaoMatematica = String(operacao)

    if(operacaoMatematica == "" ){
        console.log("ERRO: É obrigatório indicar uma operação!!!")
        return false
    }else if(!isNaN(operacaoMatematica)){
        console.log("ERRO: É obrigatório indicar a operação conforme orientado!!!")
        return false
    }else
        return true
}

//criando função para realizar o cálculo do imc
const calcularImc = function(valor1, valor2){

    //criando variáveis para realizar os cálculos
    let peso = Number(valor1)
    let altura = Number(valor2)
    let resustado

    //trocando pontos por virgula

    //realizando validações do peso e da altura
    if(peso == "" || altura == ""){
        console.log("ERRO: Todos os campos devem ser preenchidos!!!")
        return false
    }else if(isNaN(peso) || isNaN(altura)){
        console.log("ERRO: Não é permitido a entrada de caracteres nos campos numéricos!!!")
        return false
    }else if(peso == "0" || altura == "0"){
        console.log("ERRO: O peso e a altura não podem ser zero!!!")
        return false

    //continuando programa
    }else{

        //fórmula para calcular IMC
        resustado = peso / (altura * altura)
        return Number(resustado).toFixed(2)
    }

}

//criando função para definir a situação do paciente
const definirSituacaoPaciente = function(valor1){

    let valorImc = Number(valor1)
    let situaçãoPaciente

    //validando IMC
    if(valorImc == ""){
        console.log("ERRO: É necessário informar o IMC!!!")
        return false
    }else if( isNaN(valorImc) || valorImc <= 0 ){
        console.log("ERRO: O IMC deve ser um número válido!!!")
        return false

    //continiando programa
    }else{

        if(valorImc >= 40){
            situaçãoPaciente = "OBESIDADE III"
            return String(situaçãoPaciente)
        }else if(valorImc >= 35 || valorImc <= 39.9){
            situaçãoPaciente = "OBESIDADE II"
            return String(situaçãoPaciente)
        }else if(valorImc >= 30 || valorImc <= 34.9){
            situaçãoPaciente = "OBESIDADE I"
            return String(situaçãoPaciente)
        }else if(valorImc >= 25 || valorImc <= 29.9){
            situaçãoPaciente = "ACIMA DO PESO"
            return String(situaçãoPaciente)
        }else if(valorImc >= 18.5 || valorImc <= 24.9){
            situaçãoPaciente = "PESO NORMAL"
            return String(situaçãoPaciente)
        }else{
            situaçãoPaciente = "ABAIXO DO PESO"
            return String(situaçãoPaciente)
        }
    }
}

//criando função para definir o sexo do professor 
const definirSexoProfessor = function(sexo){
    
    let sexoProfessor = String(sexo).toUpperCase()
    let professor

    //validando dados
    if(sexoProfessor == ""){
        console.log("ERRO: Todos os campos devem ser preenchidos!!!")
        return false
    }else if(!isNaN(sexoProfessor)){
        console.log("ERRO: Sexo invalido!!!")
        return false
    //continuando programa
    }else{

        if(sexoProfessor == "MASCULINO"){
            professor = "Professor"
            return professor
        }else if(sexoProfessor == "FEMININO"){
            professor = "Professora"
            return professor
        }else{
            console.log("ERRO: Sexo invalido!!!")
            return false
        }
    }
}

//criando função para definir o sexo do aluno
const definirSexoAluno = function(sexo){
    
    let sexoAluno = String(sexo).toUpperCase()
    let aluno

    //validando dados
    if(sexoAluno == ""){
        console.log("ERRO: Todos os campos devem ser preenchidos!!!")
        return false
    }else if(!isNaN(sexoAluno)){
        console.log("ERRO: Sexo invalido!!!")
        return false
    //continuando programa
    }else{

        if(sexoAluno == "MASCULINO"){
            aluno = "Aluno"
            return aluno
        }else if(sexoAluno == "FEMININO"){
            aluno = "Aluna"
            return aluno
        }else{
            console.log("ERRO: Sexo invalido!!!")
            return false
        }
    }
}

//criando função para calcular média com quatro números
const calcularMediaQuato = function(valor1, valor2, valor3, valor4){

    let nota1 = Number(valor1)
    let nota2 = Number(valor2)
    let nota3 = Number(valor3)
    let nota4 = Number(valor4)
    let mediaCalculada

    //validando dados recebidos
    if(nota1 == "" || nota2 == "" || nota3 == "" || nota4 == ""){
        console.log("ERRO: Todas as notas devem ser preenchidas!!!")
        return false
    }else if(isNaN(nota1) || isNaN(nota2) || isNaN(nota3) || isNaN(nota4)){
        console.log("ERRO: Não é permitido a entrada de caracteres nos campos numéricos!!!")
        return false
    }else if(nota1 < 0 || nota1 > 100 || nota2 < 0 || nota2 > 100 || nota3 < 0 || nota3 > 100 || nota4 < 0 || nota4 > 100){
        console.log("ERRO: As notas não podem ser menores que zero ou maiores que 100!!!")
        return false
    //continuar programa
    }else{

        //calculando média
        mediaCalculada = (nota1 + nota2 + nota3 + nota4) / 4
        return Number(mediaCalculada).toFixed(2)
    }

}

//criando função para calcular média com dois números
const calcularMediaDois = function(valor1, valor2){

    let nota1 = Number(valor1)
    let nota2 = Number(valor2)
    let mediaCalculada

    //validando dados recebidos
    if(nota1 == "" || nota2 == ""){
        console.log("ERRO: Todas as notas devem ser preenchidas!!!")
        return false
    }else if(isNaN(nota1) || isNaN(nota2)){
        console.log("ERRO: Não é permitido a entrada de caracteres nos campos numéricos!!!")
        return false
    }else if(nota1 < 0 || nota1 > 100 || nota2 < 0 || nota2 > 100){
        console.log("ERRO: As notas não podem ser menores que zero ou maiores que 100!!!")
        return false
    //continuar programa
    }else{

        //calculando média
        mediaCalculada = (nota1 + nota2) / 2
        return Number(mediaCalculada).toFixed(2)
    }

}

//criando função para determinar situação do aluno
const definirSituacaoAluno = function(valor1){

    let media = Number(valor1)
    let situaçãoAluno

    //validando dados recebidos
    if(media == ""){
        console.log("ERRO: A média deve ser informada para definir a situação!!!")
        return false
    }else if(isNaN(media)){
        console.log("ERRO: É proibido a entrada de carteres nos campos numéricos!!!")
        return false
    //continuar programa
    }else{

        if(media > 70){
            situaçãoAluno = "APROVADO"
            return String(situaçãoAluno)
        }else if(media < 50){
            situaçãoAluno = "REPROVADO"
            return String(situaçãoAluno)
        }else{
            situaçãoAluno = "RECUPERAÇÃO"
            return String(situaçãoAluno)
        }

    }

}

//criando função para determinar se são pares ou impares
const gerenciarParImpar = function(valor1, valor2, exibir){

    //criando variáveis necessárias
    let valorInicial = Number(valor1)
    let valorFinal = Number(valor2)
    let exibirNumeros = String(exibir).toUpperCase()
    let numerosPares = ""
    let numerosImpares = ""
    let contadorPar = 0
    let contadorImpar = 0

    //validando dados
    if(valorInicial == "" || valorFinal == ""){
        console.log("ERRO: Não é possível realizar a separação se algum campo estiver vazio!!!")
        return false
    }else if(valorInicial >= valorFinal){
        console.log("ERRO: O valor inicial não pode ser maior nem igual o final!!!")
        return false
    }else if(valorInicial < 0 || valorInicial > 500){
        console.log("ERRO: O valor inicial não pode ser menor que zero ou maior que 500!!!")
        return false
    }else if(valorFinal < 100 || valorFinal > 1000){
        console.log("ERRO: O valor final não pode ser menor que 100 ou maior que 1000!!!")
        return false
    //continua programa
    }else{

        //enquando o valor inicial for menor ou igual o final ele continua no while
        while(valorInicial <= valorFinal){

            //se o valor inicial for dividido por 2 e der resto 0 ele entra aqui
            if(valorInicial % 2 === 0){
                // += adiciona algo ou soma algo
                numerosPares += valorInicial + "\n"
                valorInicial = valorInicial +1
                contadorPar = contadorPar +1
            //se o valor inicial for dividido por 2 e sobrar resto ele entra aqui
            }else{
                // += adiciona algo ou soma algo
                numerosImpares += valorInicial + "\n"
                valorInicial = valorInicial +1
                contadorImpar = contadorImpar +1
            }
        }

        //condicional de exibição
        if(exibirNumeros == "PARES")
            return `Lista de números Pares:\n${numerosPares}\nQuantidade de números pares encontrados:${contadorPar}`
        else if(exibirNumeros == "IMPARES")
            return `Lista de números Impares:\n${numerosImpares}\nQuantidade de números pares encontrados:${contadorImpar}`
        else if(exibirNumeros == "AMBOS")
            return`Lista de números Pares:\n${numerosPares}Quantidade de números pares encontrados:${contadorPar}\n\nLista de números Impares:\n${numerosImpares}Quantidade de números pares encontrados:${contadorImpar}`
        else{
            console.log("ERRO: Opção de exibição inexistente, por favor, digite uma das opções oferecidas!!!")
            return false
        }

    }

}

//criando função para calcular fatorial
const calcularFatorial = function(valor1){

    //criando variável para trabalhar com o valor 1
    let fatorial = Number(valor1)
    let contador = Number(fatorial)
    let resultadoMultiplicação = 1
    let exibirFatorial = ""

    //validando dados recebidos
    if(fatorial == "" ){
        console.log("ERRO: Não é possível calcular o fatorial se o valor estiver vazio!!!")
        return false
    }else if(fatorial == 1){
        console.log("ERRO: Não é possível calcular o fatorial de 1, por favor, digite um número maior!!!")
        return false
    }else if(isNaN(fatorial)){
        console.log("ERRO: Não é permitido a entrada de caracteres nos campos numéricos!!!")
        return false
    }else if(fatorial <= 0 ){
        console.log("ERRO: Não é possível calcular o fatorial de um número menor ou igual a zero!!!")
        return false
    //continuar programa
    }else{

        //enquanto fatorial for maior ou igual o contador
        while(contador >= 1){

            exibirFatorial += contador 
            resultadoMultiplicação *= contador
            contador = contador -1

            //enquanto o contador for igual ou maior que 1, será adicionado o caracter "X", quando for menor ele para, pois deverá ser adicionado o caracter "="
            if(contador >= 1)
                exibirFatorial += "x"  
        }
        return `O fatorial de ${fatorial} é:\n${exibirFatorial} = ${resultadoMultiplicação}`
    }
}

const calcularTabuadas = function(valor1, valor2, valor3, valor4){

    //criando variáveis para trabalhar com os valores
    let tabuadaInicial = Number(valor1)
    let contadorInicial = Number(valor2)
    let tabuadaFinal = Number(valor3)
    let contadorFinal = Number(valor4)
    let exibirTabuadaInicial = ""
    let exibirTabuadaFinal = ""
    let resustado
    let contarVoltas = 0

    //validando dados
    if(tabuadaInicial < 2 || tabuadaInicial > 100 || tabuadaFinal < 2 || tabuadaFinal > 100){
        console.log("ERRO: A entrada da tabuada não pode ser maior que 100 ou menor que 2!!!")
        return false
    }else if(contadorInicial < 1 || contadorInicial > 50 || contadorFinal < 1 || contadorFinal > 50){
        console.log("ERRO: O contador não pode ser maior que 50 ou menor que 1!!!")
        return false
    }else if(isNaN(tabuadaFinal) || isNaN(tabuadaInicial) || isNaN(contadorFinal) || isNaN(contadorInicial)){
        console.log("ERRO: Não é permito a entrada de caracteres em campos numéricos!!!")
        return false
    }else if(tabuadaFinal == "" || tabuadaInicial =="" || contadorFinal == "" || contadorInicial == ""){
        console.log("ERRO: Nemhum dos campos deve estar vazio!!!")
        return false
    //continuar programa
    }else{

        while(contarVoltas <= contadorInicial){

            //realizar a multiplicação
            resustado = tabuadaInicial * contarVoltas

            //imprimir na tela
            exibirTabuadaInicial += `\n${tabuadaInicial} x ${contarVoltas} = ${resustado}\n`
            contarVoltas = contarVoltas +1

        }

        contarVoltas = 0
        while(contarVoltas <= contadorFinal){

            //realizar a multiplicação
            resustado = tabuadaFinal * contarVoltas
    
            //imprimir na tela
            exibirTabuadaFinal += `\n${tabuadaFinal} x ${contarVoltas} = ${resustado}\n`
            contarVoltas = contarVoltas +1
    
        }

        return `Tabuado do [${tabuadaInicial}]\n${exibirTabuadaInicial}\nTabuada do [${tabuadaFinal}]\n${exibirTabuadaFinal}`
    }

}

module.exports = {
    calcularTabuadas,
    calcularFatorial,
    gerenciarParImpar,
    definirSituacaoAluno,
    calcularMediaDois,
    calcularMediaQuato,
    definirSexoAluno,
    definirSexoProfessor,
    definirSituacaoPaciente,
    calcularImc,
    validarOperacao
}