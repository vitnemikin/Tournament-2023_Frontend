import express from "express";
import bodyParser from "body-parser";

export class Router {
    constructor(controller, config) {
        this.controller = controller;
        this.config = config;
        this.app = express();
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }

    start() {
        this.server = this.app.listen(this.config.port, () => {
            console.log("Server started at", this.config.port);
        });
        this.createRoutes()
    }

    stop() {
        this.server.close();
    }

    createRoutes() {
 
        this.app.post(
            '/login',
            this.controller.checkLogin,
            this.controller.redirToUserPage
        );

        this.app.post('/confirm', this.controller.generateConfirmCode.bind(this.controller));

        this.app.post('/confirmed', this.controller.checkConfirmCode.bind(this.controller));
    }



}