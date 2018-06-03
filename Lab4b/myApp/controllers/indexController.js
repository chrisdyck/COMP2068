exports.homePage = (req, res, next) => {
  res.render('index', { title: 'Express', message: "Hi there!" });
};

module.exports = router;
