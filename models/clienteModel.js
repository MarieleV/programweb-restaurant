const db = require('../config/db');

const Cliente = {
  criar: async (idUsuario) => {
    const [result] = await db.execute(
      'INSERT INTO Cliente (id_Usuario) VALUES (?)',
      [idUsuario]
    );
    return result.insertId;
  },

  listarTodos: async () => {
    const [rows] = await db.execute(`
      SELECT Cliente.id, Usuario.nome_Usuario, Usuario.email_Usuario, Usuario.cpf_Usuario
      FROM Cliente
      INNER JOIN Usuario ON Cliente.id_Usuario = Usuario.id
    `);
    return rows;
  },

  excluir: async (id) => {
    await db.execute('DELETE FROM Cliente WHERE id = ?', [id]);
  }
};

module.exports = Cliente;
