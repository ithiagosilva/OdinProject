function Book(titulo, autor, paginas, lido) {
    this.titulo = titulo;
    this.autor = autor;
    this.paginas = paginas;
    this.lido = lido;
    this.info = function() {
        return `${titulo}, ${autor}, ${paginas} páginas, ${lido ? "Já lido" : "Não lido ainda"}`
    }
}

const book1 = new Book("O Pequeno Príncipe","Antoine de Saint-Exupéry", 96, true);
const book2 = new Book("Romeu E Julieta", "William Shakespeare", 248, true);
const book3 = new Book("1984", "George Orwell", 416, false);

console.log(book3.info());
