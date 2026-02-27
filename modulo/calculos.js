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
        console.log(operacaoMatematica)
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
        return resustado.toFixed(2)
    }

}

//criando função para definir a situação do paciente
const definirSituacao = function(valor1){

    let valorImc = Number(valor1)
    let situação

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
            situação = "OBESIDADE III"
            return situação
        }else if(valorImc >= 35 || valorImc <= 39.9){
            situação = "OBESIDADE II"
            return situação
        }else if(valorImc >= 30 || valorImc <= 34.9){
            situação = "OBESIDADE I"
            return situação
        }else if(valorImc >= 25 || valorImc <= 29.9){
            situação = "ACIMA DO PESO"
            return situação
        }else if(valorImc >= 18.5 || valorImc <= 24.9){
            situação = "PESO NORMAL"
            return situação
        }else{
            situação = "ABAIXO DO PESO"
            return situação
        }
    }
}