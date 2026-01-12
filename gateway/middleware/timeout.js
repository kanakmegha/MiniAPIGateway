export function timeout(ms) {
    return (req, res, next) => {
      const timer = setTimeout(() => {
        res.status(504).json({ error: "Gateway Timeout" });
      }, ms);
  
      res.on("finish", () => clearTimeout(timer));
      next();
    };
  }
  