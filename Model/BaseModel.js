var mysql = require("mysql");

class BaseModel{
    constructor(){
        this.table = "";
        this.connection = mysql.createConnection({
                            host: 'localhost',
                            user: 'root',
                            password: '',
                            database: ''
                        });
        this.connection.connect();

    }

    findAll(){
        let select =`SELECT * FROM ${this.table}`;
        return new Promise((resolve, reject) =>{
            this.connection.query(select, function(error, result, c) {
                if (error) reject(error);
                resolve(result);
            })
        }) 
    }

    add(obj){
        let keys = Object.keys(obj).join(",");
        let val = Object.values(obj).join("','");
        let insert = `Insert INTO ${this.table}( ${keys} ) values ('${val}')`;
        return new Promise((resolve, reject) => {
            this.connection.query(insert, function (error, result, c) {
                if (error) reject(error);
                resolve(result);
            })
        }) 
    }
}

module.exports = BaseModel;