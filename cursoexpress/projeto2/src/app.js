// arquivo responsável por iniciar todo o processo e arquitetar todo o processo do express e outras bibliotecas
import express from  'express'
import routes from  './routes.js'

class App{
    constructor(){
        this.server = express();
    }

    // métodos
    middleware(){ // camada que adiciona entre o express e a aplicação
        this.server.use(express.json());
    }

    routes(){
        this.server.use(routes);
    }
}

const app = new App().server;
export default app;