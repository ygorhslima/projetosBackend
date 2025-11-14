
import express from 'express';
import { engine } from 'express-handlebars';
import { Sequelize } from 'sequelize';
import bodyParser from 'body-parser';
// importação dos models
import Post from './models/Post.js'

const app = express();

// ===============================
// 🔧 CONFIGURAÇÃO DO HANDLEBARS
// ===============================
app.engine('handlebars',engine({
    defaultLayout: 'main', // layout base (views/layouts/main.handlebars)
    runtimeOptions: {
      allowProtoPropertiesByDefault: true,
      allowProtoMethodsByDefault: true,
    },
  })
);

app.set('view engine', 'handlebars');
app.set('views', './views'); // garante que as views fiquem em ./views

// ===============================
// 🧱 MIDDLEWARES
// ===============================
app.use(bodyParser.urlencoded({ extended: true })); // ler dados de formulários
app.use(bodyParser.json()); // ler JSON (opcional)


// ===============================
// 🚦 ROTAS
// ===============================

// Página com o formulário
app.get('/cad', (req, res) => {
  res.render('formulario'); // renderiza views/formulario.handlebars
});

// passando os dados por POST, inserindo os
app.post('/add', async(req, res) => {
  await Post.create({
    titulo:req.body.titulo,
    conteudo:req.body.conteudo
  }).then(()=>{
    res.send("Post criado com sucesso");
  }).catch((error)=>{
    res.send("Houve um erro: " + error);
  });
});

// ===============================
// 🚀 INICIAR SERVIDOR
// ===============================
const PORT = 8081;
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
