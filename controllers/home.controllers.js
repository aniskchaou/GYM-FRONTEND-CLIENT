exports.getHome = async function (req, res, next) {
  res.render("elements/index", { viewTitle: 'GYM' });
}

