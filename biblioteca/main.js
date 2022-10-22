var  verifica_existencia= false;

function consultaLivros() {
    
    const CONSULTA = (document.getElementById("consulta").value).toLowerCase();
    var resultado = document.getElementById("res");
    carregar.setAttribute('style', 'display: block;');
    var exibição_consulta = document.getElementById("livro__resultado");

    if (verifica_existencia == true) {
        resultado.remove(resultado);

            resultado = document.createElement('div');
            resultado.setAttribute('id', 'res'); 
            resultado.setAttribute('class', 'results'); 

            carregar = document.createElement('div');
            carregar.setAttribute('class', 'livro_carregar');
            carregar.setAttribute('id', 'carregar');
            
            exibição_consulta = document.createElement('div');
            exibição_consulta.setAttribute('id', 'livro__resultado');

            resultado.appendChild(carregar);
            resultado.appendChild(exibição_consulta);

            document.getElementById('main').appendChild(resultado);
        }

        exibição_consulta.innerHTML = "Os resultados encontrados para \"" + CONSULTA + "\"";

    const URL = "https://www.googleapis.com/books/v1/volumes?q=" + CONSULTA
    
    var solicitar = new XMLHttpRequest();
    
    // Open a new connection, using the GET request on the URL endpoint
    solicitar.open('GET', URL, true);
    
    solicitar.onload = function () {
        // Begin accessing JSON data here
        
        for (var i = 0; i < 10; i++) {
            var dados = JSON.parse(this.response);
            // console.log(data)
            var autor = (dados["items"][i]["volumeInfo"]["authors"]) || 'Autor desconhecido'
            var titulo = (dados["items"][i]["volumeInfo"]["title"]) || 'Titulo desconhecido'
            var editora = (dados["items"][i]["volumeInfo"]["publisher"]) || 'Editora desconhecida'
            try {
            var miniatura = dados["items"][i]["volumeInfo"]["imageLinks"]["thumbnail"] 
            }
            catch (err) {
                var miniatura = 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Georgia_404.svg/1125px-Georgia_404.svg.png'
            }

        var info = (dados["items"][i]["volumeInfo"]["infoLink"]) || 'No info Disclosed'
            
            
        card = document.createElement('div');
        card.setAttribute('class', 'card col-md-6');
        card.setAttribute('style', 'max-width: 32rem;');
        card.setAttribute('id', 'results');


        const logotipo = document.createElement('img');
        logotipo.src = miniatura;
        logotipo.className = "card-img-top"
    
        card.appendChild(logotipo);
        
        const card_body = document.createElement('div');
        card_body.setAttribute('class', 'card-body');
        
        const card_title = document.createElement('h5');
        card_title.setAttribute('class', 'card-title');
        card_title.innerHTML = titulo;
        
        card_body.appendChild(card_title);
        
        const card_text = document.createElement('p');
        card_text.setAttribute('class', 'card-text');
        card_text.innerHTML = "Autor: " + autor + "<br>Publicado por: " + editora;
        
        card_body.appendChild(card_text);
        
        const button = document.createElement('a');
        button.setAttribute('class', 'btn btn-primary btn-md');
        button.setAttribute('href', info);
        button.innerHTML = "veja esse livro"
        
        card_body.appendChild(button);

        card.appendChild(card_body);
        
        resultado.appendChild(card); }
    } 
    
    verifica_existencia = true;
    // Send request
    solicitar.send()
    document.getElementById('consulta').value = ''
    setTimeout("livro_carregar.setAttribute('style', 'display: none;')", 1500); 
    
}