export async function retry(req, res, next) {
    let attempts = 0;
    const maxRetries = 2;
  
    const originalSend = res.send.bind(res);
  
    res.send = function (body) {
      if (res.statusCode >= 500 && attempts < maxRetries) {
        attempts++;
        console.log(`Retrying request... attempt ${attempts}`);
        next();
      } else {
        originalSend(body);
      }
    };
  
    next();
  }
  