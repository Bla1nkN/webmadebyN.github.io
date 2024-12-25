let lastScrollTop = 0;
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        
        header.classList.add('hidden');
    } else {
        
        header.classList.remove('hidden');
    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; 
});


const express = require('express');
const app = express();

app.use(express.json());

app.post('/interactions', (req, res) => {
  console.log('Solicitud recibida:', req.body);
  res.status(200).send('OK');
});

// Otros métodos (opcional)
app.all('*', (req, res) => {
  res.status(405).send('Método no permitido');
});

app.listen(3000, () => {
  console.log('Servidor corriendo en https://tudominio.com');
});
