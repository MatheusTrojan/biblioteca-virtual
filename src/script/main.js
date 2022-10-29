let livros = []

let buscarLivro = document.getElementById("btn-pesquisar")
buscarLivro.addEventListener("click", pesquisaLivro)

async function pesquisaLivro() {
    let elementoListaLivros = document.getElementById("resultadoFinal")
    elementoListaLivros.innerHTML = ""
    livros = []
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
            if (resultadoBusca.items[i].volumeInfo.imageLinks != undefined){
                imagem = resultadoBusca.items[i].volumeInfo.imageLinks.thumbnail
            } else {
                imagem = "https://telhafer.com.br/image/no_image.jpg"
            }
            url = resultadoBusca.items[i].volumeInfo.infoLink
            
            livro += "<div class='card'>"
            livro += "<img class='livro__imagem' src=" + imagem + ">"
            livro += "<div class='livro__infos'><h3 class='livro__titulo'>" + titulo + "</h3>"
            livro += "<h4 class='livro__autor'>" + autor + "</h4>"            
            livro += "<div class='livro__botoes'><a href='" + url + "'><button class='livro__botao'>Saiba Mais</button></a>"
            livro += "<button class='btn-favoritar livro__botao' id='btn-favoritar' onclick='favoritarLivro(this)'>Favoritar</button></div></div>"
           
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



