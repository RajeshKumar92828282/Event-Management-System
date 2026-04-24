
const router = require('express').Router();
const {
  createEvent,
  approveEvent,
  getEvents,
  registerEvent,
  cancelRegistration
} = require('../controllers/eventController');

const auth = require('../middleware/auth');
const admin = require('../middleware/admin');

router.post('/',auth,createEvent);
router.put('/approve/:id',auth,admin,approveEvent);
router.get('/',getEvents);
router.post('/register/:id',auth,registerEvent);
router.post('/cancel/:id',auth,cancelRegistration);

module.exports = router;
