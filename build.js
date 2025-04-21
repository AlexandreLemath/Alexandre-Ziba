require('dotenv').config();
const fs = require('fs');
const id = process.env.FORMSPREE_ID;
if (!id) {
  console.error('FORMSPREE_ID manquant dans .env');
  process.exit(1);
}
fs.writeFileSync('config.js', `window.FORMSPREE_ID = "${id}";`);
