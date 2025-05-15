import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import CadastroProduto from './pages/CadastroProduto';
import ListaProdutos from './pages/ListaProdutos';

function App() {
  return (
    <Router>
      <div>
        <header className="bg-blue-600 text-white p-4 shadow-md">
          <nav className="max-w-7xl mx-auto flex justify-between items-center">
            <h1 className="text-xl font-bold">Sistema de Estoque</h1>
            <ul className="flex gap-4">
              <li>
                <Link to="/" className="hover:underline">Produtos</Link>
              </li>
              <li>
                <Link to="/cadastro" className="hover:underline">Cadastrar Produto</Link>
              </li>
            </ul>
          </nav>
        </header>

        <main className="p-6 bg-gray-50 min-h-screen">
          <Routes>
            <Route path="/" element={<ListaProdutos />} />
            <Route path="/cadastro" element={<CadastroProduto />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
