// Model de usuários (interação com o banco)

const db = require('../config/db');

const Usuario = {
  criar: async ({ nome, cpf, telefone, email, senha }) => {
    const [result] = await db.execute(
      'INSERT INTO Usuario (nome_Usuario, cpf_Usuario, telefone_Usuario, email_Usuario, senha_Usuario) VALUES (?, ?, ?, ?, ?)',
      [nome, cpf, telefone, email, senha]
    );
    return result.insertId;
  },

  listarTodos: async () => {
    const [rows] = await db.execute('SELECT id, nome_Usuario, email_Usuario, cpf_Usuario, telefone_Usuario FROM Usuario');
    return rows;
  },

  atualizar: async (id, { nome, email, telefone }) => {
    await db.execute(
      'UPDATE Usuario SET nome_Usuario = ?, email_Usuario = ?, telefone_Usuario = ? WHERE id = ?',
      [nome, email, telefone, id]
    );
  },

  excluir: async (id) => {
    await db.execute('DELETE FROM Usuario WHERE id = ?', [id]);
  }
};

module.exports = Usuario;
