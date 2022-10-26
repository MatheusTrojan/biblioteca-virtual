let livros = []

let buscarLivro = document.getElementById("btn-pesquisar")
buscarLivro.addEventListener("click", pesquisaLivro)

async function pesquisaLivro() {
    const nomeLivro = document.getElementById("nome-livro")
    if (nomeLivro.value == "") {
        alert("Por favor preencha o campo de busca")
    } else {
        let titulo = "";
        let autor = "";
        let imagem = "";
        let url = "";

        const linkDaAPI = await fetch (`https://www.googleapis.com/books/v1/volumes?q=${nomeLivro.value}`)  
        const resultadoBusca = await linkDaAPI.json();
        console.log(resultadoBusca.items)
        
        for (i = 0; i < resultadoBusca.items.length; i++) {
            let livro = "";
            titulo = resultadoBusca.items[i].volumeInfo.title
            autor = resultadoBusca.items[i].volumeInfo.authors
            imagem = resultadoBusca.items[i].volumeInfo.imageLinks.thumbnail
            url = resultadoBusca.items[i].volumeInfo.infoLink

            livro += "<div class='livro__card'><h3 class='livro__titulo'>" + titulo + "</h3>"
            livro += "<h4 class='livro__autor'>" + autor + "</h4>"
            livro += "<img class='livro__imagem' src=" + imagem + ">"
            livro += "<a href='" + url + "'><button class='livro__saiba-mais'>Saiba Mais</button></a>"
            livro += "<button class='btn-favoritar' id='btn-favoritar' onclick='favoritarLivro(this)'>Favoritar</button></div>"

            livros.push(livro)

        }
        nomeLivro.value = ""
        mostraLivroNaTela(livros)
    }
}

function mostraLivroNaTela(livros) {
    let elementoListaLivros = document.getElementById("resultadoFinal")
    for (i = 0; i < livros.length; i++)
        elementoListaLivros.innerHTML += livros[i] 
}



