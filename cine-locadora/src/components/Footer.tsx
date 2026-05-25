function Footer() {
  const anoAtual = new Date().getFullYear();

  return (
    <div className="footer-cine">
      <div className="container">
        <p className="mb-2" style={{ color: '#e50914', fontWeight: 700, fontFamily: 'Montserrat, sans-serif' }}>
          🎬 CineLocadora
        </p>
        <address>
          <strong>Aluno:</strong> Vitor Leal<br />
          <strong>Curso:</strong> Análise e Desenvolvimento de Sistemas<br />
          <strong>Disciplina:</strong> Desenvolvimento Front-End — Prof. Fernando<br />
          <strong>Data:</strong> {anoAtual}
        </address>
        <small className="text-muted">© {anoAtual} CineLocadora. Todos os direitos reservados.</small>
      </div>
    </div>
  );
}

export default Footer;
