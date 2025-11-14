// aprendendo a usar sequelize

import { Sequelize } from "sequelize";


// 1 parâmetro: qual o banco de dados quer se conectar
// 2 parâmetro: usuário do seu banco
// 3 parâmetro: senha de conexão ao MySQL
const sequelize = new Sequelize('test','root','',{
    host: "localhost",  /* qual máquina está o mySQL*/ 
    dialect:"mysql",  /*qual tipo de banco de dados quer se conectar*/
});

// models: referência de sua tabela dentro do sequelize
// o models ele serve para criar consultas (query) SQL diretamente no JavaScript, ele facilita a criação do banco de dados

// definindo um modelo de uma tabela
const Postagem = sequelize.define('postagens',{
    /*CAMPOS DA TABELA*/
    titulo:{
        type:Sequelize.STRING
    },
    conteudo:{
        type:Sequelize.TEXT
    }
});

// forçando a criação e sincronização da postagem no Banco de dados
//Postagem.sync({force:true})

const Usuario = sequelize.define('usuarios',{
    nome:{
        type:Sequelize.STRING
    },
    sobrenome:{
        type:Sequelize.STRING
    },
    idade:{
        type:Sequelize.INTEGER
    },
    email:{
        type:Sequelize.STRING
    }
});

//inserindo dados na tabela
Usuario.create({
    nome:"joão",
    sobrenome:"silva",
    idade:"27",
    email:"joao@email.com"
})

//Usuario.sync({force:true});

// verificação de sincronização ao banco de dados
sequelize.authenticate()
.then(()=>{
    console.log("conectado com sucesso");
})
.catch((erro)=>{
    console.log(`falha ao se conectar: ${erro}`)
})