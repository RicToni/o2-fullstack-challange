import React, { useEffect, useState } from 'react';
import ProdutoTabela from '../components/ProdutoTabela';

const ListarProdutos = () => {
  const [produtos, setProdutos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:3000/api/produtos') // ajuste a URL conforme seu backend
      .then(res => res.json())
      .then(data => {
        console.log('Dados recebidos:', data); // <-- Aqui pode deixar o log
        setProdutos(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <h1 className="text-4xl font-bold mb-6">Lista de Produtos</h1>

      {loading ? (
        <p>Carregando produtos...</p>
      ) : (
        <ProdutoTabela produtos={produtos} />
      )}
    </div>
  );
};

export default ListarProdutos;