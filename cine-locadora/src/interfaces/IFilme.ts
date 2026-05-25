export interface IFilme {
  id: number;
  titulo: string;
  genero: string;
  ano: number;
  diretor: string;
  sinopse: string;
  capa: string;
  alugado: boolean;
}

export interface ICardFilmeProps {
  filme: IFilme;
  onAlugar: (id: number) => void;
  onDevolver: (id: number) => void;
}

export interface IDashboardProps {
  totalFilmes: number;
  filmesDisponiveis: number;
  filmesAlugados: number;
}

export interface ISidebarProps {
  generos: string[];
  generoSelecionado: string;
  onFiltrar: (genero: string) => void;
}
