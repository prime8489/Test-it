module.exports = (req, res) => {
  res.status(200).json({
    status: "success",
    message: "API is working perfectly!"
  });
};
