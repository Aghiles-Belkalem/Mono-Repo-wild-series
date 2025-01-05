import type { RequestHandler } from "express";

const sayWelcome: RequestHandler = (req, res) => {
  console.info(req.query);
  res.send("Welcome to wild series !");
};

export default { sayWelcome };
