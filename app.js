

//Componente funcional
function BemVindo(props) {
    return (
        <h1>Bem vindo{props.nome}!</h1>
    )
}

function Conteudo() {
    return (
        <div>
            <p>Isso é uma frase aleatoria so pra ocupar espaço</p>
            <p>Te amo demais</p>
            <p>Outra frase pra ocupar espaço blablabla</p>
        </div>
    )
}



//Componente de classe
//class Conteudo extends React.Component {
//    constructor(props){
//      super(props);
//    }
//    render() {
//        return (
//        <div>
//           <p>Isso é uma frase aleatoria so pra ocupar espaço</p>
//           <p>Outra frase pra ocupar espaço blablabla</p>
//        </div>
//    )
//    }
//}

//Básico do React 

function Contador (props) {

    //Criar um STATE
    const [count, setCount] = React.useState(0);

    function add() {
        setCount(count + 1)
    }

    function sub() {
        setCount(count - 1)
    }
    return (
        <div className="p-5 mb-4 bg-light rounded-3">
        <div className="container-fluid py-5">
          <h1 className="display-5 fw-bold">Contador: {count} </h1>
          <p className="col-md-8 fs-4">Aprendendo State (Estado)</p>
          <div className="row gap-2">
            <button onClick={sub} className="col btn btn-danger btn-lg" type="button">Sub -</button>
            <button onClick={add} className="col btn btn-success btn-lg" type="button">add +</button>
          </div>
        </div>
      </div>
    )
}

function App() {
    return (
        <div>
            <BemVindo nome=" Vinícius" />
            <BemVindo nome=" Isla" />
            <Conteudo />
            <Contador/>
        </div>
    )
}


ReactDOM.render(
    <App />,
    document.querySelector("#root")
);


