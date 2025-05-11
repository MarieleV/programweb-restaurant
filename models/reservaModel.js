const db = require('../config/db');

const Reserva = {
  criar: async ({ numeropessoas, data, clienteId }) => {
    const [result] = await db.execute(
      'INSERT INTO Reserva (numeropessoas_Reserva, data_Reserva, Cliente_id_Cliente) VALUES (?, ?, ?)',
      [numeropessoas, data, clienteId]
    );
    return result.insertId;
  },

  listarTodas: async () => {
    const [rows] = await db.execute(`
      SELECT r.id, r.numeropessoas_Reserva, r.data_Reserva, r.status_Reserva, u.nome_Usuario 
      FROM Reserva r
      INNER JOIN Cliente c ON r.Cliente_id_Cliente = c.id
      INNER JOIN Usuario u ON c.id_Usuario = u.id
    `);
    return rows;
  },

  atualizar: async (id, { numeropessoas, data, status }) => {
    await db.execute(
      'UPDATE Reserva SET numeropessoas_Reserva = ?, data_Reserva = ?, status_Reserva = ? WHERE id = ?',
      [numeropessoas, data, status, id]
    );
  },

  excluir: async (id) => {
    await db.execute('DELETE FROM Reserva WHERE id = ?', [id]);
  }
};

module.exports = Reserva;
