const { Adicionar, Listar, Remover, Atualizar } = require("./armazenamento");
const prompt = require("prompt-sync")({ sigint: true });
let Livro=[];
let escolha
while (escolha!=0) {
    

console.log(`
//     >>>> Biblioteca <<<<
//     1. Adicionar um novo livro
//     2. Remover um livro
//     3. Listar todos os livros
//     4. Atualizar um livro
//     0. Sair
//     `);
escolha= prompt("Escolha uma opção: ");
switch (escolha) {
    case "1":
        console.log(Adicionar(Livro));
        break
        case "2":
            console.log(Remover(Livro));
            break
            case "3":
                console.log(Listar(Livro));
                break
                case "4":
                    console.log(Atualizar(Livro));
                    break
                    case "0":
                        console.log("encerrando..");
        break;

    default:
        console.log("opção inválida");
        break;
}
}