let bibliotecaFavoritos = JSON.parse(localStorage.getItem("favoritos")) || []; // aqui, dá para fazer um map, forEach, forOf ETC

const favoritarLivro= (btn) => {
    bibliotecaFavoritos.push(btn.parentNode.innerHTML)
    
    localStorage.setItem("favoritos", JSON.stringify(bibliotecaFavoritos))
}

// localStorage.setItem("biblioteca", livros[livro])