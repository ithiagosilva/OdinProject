// https://m.media-amazon.com/images/I/61NHEYzP6kL._AC_UF1000,1000_QL80_.jpg

let btnAddNovoLivro = document.getElementById('btnAddNovoLivro')
let formulario = document.getElementById('formulario')
let inputTitulo = document.getElementById('titulo')
let inputCapa = document.getElementById('capa')
let inputSinopse = document.getElementById('sinopse')
let inputPaginas = document.getElementById('paginas')
let inputAno = document.getElementById('ano')
let inputLido = document.getElementById('lido')
let btnAdicionar = document.getElementById('btnAdicionar')
let btnFechar = document.getElementById('btnFechar')
let livros = document.getElementById('livros')
let containerAddLivro = document.querySelector('.container-addLivro')
const myLibrary = [];

formulario.addEventListener('submit', (e) => {
    e.preventDefault();
});

let pVazio = document.createElement('p');
function displayMsgVazia() {
    pVazio.innerHTML = 'Biblioteca Vazia...<br>Adicione os livros que leu ou deseja ler';
    pVazio.setAttribute('class', 'msg-vazio')
    containerAddLivro.insertBefore(pVazio, containerAddLivro.childNodes[2]);
}

btnAddNovoLivro.addEventListener('click', () => {
    btnAddNovoLivro.style.display = "none";
    formulario.style.display = "block";
    document.getElementById('titulo-mbiblioteca').style.display = "none";
    pVazio.style.display = "none";
    livros.style.display = "none";
});

btnFechar.addEventListener('click', () => {
    btnAddNovoLivro.style.display = "block";
    formulario.style.display = "none";
    document.getElementById('titulo-mbiblioteca').style.display = "block";
    livros.style.display = "flex";
});

btnAdicionar.addEventListener('click', () => {
    let vTitulo = inputTitulo.value;
    let vCapa = inputCapa.value;
    let vSinopse = inputSinopse.value;
    let vPaginas = inputPaginas.value;
    let vAno = inputAno.value;
    let vLido = inputLido.value;
    if (!vTitulo || !vCapa || !vSinopse || !vPaginas || !vAno) {
        console.log("Preenchimento incorreto")
    } else {
        document.getElementById('titulo-mbiblioteca').style.display = "block";
        btnAddNovoLivro.style.display = "block";
        formulario.style.display = "none";
        addBooktoLibrary(vTitulo, vCapa, vSinopse, vPaginas, vAno, vLido);
        criarCard(myLibrary);
        livros.style.display = "flex";
        if (livros.childNodes.length > 1) {
            for (let i = 1; i < livros.childNodes.length; i++) {
                livros.removeChild(livros.childNodes[i]);
            }
        }
        salvarLivros();
    }

});

function Book(titulo, capa, sinopse, paginas, ano, lido) {
    this.titulo = titulo,
    this.capa = capa, 
    this.sinopse = sinopse,
    this.paginas = paginas,
    this.ano = ano,
    this.lido = lido
};

function addBooktoLibrary(vTitulo, vCapa, vSinopse, vPaginas, vAno, vLido) {
    const livro = new Book(vTitulo, vCapa, vSinopse, vPaginas, vAno, vLido);
    myLibrary.push(livro);
}
 
function criarCard(lista) {
    for(let i = 0; i < lista.length; i++) {
        let li = document.createElement('li');
        li.setAttribute("class", "card")

        let h1Titulo = document.createElement('h1');
        h1Titulo.innerText = lista[i].titulo;

        let imgCapa = document.createElement('img');
        imgCapa.setAttribute('src', `${lista[i].capa}`);

        let pSinopse = document.createElement('p');
        pSinopse.innerText = lista[i].sinopse;

        let smallPagina = document.createElement('small');
        smallPagina.innerText = 'Páginas: ' + lista[i].paginas;

        let smallAno = document.createElement('small');
        smallAno.innerText = 'Ano: ' + lista[i].ano;

        let pLido = document.createElement('p');
        pLido.innerText = `${lista[i].lido == "sim" ? "Já Lido" : "A ler"}`

        let br = document.createElement('br');

        li.appendChild(h1Titulo);
        li.appendChild(imgCapa);
        li.appendChild(pSinopse);
        li.appendChild(smallPagina);
        li.appendChild(br);
        li.appendChild(smallAno);
        li.appendChild(pLido);
        livros.appendChild(li);

        // console.log(lista[i]);
    }
}

let listaDeLivrosSalvos = [];
let listaJSON = [];
function salvarLivros() {
    listaJSON = JSON.stringify(myLibrary);
    let localSet = localStorage.setItem('livros', listaJSON);
    listaDeLivrosSalvos.push(localSet);
}

let listaJSONconv = [];
function exibirLivrosSalvos() {
    let localGet = localStorage.getItem('livros');
    listaJSONconv = JSON.parse(localGet);
    for (let i = 0; i < listaJSONconv.length; i++) {
        addBooktoLibrary(listaJSONconv[i].titulo, listaJSONconv[i].capa, listaJSONconv[i].sinopse, listaJSONconv[i].paginas, listaJSONconv[i].ano);

    }
    criarCard(listaJSONconv);
}

if (localStorage.getItem('livros')) {
    exibirLivrosSalvos();
}


if (myLibrary.length === 0) {
    displayMsgVazia();
}

