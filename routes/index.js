const { Router } = require('express');

const router = Router();

/* GET index page. */
router.get('/', (req, res) => {
  res.render('index', {
    title: 'Ife Tour'
  });
});

router.get('/about', (req, res) => {
  res.render('about', {
    title: 'Ife Tour || About'
  });
});

router.get('/Oranmiyan', (req, res) => {
  res.render('oranmiyan', {
    title: 'Ife Tour || Oranmiyan',
  });
});

router.get('/ife-bronze', (req, res)=> {
  res.render('ifeBronze',{
    title: 'Ife Tour || Ife Bronze',
  })
})

router.get('/museum-of-national-history',(req, res)=> {
  res.render('nationalMuseum',{
    title: 'Ife Tour || National History Museum',
  })
})

router.get('/moremi',(req, res)=> {
  res.render('moremi',{
    title: 'Ife Tour || Moremi',
  })
})

router.get('/obafemi-awolowo-university',(req, res)=> {
  res.render('oau',{
    title: 'Ife Tour || Obafemi Awolowo University',
  })
})

router.get('/oonis-Palace',(req, res)=> {
  res.render('oonisPalace',{
    title: 'Ife Tour || The Ooni’s Palace ',
  })
})

router.get('/ife-resort',(req, res)=> {
  res.render('resort',{
    title: 'Ife Tour || Ile Ife Grand Resorts and Leisure ',
  })
})


router.get('/erin-ijesha',(req, res)=> {
  res.render('waterFall',{
    title: 'Ife Tour || Erin Ijesha Waterfall',
  })
})

router.get('/national-museum',(req, res)=> {
  res.render('museum',{
    title: 'Ife Tour || National Museum, Ile-Ife',
  })
})


router.get('/contact', (req, res) => {
  res.render('contact', {
    title: 'Ife Tour || Contact',
  });
});

router.get('/login', (req, res) => {
  res.render('login', {
    title: 'Ife Tour || Login',
  });
});


router.get('/dashboard', (req, res) => {
  res.render('dashboard', {
    title: 'Ife Tour || Dashboard',
  });
});

router.post('/contact', (req, res) => {
  res.render('successful', {
    title: 'Ife Tour || Contact',
  });
});

router.get('*', (req, res) => {
  res.render('error', {
    title: 'Ife Tour'
  });
});

module.exports = router;
