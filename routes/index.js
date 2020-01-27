const { Router } = require('express');

const router = Router();

/* GET index page. */
router.get('/', (req, res) => {
  res.render('index', {
    title: 'Ife Tour'
  });
});

router.get('/Oranmiyan', (req, res) => {
  res.render('oranmiyan', {
    title: 'Ife Tour || Oranmiyan',
  });
});



router.get('/contact', (req, res) => {
  res.render('contact', {
    title: 'Ife Tour || Contact',
  });
});

router.get('*', (req, res) => {
  res.render('error', {
    title: 'Ife Tour'
  });
});

module.exports = router;
