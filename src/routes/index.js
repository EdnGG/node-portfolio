const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('index.html');
});

router.get('/about', (req, res) => {
  res.render('about.html');
});

router.get('/fetch-api', (req, res) => {
  res.render('fetch-api.html');
});

router.get('/interactive-form', (req, res) => {
  res.render('interactive-form.html');
});

router.get('/pagination-filter', (req, res) => {
  res.render('pagination-filter.html');
});

router.get('/quote-gen', (req, res) => {
  res.render('quote-gen.html');
});

router.get('/tic-tac', (req, res) => {
  res.render('tic-tac.html');
});

router.get('/vsi-project', (req, res) => {
  res.render('vsi-project.html');
});


module.exports = router;