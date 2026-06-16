
//Componente funcional
function BemVindo(props) {
    return <h1>Bem vindo{props.nome}!</h1>
}

//function Conteudo() {
//    return (
//        <div>
//            <p>Isso é uma frase aleatoria so pra ocupar espaço</p>
//            <p>Outra frase pra ocupar espaço blablabla</p>
//        </div>
//    )
//}

function App() {
    return (
        <div>
            <BemVindo nome=" Vinícius" />
            <BemVindo nome=" Isla" />
            <Conteudo/>
        </div>
    )
}

//Componente de classe
class Conteudo extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
        <div>
           <p>Isso é uma frase aleatoria so pra ocupar espaço</p>
            <p>Outra frase pra ocupar espaço blablabla</p>
        </div>
    )
    }
}

//Básico do React 
ReactDOM.render(
    <App/>,
    document.querySelector("#root")
);
