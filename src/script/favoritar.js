let bibliotecaFavoritos = JSON.parse(localStorage.getItem("favoritos")) || []; // aqui, dá para fazer um map, forEach, forOf ETC

const favoritarLivro= (btn) => {
    bibliotecaFavoritos.push(btn.parentNode.innerHTML)
    
    //const index = bibliotecaFavoritos.indexOf()

    localStorage.setItem("favoritos", JSON.stringify(bibliotecaFavoritos))

}

let favorito = document.getElementById("bibliotecaFavoritos")

mostrafavorito(bibliotecaFavoritos)

function mostrafavorito(livros) {
    let favorito = document.getElementById("bibliotecaFavoritos")
    for (i = 0; i < livros.length; i++)
    favorito.innerHTML += livros[i] 
}



// localStorage.setItem("biblioteca", livros[livro])

