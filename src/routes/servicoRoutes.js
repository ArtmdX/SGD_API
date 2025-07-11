import express from 'express';
import {
  getServicos,
  getServico,
  updateServico,
  deleteServico,
  createServico,
  getStatusServicos
} from '../controllers/servicoController.js';

const router = express.Router();

router.get('/servico', getServicos);
router.get('/servico/status', getStatusServicos);
router.get('/servico/:id', getServico);
router.post('/servico', createServico);
router.put('/servico/:id', updateServico);
router.delete('/servico/:id', deleteServico);

export default router;
