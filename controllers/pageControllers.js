exports.addPostPage = (req, res) => {
  res.render('add_post');
};

exports.getPostPage = (req, res) => {
  res.render('post');
};

exports.getAboutPage = (req, res) => {
  res.render('about');
};
