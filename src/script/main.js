

let buscarLivro = document.getElementById("btn-pesquisar")
buscarLivro.addEventListener("click", pesquisaLivro)

async function pesquisaLivro() {
    const nomeLivro = document.getElementById("nome-livro")
    const linkDaAPI = await fetch (`https://www.googleapis.com/books/v1/volumes?q=${nomeLivro.value}`)  
    const resultadoBusca = await linkDaAPI.json();
    if (nomeLivro.value == "") {
        alert("Por favor preencha o campo de busca")
    } else {
        console.log(resultadoBusca)
    }
    


}


// getBuscarLivrosDaAPI()

// async function getBuscarLivrosDaAPI() {
//     const res = await fetch(linkDaAPI)
//     livros = await res.json()

//     console.log(livros)
// }
