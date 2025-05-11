const Reserva = require('../models/reservaModel');

const reservaController = {
  criar: async (req, res, next) => {
    try {
      const { numeropessoas, data, clienteId } = req.body;
      const idReserva = await Reserva.criar({ numeropessoas, data, clienteId });
      res.status(201).json({ idReserva, message: 'Reserva criada com sucesso' });
    } catch (error) {
      next(error);
    }
  },

  listarTodas: async (req, res, next) => {
    try {
      const reservas = await Reserva.listarTodas();
      res.json(reservas);
    } catch (error) {
      next(error);
    }
  },

  atualizar: async (req, res, next) => {
    try {
      const { id } = req.params;
      const { numeropessoas, data, status } = req.body;
      await Reserva.atualizar(id, { numeropessoas, data, status });
      res.json({ message: 'Reserva atualizada com sucesso' });
    } catch (error) {
      next(error);
    }
  },

  excluir: async (req, res, next) => {
    try {
      const { id } = req.params;
      await Reserva.excluir(id);
      res.json({ message: 'Reserva excluída com sucesso' });
    } catch (error) {
      next(error);
    }
  }
};

module.exports = reservaController;
