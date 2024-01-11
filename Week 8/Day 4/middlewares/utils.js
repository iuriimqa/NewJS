const logger = (req, res, next) => {
  console.log("urls=>", req.url);
  console.log("params=>", req.params);
  console.log("mathod=>", req.method);
  next();
};

const auth = (req, res, next) => {
  const { admin } = req.query;
  if (admin === "john") {
    next();
  } else {
    res.send("not authorised");
  }
};

module.exports = { logger, auth };
