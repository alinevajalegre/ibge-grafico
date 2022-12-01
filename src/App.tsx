import "./App.css";
import { useState } from "react";
import ReactDOM from 'react-dom';
import { VictoryBar, VictoryChart, VictoryAxis,
        VictoryTheme, 
        VictoryStack, VictoryPie} from 'victory';

// type IBGEnomes = {
//   name: string;
//   res: [];
// };

const ranking = [
  {nome: "maria", freq: 11734129},
  {nome: "jose", freq: 5754529},
  {nome: "ana", freq: 3089858},
  {nome: "joao", freq: 2984119},
  {nome: "antonio", freq: 2576348},
  {nome: "francisco", freq: 1772197},
  {nome: "carlos", freq: 1489191},
  {nome: "paulo", freq: 1423262},
  {nome: "pedro", freq: 1219605},
  {nome: "lucas", freq: 1127310},
];

function App() {
  const [search, setSearch] = useState("");
  const [res, setRes] = useState([]);
  const [name, setName] = useState("");

  const handleSearch = () => {
    fetch(`https://servicodados.ibge.gov.br/api/v2/censos/nomes/${search}`)
    .then(response => response.json())
    .then(response => {

    setName(response[0].nome)
    setRes(response[0].res)
    })
    .catch((err) => {
      console.log("Nome não encontrado!: " + err);
    });

    return(
      <div>

<h2 className="main">{name}</h2>
        <div className="main">
          {res.map((result: any) => {
            return (
              <div key={result}>
                <div className="card">
                  <p>{result.periodo} <br></br>
                  <span className="frequency">{result.frequencia}</span>
                  <br></br>
                  pessoas com o nome <span className="name">{name.toLowerCase()}</span>!</p>
                </div>
                <span className="separator"></span>
              </div>
            )
          })
          }
        </div>
      <div>
      </div>

      </div>
    )
  }
  
  return (
    <div>
      <div className="center-div">
        <header className="header-top">
          <a href="">Sobre o projeto</a>
        </header>

        <h1 className="main">Buscador de nomes</h1>
        <p className="main">Pesquise por um nome e veja a frequência dele em determinados períodos.<br></br> 
          A busca não funciona com nomes compostos e acentuações.</p>
        <div className="main">
          <input
            className="form"
            type="text"
            placeholder="Digite um nome"
            onChange={(event) => setSearch(event.target.value)}
          />
          <button onClick={handleSearch} className="">Buscar</button>
        </div>
      </div>
        <div className="ranking-title main">
          Ranking dos nomes mais populares de todos os tempos
        </div>
        <span className="warning main">
          O [ Indica que o número pertence ao intervalo <br></br>
          ] Indica que o número não pertence ao intervalo
        </span>
        <div className="ranking main">

        {/* <VictoryChart
        animate={{
          duration: 2000,
          onLoad: { duration: 1000 }
        }}
        theme={VictoryTheme.material}
        // padding={{ right: 5, bottom: 0 }}
        // width= {300}
        // height= {300}      
      >
        <VictoryAxis
          tickValues={[5, 10, 15, 20, 25, 30, 35, 40, 45, 50]}
          // tickFormat={["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]}

        />
        <VictoryAxis
          dependentAxis
          tickFormat={(x) => (`${x} pessoas`)}
        />
        <VictoryBar
          data={ranking}
          x="nome"
          y="freq"
        />
      </VictoryChart> */}



        <VictoryPie

animate={{
  duration: 200
}}
                theme={VictoryTheme.material}

          data={[
            {x: "maria", y: 11734129},
            {x: "jose", y: 5754529},
            {x: "ana", y: 3089858},
            {x: "joao", y: 2984119},
            {x: "antonio", y: 2576348},
            {x: "francisco", y: 1772197},
            {x: "carlos", y: 1489191},
            {x: "paulo", y: 1423262},
            {x: "pedro", y: 1219605},
            {x: "lucas", y: 1127310},
        ]}

        style={{
          data: {
            fillOpacity: 0.9, stroke: "white", strokeWidth: 1
          },
          labels: {
            fontSize: 12, fill: "#646cff"
          }
        }}

        />


        </div>
        {/* <h2 className="main">{name}</h2>
        <div className="main">
          {res.map((result: any) => {
            return (
              <div key={result}>
                <div className="card">
                  <p>{result.periodo} <br></br>
                  <span className="frequency">{result.frequencia}</span>
                  <br></br>
                  pessoas com o nome <span className="name">{name.toLowerCase()}</span>!</p>
                </div>
                <span className="separator"></span>
              </div>
            )
          })
          }
        </div>
      <div>
      </div> */}
      <footer className="main">
        <img src="logo-ft.png" alt="Logo da Faculdade de Tecnologia da Unicamp" width="70" height="60"></img>
        <span className="footer-text">Faculdade de Tecnologia da UNICAMP - 2022</span>
      </footer>
    </div>
  );
}

export default App;