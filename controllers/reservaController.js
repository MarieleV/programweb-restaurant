// backend/controllers/reservaController.js

const Reserva = require('../models/reservaModel');
const pool = require('../config/db'); // <-- IMPORTANTE: Adicione esta linha para importar o pool de conexão

const reservaController = {
  criar: async (req, res, next) => {
    try {
        // O ID do usuário logado (decodificado do token JWT) é injetado no req pelo authMiddleware
        const userId = req.userId; // authMiddleware deve adicionar req.userId



        // 1. Verificar se o usuário existe na tabela Cliente e obter o Cliente_id
        // (Já que a tabela Reserva tem uma FK para Cliente_id, e não para Usuario_id)
        const [clienteRows] = await pool.query('SELECT id FROM Cliente WHERE id_Usuario = ?', [userId]);


        if (clienteRows.length === 0) {
            // Se o usuário logado não for um cliente cadastrado, impede a reserva
            return res.status(403).json({ message: 'Permissão negada: O usuário logado não está registrado como cliente para fazer reservas.' });
        }


        const clienteId = clienteRows[0].id; // Pega o ID da tabela Cliente

        // 2. Coleta os dados da reserva do corpo da requisição
        // Observe que 'clienteId' não é mais esperado no body, pois é obtido do token/DB.
        const { numeropessoas, data } = req.body;


        // 3. Validações básicas (opcional, mas recomendado)
        if (!numeropessoas || !data || parseInt(numeropessoas) <= 0) {
            return res.status(400).json({ message: 'Número de pessoas e data/hora da reserva são obrigatórios e válidos.' });
        }


        // 4. Cria a reserva usando o Cliente_id obtido
        const idReserva = await Reserva.criar({ numeropessoas, data, clienteId });
        res.status(201).json({ idReserva, message: 'Reserva criada com sucesso!' });


    } catch (error) {
      console.error('Erro ao criar reserva:', error); // Logar o erro completo para depuração
      next(error); // Passa o erro para o middleware de tratamento de erros global
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
      // Passa todo o req.body para o model, não apenas os campos desestruturados
      const dadosParaAtualizar = req.body;

      await Reserva.atualizar(id, dadosParaAtualizar);
      res.json({ message: 'Reserva atualizada com sucesso!' });
    } catch (error) {
      console.error('Erro ao atualizar reserva:', error); // Adicionei um log mais detalhado aqui
      next(error);
    }
  },


  excluir: async (req, res, next) => {
    try {
      const { id } = req.params;
      await Reserva.excluir(id);
      res.json({ message: 'Reserva excluída com sucesso!' });
    } catch (error) {
      next(error);
    }

  }

};

module.exports = reservaController;