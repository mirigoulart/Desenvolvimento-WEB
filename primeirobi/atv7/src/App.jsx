import "./App.css";
import Header from "./components/Header";
import Article from "./components/Article";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";

function App() {

  const post = {
    titulo: "Dicas de Lugares para Visitar em Cascavel - Paraná",
    autor: "Mirielen",
    data: "2026-01-25",
    conteudo: [
      "Zoológico Municipal de Cascavel - O Zoológico Municipal de Cascavel é amplo, que possui trilhas entre as árvores, espaços para piquenique em família, amigos e casais e apresenta diversas espécies em extinção.",
      "Feira do Pequeno Produtor de Cascavel - A Feira do Produtor de Cascavel é uma feira tradicional com mais de 40 anos, onde são vendidos produtos frescos e caseiros diretamente de agricultores locais, fortalecendo a agricultura familiar e a economia da cidade.",
      "Lago Municipal de Cascavel - O Lago Municipal de Cascavel, localizado no Parque Ecológico Paulo Gorski, é um dos principais cartões-postais da cidade. O espaço oferece pista para caminhada e ciclismo, áreas de lazer, playground e contato direto com a natureza, sendo muito frequentado por quem busca atividades ao ar livre e momentos de descanso."
    ],
    imagens: [
      {
        src: "https://www.paranaoeste.com.br/arquivos/noticias/25233/zoologico-de-cascavel-abre-agenda-de-2024-para-visitas-guiadas.jpeg",
        legenda: "Zoológico Municipal de Cascavel"
      },
      {
        src: "https://www.jornalavozdoparana.com.br/fotos/g_20230706_144403_10.jpg",
        legenda: "Feira do Pequeno Produtor de Cascavel"
      },
      {
        src: "https://portalcantagalo.com.br/wp-content/uploads/2023/11/lago-cascavel.jpeg",
        legenda: "Lago Municipal de Cascavel"
      }
    ]
  };

  const relacionados = [
    "5 lugares para visitar em Foz do Iguaçu - Paraná",
    "Os melhores lugares para visitar no Paraná",
    "Os 5 melhores restaurantes de Curitiba"
  ];

  return (
    <>
      <Header />

      <main>
        <Article post={post} />
      </main>

      <Sidebar posts={relacionados} />

      <Footer />
    </>
  );
}

export default App;
