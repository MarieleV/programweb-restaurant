//Model de usuários (interação com o banco)

const db = require('../config/db');

const Usuario = {
  criar: async ({ nome, cpf, email, senha }) => {
    const [result] = await db.execute(
      'INSERT INTO Usuario (nome_Usuario, cpf_Usuario, email_Usuario, senha_Usuario) VALUES (?, ?, ?, ?)',
      [nome, cpf, email, senha]
    );
    return result.insertId;
  },

  listarTodos: async () => {
    const [rows] = await db.execute('SELECT id, nome_Usuario, email_Usuario, cpf_Usuario FROM Usuario');
    return rows;
  },

  atualizar: async (id, { nome, email }) => {
    await db.execute(
      'UPDATE Usuario SET nome_Usuario = ?, email_Usuario = ? WHERE id = ?',
      [nome, email, id]
    );
  },

  excluir: async (id) => {
    await db.execute('DELETE FROM Usuario WHERE id = ?', [id]);
  }
};

module.exports = Usuario;
