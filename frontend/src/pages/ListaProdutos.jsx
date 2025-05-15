import { useEffect, useState } from 'react';
import axios from 'axios';

function ListaProdutos() {
  const [produtos, setProdutos] = useState([]);
  const [erro, setErro] = useState('');

  useEffect(() => {
    async function fetchProdutos() {
      try {
        const res = await axios.get('http://localhost:3000/api/produtos');
        setProdutos(res.data);
      } catch (err) {
        console.error(err);
        setErro('Erro ao buscar produtos.');
      }
    }

    fetchProdutos();
  }, []);

  return (
    <div className="max-w-5xl mx-auto mt-8 p-6 bg-white shadow-md rounded">
      <h2 className="text-2xl font-bold mb-6">Produtos Cadastrados</h2>

      {erro && <p className="text-red-500 mb-4">{erro}</p>}

      {produtos.length === 0 ? (
        <p>Nenhum produto cadastrado ainda.</p>
      ) : (
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-2 border">Nome</th>
              <th className="p-2 border">Descrição</th>
              <th className="p-2 border">Quantidade</th>
              <th className="p-2 border">Preço</th>
              <th className="p-2 border">Categoria</th>
            </tr>
          </thead>
          <tbody>
            {produtos.map((produto) => (
              <tr key={produto.id} className="text-center">
                <td className="p-2 border">{produto.nome}</td>
                <td className="p-2 border">{produto.descricao}</td>
                <td className="p-2 border">{produto.quantidade}</td>
                <td className="p-2 border">R$ {Number(produto.preco).toFixed(2)}</td>
                <td className="p-2 border">{produto.categoria}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default ListaProdutos;
