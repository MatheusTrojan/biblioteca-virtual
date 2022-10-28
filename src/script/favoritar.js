function alerta(mensagem){
    swal(mensagem, "","success", {
      button: "Encerrar",      
    });
  }

let bibliotecaFavoritos = JSON.parse(localStorage.getItem("favoritos")) || [];

const favoritarLivro = (btn) => {

    const livroAlvo = btn.parentNode.parentNode.parentNode.innerHTML

    console.log(livroAlvo)

    const index = bibliotecaFavoritos.indexOf("<div class='card'>" + livroAlvo + "</div>")
    const existeNoLocalStorage = index != -1

    if (existeNoLocalStorage) {
        bibliotecaFavoritos.splice(index, 1);
        alerta("Livro removido dos seus favoritos!")

    } else {
        bibliotecaFavoritos.push("<div class='card'>" + livroAlvo + "</div>")
        alerta("Livro adicionado aos seus favoritos!")
    }

    localStorage.setItem("favoritos", JSON.stringify(bibliotecaFavoritos))


}


let favorito = document.getElementById("bibliotecaFavoritos")

mostrafavorito(bibliotecaFavoritos)

function mostrafavorito(livros) {
    for (i = 0; i < livros.length; i++)
    favorito.innerHTML += livros[i] 
}