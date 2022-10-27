let bibliotecaFavoritos = JSON.parse(localStorage.getItem("favoritos")) || [];

const favoritarLivro = (btn) => {

    const livroAlvo = btn.parentNode.innerHTML

    // console.log(livroAlvo)

    const index = bibliotecaFavoritos.indexOf("<div class='livro__card'>" + livroAlvo + "</div>")
    const existeNoLocalStorage = index != -1

    if (existeNoLocalStorage) {
        bibliotecaFavoritos.splice(index, 1);

    } else {
        bibliotecaFavoritos.push("<div class='livro__card'>" + livroAlvo + "</div>")
    }

    localStorage.setItem("favoritos", JSON.stringify(bibliotecaFavoritos))

}


let favorito = document.getElementById("bibliotecaFavoritos")

mostrafavorito(bibliotecaFavoritos)

function mostrafavorito(livros) {
    for (i = 0; i < livros.length; i++)
    favorito.innerHTML += livros[i] 
}