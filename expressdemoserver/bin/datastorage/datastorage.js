import { Database as DB } from "sqlite-async";


export class DataStorage {

    db = null;

    constructor (database) {
        this.db = database;
        this.createUsers();
    }

    async start() {
        this.db = await DB.open(this.database.file);
        await this.createUsers();
    }

    async stop() {
        this.db.close();
    }

    async getUser(id) {
        
        let query = `SELECT * FROM Users WHERE id=${id}`; 

        this.db.get(query);
    };


    async addUser(name, lastname, login, email, password) {
        let query = `INSERT INTO Users ( name, lastname, login, email, password) VALUES( 
          ?,?,?
        )`;

        try { await this.db.run(query, [name, lastname, login, email, password]); }
        catch { console.log('Такой пользователь уже есть!'); }
    }

    async createUsers() {

        let query = `CREATE TABLE IF NOT EXISTS Users( 
            name          text not null,
            lastname      text not null, 
            id            integer primary key autoincrement, 
            email         text unique not null, 
            login         text unique not null, 
            password      text unique not null
            
        )`;

        await this.db.run(query);


    }


    async loginUser(login, passw) {

        let query = 'SELECT id FROM users WHERE login = ? AND passw = ?';


        await this.db.get(query);
    }

}