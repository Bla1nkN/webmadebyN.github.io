const express = require('express');
const bodyParser = require('body-parser');
const { verifyKeyMiddleware } = require('discord-interactions'); // Middleware para verificar la firma de Discord

const app = express();
app.use(bodyParser.json());

// Middleware para manejar las interacciones de Discord
app.post('/interactions', verifyKeyMiddleware('TU_PUBLIC_KEY_DE_DISCORD'), (req, res) => {
  const interaction = req.body;

  // Responde al ping de Discord (para validación)
  if (interaction.type === 1) { // InteractionType.PING
    return res.json({ type: 1 });
  }

  // Aquí puedes procesar otros eventos de interacción (como slash commands)
  console.log('Interacción recibida:', interaction);
  res.send('¡Interacción procesada!');
});

app.listen(3000, () => {
  console.log('Servidor corriendo en http://localhost:3000');
});
