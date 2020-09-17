const express= require('express');
const router = express.Router();
const catsCtrl = require('../controllers/cats');


/*---------- Public Routes ----------*/

/*---------- Protected Routes ----------*/
router.use(require("../config/auth"));
router.get('/', checkAuth, catsCtrl.index);
router.post('/', checkAuth, catsCtrl.create);
function checkAuth(req, res, next) {
  if (req.user) return next();
  return res.status(401).json({msg: 'Not Authorized'});
}

module.exports = router;