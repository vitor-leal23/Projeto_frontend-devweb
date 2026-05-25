import { ISidebarProps } from '../interfaces/IFilme';

function Sidebar({ generos, generoSelecionado, onFiltrar }: ISidebarProps) {
  return (
    <div className="sidebar-cine mb-4">
      <h5 className="sidebar-title">🎭 Filtrar por Gênero</h5>
      {generos.map((genero) => (
        <button
          key={genero}
          className={`genero-btn ${generoSelecionado === genero ? 'ativo' : ''}`}
          onClick={() => onFiltrar(genero)}
        >
          {genero}
        </button>
      ))}
    </div>
  );
}

export default Sidebar;
