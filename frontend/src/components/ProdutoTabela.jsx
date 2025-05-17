import React from 'react';

const ProdutoTabela = ({ produtos }) => {
  return (
    <>
      {produtos.map(({ id, nome, preco, quantidade }) => (
        <tr
          key={id}
          className="hover:bg-gray-700 transition-colors duration-200"
        >
          <td className="border border-gray-600 px-4 py-2">{id}</td>
          <td className="border border-gray-600 px-4 py-2">{nome}</td>
          <td className="border border-gray-600 px-4 py-2">
            R$ {preco !== undefined && preco !== null ? Number(preco).toFixed(2) : '0.00'}
          </td>
          <td className="border border-gray-600 px-4 py-2">{quantidade}</td>
        </tr>
      ))}
    </>
  );
};

export default ProdutoTabela;
