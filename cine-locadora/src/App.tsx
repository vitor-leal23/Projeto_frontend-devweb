import { useState } from 'react';
import { IFilme } from './interfaces/IFilme';
import { filmesIniciais } from './data/filmes';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import CardFilme from './components/CardFilme';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [filmes, setFilmes] = useState<IFilme[]>(filmesIniciais);
  const [generoSelecionado, setGeneroSelecionado] = useState<string>('Todos');

  const handleAlugar = (id: number): void => {
    setFilmes((prev) =>
      prev.map((f) => (f.id === id ? { ...f, alugado: true } : f))
    );
  };

  const handleDevolver = (id: number): void => {
    setFilmes((prev) =>
      prev.map((f) => (f.id === id ? { ...f, alugado: false } : f))
    );
  };

  const generosUnicos: string[] = [
    'Todos',
    ...Array.from(new Set(filmesIniciais.map((f) => f.genero))),
  ];

  const filmesFiltrados: IFilme[] =
    generoSelecionado === 'Todos'
      ? filmes
      : filmes.filter((f) => f.genero === generoSelecionado);

  const totalFilmes: number = filmes.length;
  const filmesAlugados: number = filmes.filter((f) => f.alugado).length;
  const filmesDisponiveis: number = totalFilmes - filmesAlugados;

  return (
    <>
      <header>
        <Navbar />
      </header>

      <main className="container-fluid px-4 py-4">
        <Dashboard
          totalFilmes={totalFilmes}
          filmesDisponiveis={filmesDisponiveis}
          filmesAlugados={filmesAlugados}
        />

        <div className="row g-4">
          <aside className="col-12 col-md-3">
            <Sidebar
              generos={generosUnicos}
              generoSelecionado={generoSelecionado}
              onFiltrar={setGeneroSelecionado}
            />
          </aside>

          <section className="col-12 col-md-9">
            <h2 className="section-titulo">
              {generoSelecionado === 'Todos' ? 'Todos os Filmes' : generoSelecionado}
              <span className="ms-3 fs-6 fw-normal text-muted">
                ({filmesFiltrados.length} {filmesFiltrados.length === 1 ? 'título' : 'títulos'})
              </span>
            </h2>
            <div className="row g-4">
              {filmesFiltrados.length > 0 ? (
                filmesFiltrados.map((filme) => (
                  <div className="col-12 col-sm-6 col-xl-4" key={filme.id}>
                    <CardFilme
                      filme={filme}
                      onAlugar={handleAlugar}
                      onDevolver={handleDevolver}
                    />
                  </div>
                ))
              ) : (
                <div className="col-12 text-center py-5">
                  <p className="text-muted fs-5">Nenhum filme encontrado para este gênero.</p>
                </div>
              )}
            </div>
          </section>
        </div>
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
