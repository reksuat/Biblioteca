module.exports= {
    Adicionar: Adicionar,
    Remover: Remover,
    Listar: Listar,
    Atualizar: Atualizar
}
function Adicionar(livro) {
    const prompt = require("prompt-sync")({ sigint: true });
    let nome = prompt("Nome do livro: ");
    let autor = prompt("Nome do autor: ");
    let tamanho = prompt("Páginas: ");
    let genero = prompt("Gênero: ");

    livro.push({ nome, autor, tamanho, genero });
    return("livro adicionado!");
}
        function Remover(livro) {
            const prompt = require("prompt-sync")({ sigint: true });
            let cancelar= prompt("Digite a consulta que deseja cancelar: ")
            if (cancelar >= 1 || cancelar < livro.length){
                livro.splice(cancelar -1,1);
                return ("Consulta cancelada! ")
            }
        }

        function Listar(livro) {
                if (livro.length==0) {
                    return "Não tem nenhum livro"
                    
                }else{
                    let lista="";
                    livro.forEach((livro, index) => {
                lista+=(`${index + 1}. ${livro.nome} - ${livro.autor} - ${livro.tamanho} - ${livro.genero}\n`);
        });
        return lista.trim()
    }
        }
        function Atualizar(livro, indice) {
            if(livro.length===0){
                return("Nenhum livro para alterar.");
            } else { 
                const prompt = require("prompt-sync")({ sigint: true });
                let indice = prompt("Digite o indice da consulta que deseja mudar: ");
                indice=  Number(indice)
                if (indice>=0 && indice < livro.length) {
                    let nome = prompt("Nome do livro: ");
                    let autor = prompt("Nome do autor: ");
                    let tamanho = prompt("Páginas: ");
                    let genero = prompt("Gênero: ");
    
                    livro[indice]={ nome, autor, tamanho, genero };
                    return("Biblioteca atualizada! ");
        }else{
            return "Índice inexistente"
        }
            }}

            function Genero(gen) {
                gen ={

                }
            }
