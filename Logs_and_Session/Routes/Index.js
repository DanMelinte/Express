
const express = require('express');
const router = express.Router();

const ctrlHome = require('../controllers/index');
const ctrlAbout = require('../controllers/about');
const ctrlContact = require('../controllers/contact');

const isAdmin = (req, res, next) => {
  // если в сессии текущего пользователя есть пометка о том, что он является
  // администратором
  if (req.session.isAdmin) {
    // то всё хорошо :)
    return next();
  }
  // если нет, то перебросить пользователя на главную страницу сайта
  res.redirect('/');
};

router.get('/', ctrlHome.getIndex);
router.post('/', ctrlHome.sendData);

router.get('/about', ctrlAbout.getAbout);
router.get('/contact', ctrlContact.getContact);

router.get('/', (req, res, next) => {
  res.render('pages/index', { title: 'My session', views: req.session.views});
});


router.get('/secret', isAdmin, (req, res, next) => {
  res.render('pages/secret');
});

router.post('/', (req, res, next) => {
  req.session.isAdmin = true;
  res.redirect('/secret');
});

module.exports = router;