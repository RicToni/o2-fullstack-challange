import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav style={{ padding: '10px', background: '#eee' }}>
      <Link to="/">Produtos</Link> |{" "}
      <Link to="/movimentacoes">Movimentações</Link> |{" "}
      <Link to="/relatorios">Relatórios</Link> |{" "}
      <Link to="/agente-ia">Agente IA</Link>
    </nav>
  );
}