// server.js
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

app.post('/api/chat', (req, res) => {
  const userMessage = req.body.message;
  console.log("User:", userMessage);

  // Simulated AI reply (replace with real API later)
  const aiReply = `😉 AI says: "${userMessage}"? That's a spicy one!`;

  res.json({ reply: aiReply });
});

app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
