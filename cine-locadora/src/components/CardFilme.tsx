import { ICardFilmeProps } from '../interfaces/IFilme';

function CardFilme({ filme, onAlugar, onDevolver }: ICardFilmeProps) {
  return (
    <div className="card-filme">
      <div className={`card-filme-capa ${filme.alugado ? 'alugado-capa' : ''}`}>
        <span>{filme.capa}</span>
        <span className={filme.alugado ? 'badge-alugado' : 'badge-disponivel'}>
          {filme.alugado ? 'Alugado' : 'Disponível'}
        </span>
      </div>
      <div className="card-body-cine">
        <h5 className="card-titulo-filme">{filme.titulo}</h5>
        <p className="card-meta">🎬 {filme.diretor}</p>
        <p className="card-meta">📅 {filme.ano}</p>
        <span className="badge-genero">{filme.genero}</span>
        <p className="card-sinopse">{filme.sinopse}</p>
        {filme.alugado ? (
          <button
            className="btn-devolver"
            onClick={() => onDevolver(filme.id)}
          >
            Devolver Filme
          </button>
        ) : (
          <button
            className="btn-alugar"
            onClick={() => onAlugar(filme.id)}
          >
            Alugar Agora
          </button>
        )}
      </div>
    </div>
  );
}

export default CardFilme;
