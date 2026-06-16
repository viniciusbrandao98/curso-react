
function nomeCompleto(usuario) {
    return usuario.nome + ' ' + usuario.sobrenome
}

const usuario = {
    nome: "Vinícius",
    sobrenome: "Brandão"
}

const nome = "Vinícius Brandão";
const pagina = (
    <div>
        <h1 className="header">Olá {nome}!</h1>
        <p>Isso é um parágrafo</p>
    </div>
);

//Básico do React 
ReactDOM.render(
    pagina,
    document.querySelector("#root")
);
