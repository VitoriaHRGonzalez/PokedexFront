// Crie um novo arquivo scripts/heroku-start.js
import express, { json } from 'express';
const aplicativo = express(); 
const porta = process.env.PORT || 3000;
aplicativo.use(json());
// Sua pasta de ativos estáticos de pré-compilação 
app.use(static(path.join(__dirname, '..', 'dist')));
// Root redireciona para os ativos de pré-compilação 
app.get('/', function(req,res){ 
  res.sendFile(path.join(__dirname, '..', 'dist')); 
});
// Qualquer página redireciona para a pasta de ativos de pré-compilação index.html que // carregará o aplicativo React 
app.get('*', function(req,res){ 
  res.sendFile(path.join(__dirname, '..', 'dist/index.html')); 
});
app.listen(porta, ()=>{ 
  console.log("O servidor está sendo executado na porta: ", porta) 
})