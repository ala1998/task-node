const pool = require('../db')

class Interaction {
    constructor() {
        this.table_name = 'interactions';
    }

    all() {
        return new Promise((resolve, reject) => {
            pool.query(`SELECT * FROM ${this.table_name}`, (error, results) => {
                if (error) {
                    return reject(error);
                }

                return resolve(results);
            })
        })
    }

    findById(id) {
        return new Promise((resolve, reject) => {
            pool.query(`SELECT * FROM ${this.table_name} WHERE id = ?`, [id], (error, results) => {
                if (error) {
                    console.log("error findbyid", error);
                    return reject(error);
                }

                return resolve(results[0]);
            })
        })
    }

    findByDrugCode(drugCode) {
        return new Promise((resolve, reject) => {
            pool.query(`SELECT * FROM ${this.table_name} WHERE drugCode = ?`, [drugCode], (error, results) => {
                if (error) {
                    console.log("error findbyDrugCode", error);
                    return reject(error);
                }

                return resolve(results[0]);
            })
        })
    }
    findByDiseaseCode(diseaseCode) {
        return new Promise((resolve, reject) => {
            pool.query(`SELECT * FROM ${this.table_name} WHERE diseaseCode = ?`, [diseaseCode], (error, results) => {
                if (error) {
                    console.log("error findbyDiseaseCode", error);
                    return reject(error);
                }

                return resolve(results[0]);
            })
        })
    }
    findByType(type) {
        return new Promise((resolve, reject) => {
            pool.query(`SELECT * FROM ${this.table_name} WHERE type = ?`, [type], (error, results) => {
                if (error) {
                    console.log("error findbyType", error);
                    return reject(error);
                }

                return resolve(results[0]);
            })
        })
    }
    
    findByAll(drugCode,diseaseCode,type) {
        return new Promise((resolve, reject) => {
            pool.query(`SELECT * FROM ${this.table_name} WHERE drugCode = ? and diseaseCode =
            ? and type = ?`, [drugCode,diseaseCode,type], (error, results) => {
                if (error) {
                    console.log("error findbyAll", error);
                    return reject(error);
                }

                return resolve(results[0]);
            })
        })
    }
    //Delete by id.
    delete(id) {
        return new Promise((resolve, reject) => {
            pool.query(`delete FROM ${this.table_name} WHERE id = ?`, [id], (error, results) => {
                if (error) {
                    console.log("error delete", error);
                    return reject(error);
                }

                return resolve(results[0]);
            })
        })
    }

    insert(data) {
        const attributes = this.attributes;

        const keys = [];
        const values = [];
        const q_mark = [];

        for (let key in data) {
            keys.push(key);
            values.push(data[key]);
            q_mark.push('?');
        }


        const query = `INSERT into ${this.table_name} (${keys.join(',')}) values(${q_mark.join(',')})`;

        return new Promise((resolve, reject) => {
            pool.query(query, values, (error, results) => {
                if (error) {
                    console.log("error insert", error);
                    return reject(error);
                }

                return resolve(results);
            })
        });
    }
    updateDescription(id,description) {
       // `UPDATE disease SET description =${req.body} WHERE id = ${req.params.id}

        const query = `UPDATE ${this.table_name} set description = '${description}' where id = ${id}`;

        return new Promise((resolve, reject) => {
            pool.query(query, (error, results) => {
                if (error) {
                    console.log("error updateDescription", error);
                    return reject(error);
                }

                return resolve(results);
                console.log("UPDATE");

            })
        });
    }

}



module.exports = new Interaction();