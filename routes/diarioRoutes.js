const exports = require('express');
const router = express.Routes();
const diarioController = require('../controllers/diarioController');

router.get('/', diarioController.listDiarios);
router.get('/:id', diarioController.umDiario);
router.post('/', diarioController.createDiario);
router.put('/:id',diarioController.updateDiario);
router.delete('/:id',diarioController.deleteDiario);

module.exports = router;