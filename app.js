/*********************************************************************************************************************************************************************
 * Objetivo: Realizar as entradas e saídas de dados.
 * Autor: Lucas kolle
 * Data: 04/03/2026
 * Versão: 1.0.03.26
 *******************************************************************************************************************************************************************/
console.log("*******INICIANDO PROGRAMA*******")

//IMPORTANDO BIBLIOTECA REEADLINE
const readline = require("readline")
const calculos = require("./modulo/calculos.js")

//criando objeto para entrada de dados
const entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

//entrada da operação
entradaDeDados.question("Digite a operação desejada (CALCULAR IMC / CALCULAR MÉDIA / CALCULAR TABUADA / CALCULAR FATORIAL / GERENCIAR PARES E IMPARES):",function(operacao){

    let operacaoMatematica = operacao

    operacaoMatematica = calculos.validarOperacao(operacaoMatematica)

    if(operacaoMatematica){
        operacaoMatematica = String(operacao).toUpperCase()
        console.log(operacaoMatematica)

        //decidindo qual caminho seguir
        if(operacaoMatematica == "CALCULAR IMC"){
            entradaDeDados.question("Digite o nome do paciente:",function(nome1){
                let nomePaciente = nome1

                entradaDeDados.question("Digite o peso do paciente:", function(peso){
                    let pesoPaciente = peso

                    entradaDeDados.question("Digite a altura do paciente:", function(altura){
                        let alturaPaciente = altura
                        let resultado = calculos.calcularImc(pesoPaciente, alturaPaciente)

                        if(resultado){
                            let situação = calculos.definirSituacaoPaciente(resultado)

                            if(situação){
                                console.log(`NOME DO PACIENTE: ${nomePaciente}\nPESO DO PACIENTE: ${pesoPaciente}\nALTURA DO PACIENTE: ${alturaPaciente}\nIMC DO PACIENTE: ${resultado}\nSITUAÇÃO DO PACIENTE: ${situação}`)
                                console.log("*******FINALIZANDO PROGRAMA*******")
                            }else{
                                console.log("ERRO: Algo deu errado no processamento. Não será possivél exibir o resultado!!!")
                                entradaDeDados.close
                            }
                        }else{
                            console.log("ERRO: Algo deu errado no processamento. Não será possivél exibir o resultado!!!")
                            entradaDeDados.close
                        }
                    })
                })

            })
        }else if(operacaoMatematica == "CALCULAR MÉDIA" || operacaoMatematica == "CALCULAR MEDIA"){
            entradaDeDados.question("Digite o nome do Aluno:", function(nome2){
                let nomeAluno = nome2

                entradaDeDados.question("Digite o nome do professor(a):", function(nome3){
                    let nomeProfessor = nome3

                    entradaDeDados.question("Digite o sexo do professor:", function(sexo){
                        let sexoProfessor = sexo
                        sexoProfessor = calculos.definirSexoProfessor(sexoProfessor)

                        if(sexoProfessor){
                            entradaDeDados.question("Digite o sexo do aluno:", function(sexo2){
                                let sexoAluno = sexo2 
                                sexoAluno = calculos.definirSexoAluno(sexoAluno)

                                entradaDeDados.question("Digite o nome do curso:", function(curso){
                                    let nomeCurso = curso

                                    entradaDeDados.question("Digite o nome da disciplina:", function(disciplina){
                                        let nomeDisciplina = disciplina

                                        entradaDeDados.question("Digite a primeira nota:", function(valor1){
                                            let nota1 = valor1

                                            entradaDeDados.question("Digite a nota 2:", function(valor2){
                                                let nota2 = valor2

                                                entradaDeDados.question("Digite a nota 3:", function(valor3){
                                                    let nota3 = valor3

                                                    entradaDeDados.question("Digite a nota 4:", function(valor4){
                                                        let nota4 = valor4
                                                        let media = calculos.calcularMediaQuato(nota1, nota2, nota3, nota4)

                                                        if(media){
                                                            let situaçãoAluno = calculos.definirSituacaoAluno(media)

                                                            if(situaçãoAluno == "APROVADO"){
                                                                console.log()
                                                            }else if(situaçãoAluno == "REPROVADO"){

                                                            }else if(situaçãoAluno == "DE RECUPERAÇÃO"){
                                                                console.log("O aluno ficou de RECUPERAÇÃO!!!")
                                                                
                                                                entradaDeDados.question("Digite a nota do aluno no exame de recuperação:",function(valor5){
                                                                    let nota5 = valor5
                                                                    let media2

                                                                    media2 = calculos.calcularMediaDois(media, nota5)
                                                                    
                                                                    if(media2){

                                                                        let situaçãoAluno2 = calculos.definirSituacaoAluno2(media2)

                                                                        if(situaçãoAluno2){
                                                                            console.log("")
                                                                            console.log(`O ${sexoAluno} ${nomeAluno} está ${situaçãoAluno2} na disciplina ${nomeDisciplina}.`)
                                                                            console.log(`Curso: ${nomeCurso}\n${sexoProfessor}: ${nomeProfessor}`)
                                                                            console.log(`Notas do ${sexoAluno}: ${nota1}, ${nota2}, ${nota3}, ${nota4}, Nota do Exame: ${nota5}`)
                                                                            console.log(`Média Final: ${media}`)
                                                                            console.log(`Média final do Exame: ${media2}`)
                                                                            console.log("*******FINALIZANDO PROGRAMA*******")
                                                                        }else{
                                                                            console.log("ERRO: Algo deu errado no processamento. Não será possivél exibir o resultado 1!!!")
                                                                            entradaDeDados.close
                                                                        }
                    
                                                                    }else{
                                                                        console.log("ERRO: Algo deu errado no processamento. Não será possivél exibir o resultado 2!!!")
                                                                        entradaDeDados.close
                                                                    }
                                                                })

                                                            }else{
                                                                console.log("ERRO: Algo deu errado no processamento. Não será possivél exibir o resultado 3 !!!")
                                                                entradaDeDados.close
                                                            }

                                                        }else{
                                                            console.log("ERRO: Algo deu errado no processamento. Não será possivél exibir o resultado 4!!!")
                                                            entradaDeDados.close
                                                        }
                                                    })
                                                })
                                            })
                                        })
                                    })
                                })
                            })

                        }else{
                            console.log("ERRO: Algo deu errado no processamento. Não será possivél exibir o resultado 5!!!")
                            entradaDeDados.close
                        }
                    })
                })
            })

        }else if(operacaoMatematica == "CALCULAR TABUADA" || operacaoMatematica == "TABUADA"){

        }else if(operacaoMatematica == "CALCULAR FATORIAL" || operacaoMatematica == "FATORIAL"){

        }else if(operacaoMatematica == "GERENCIAR PARES E IMPARES"){

        }else{
            console.log("ERRO: Operação não identificada! Por favor, digite conforme orientado!!!")
            entradaDeDados.close
        }
        

    }else{
        console.log("ERRO: Algo deu errado no processamento. Não será possivél exibir o resultado!!!")
        entradaDeDados.close
    }

})

