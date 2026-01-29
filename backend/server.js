const express = require("express"); const crypto = require("crypto"); 
const app = express(); const PORT = 3000; const SECRET = 
"denzie-smart-ide"; app.use(express.json({
  verify: (req, res, buf) => { req.rawBody = buf;
  }
}));
function verifySignature(req) { const sig = 
  req.headers["x-hub-signature-256"]; if (!sig) return false; const 
  hmac = crypto.createHmac("sha256", SECRET); 
  hmac.update(req.rawBody); const digest = 
  `sha256=${hmac.digest("hex")}`; return crypto.timingSafeEqual(
    Buffer.from(sig), Buffer.from(digest) );
}
app.post("/webhook", (req, res) => { if (!verifySignature(req)) { 
    console.log("❌ Invalid signature"); return 
    res.status(401).send("Unauthorized");
  }
  console.log("🔥 GitHub event:", req.headers["x-github-event"]); 
  res.sendStatus(200);
});
app.listen(PORT, () => { console.log(`🚀 Smart-IDE webhook running on 
  ${PORT}`);
});
