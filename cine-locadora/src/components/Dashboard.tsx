import { IDashboardProps } from '../interfaces/IFilme';

function Dashboard({ totalFilmes, filmesDisponiveis, filmesAlugados }: IDashboardProps) {
  return (
    <section className="mb-4">
      <h2 className="section-titulo">Dashboard</h2>
      <div className="row g-3">
        <div className="col-12 col-sm-4">
          <div className="dashboard-card p-4 text-center">
            <div className="dashboard-number text-white">{totalFilmes}</div>
            <div className="text-muted mt-1">🎥 Total de Filmes</div>
          </div>
        </div>
        <div className="col-12 col-sm-4">
          <div className="dashboard-card p-4 text-center">
            <div className="dashboard-number" style={{ color: '#2ecc71' }}>{filmesDisponiveis}</div>
            <div className="text-muted mt-1">✅ Disponíveis</div>
          </div>
        </div>
        <div className="col-12 col-sm-4">
          <div className="dashboard-card p-4 text-center">
            <div className="dashboard-number" style={{ color: '#e50914' }}>{filmesAlugados}</div>
            <div className="text-muted mt-1">🔒 Alugados</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Dashboard;
