import { sql } from "../services/db.js";

export const ProdutoQueries = {
  getAll: async () => {
    return await sql`SELECT * FROM tb_produto`;
  },
  getById: async (id) => {
    const result = await sql`SELECT * FROM tb_produto WHERE id_produto = ${id}`;
    return result.length > 0 ? result[0] : null; // Retorna null se não encontrar
  },
  create: async ({ nome, un_medida, qtd_estoque }) => {
    const result = await sql`INSERT INTO tb_produto (nome, un_medida, qtd_estoque)
        VALUES (${nome}, ${un_medida}, ${qtd_estoque}) RETURNING id_produto;`;
        return result.length > 0 ? result[0].id_produto : null;
  },
  update: async (id_produto, { nome, un_medida, qtd_estoque }) => {
    return await sql`UPDATE tb_produto
        SET nome = ${nome},
            un_medida = ${un_medida},
            qtd_estoque = ${qtd_estoque}
        WHERE id_produto = ${id_produto};`;
  },
  delete: async (id_produto) => {
    return await sql`DELETE FROM tb_produto WHERE id_produto = ${id_produto}`;
  },
};

// create table tb_produto(
//     id_produto serial primary key,
//     nome char(30),
//     un_medida char(10),
//     qtd_estoque int
// );
