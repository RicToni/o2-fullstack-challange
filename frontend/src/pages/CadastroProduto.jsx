import { useState } from 'react';
import axios from 'axios';

function CadastroProduto() {
  const [formData, setFormData] = useState({
    nome: '',
    descricao: '',
    quantidade: '',
    preco: '',
    categoria: ''
  });

  const [mensagem, setMensagem] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post('http://localhost:3000/api/produtos', {
        nome: formData.nome,
        descricao: formData.descricao,
        quantidade: parseInt(formData.quantidade),
        preco: parseFloat(formData.preco),
        categoria: formData.categoria
      });

      setMensagem('Produto cadastrado com sucesso!');
      setFormData({
        nome: '',
        descricao: '',
        quantidade: '',
        preco: '',
        categoria: ''
      });
    } catch (err) {
      console.error(err);
      setMensagem('Erro ao cadastrar o produto.');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white shadow-md rounded">
      <h2 className="text-xl font-bold mb-4">Cadastrar Produto</h2>
      {mensagem && <p className="mb-4 text-center">{mensagem}</p>}

      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" name="nome" value={formData.nome} onChange={handleChange} placeholder="Nome" required className="w-full p-2 border rounded" />
        <input type="text" name="descricao" value={formData.descricao} onChange={handleChange} placeholder="Descrição" required className="w-full p-2 border rounded" />
        <input type="number" name="quantidade" value={formData.quantidade} onChange={handleChange} placeholder="Quantidade" required className="w-full p-2 border rounded" />
        <input type="number" step="0.01" name="preco" value={formData.preco} onChange={handleChange} placeholder="Preço Unitário" required className="w-full p-2 border rounded" />
        <input type="text" name="categoria" value={formData.categoria} onChange={handleChange} placeholder="Categoria" required className="w-full p-2 border rounded" />

        <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700">
          Cadastrar
        </button>
      </form>
    </div>
  );
}

export default CadastroProduto;
