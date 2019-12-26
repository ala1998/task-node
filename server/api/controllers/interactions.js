const interaction = require('../models/interaction');
const faker = require('faker');
var easyxml = require('easyxml');


exports.getAll = async function (req, res) {
    try {
        const results = await interaction.all();

        if (results.length) {
            return res.json(results);
        }

        return res.json({
            data: results,
            message: `no records found in database`
        })
    } catch (error) {
        console.log('error', error);
        res.sendStatus(500);
    }
};


exports.getById = async function (req, res) {
    try {
        if (isNaN(parseInt(req.params.id, 10)))
            return res.json({
                message: "id parameter is invalid!"
            })
        else {
            const results = await interaction.findById(req.params.id);
            results._id = req.params.id;

            if (typeof results != "undefined") {
                return res.json(results);
            }

            return res.json({
                //  data: results,
                message: `no records found with the id ${req.params.id}`
            })


        }
    } catch (error) {
        /*    console.log('error', error);
            res.sendStatus(500);
          */
        return res.json({

            message: `no records found with the id ${req.params.id}`
        })
    }
};
exports.save = async function (req, res) {
    try {
        /*   res.sendData = function(obj) {
               if (req.accepts('json') || req.accepts('text/html')) {
                 res.header('Content-Type', 'application/json');
                 res.send(obj);
               } else if (req.accepts('application/xml')) {
                 res.header('Content-Type', 'text/xml');
                 var xml = easyxml.render(obj);
                 res.send(xml);
               } else {
                 res.send(406);
               }
             };
             res.status(200).sendData(obj);
   */
        const data = req.body;
        const results = await interaction.insert(data);
        const { insertId } = results;

        //to display data of inserted one.
        const newRecord = await interaction.findById(insertId);

        if (typeof newRecord != "undefined") {
            return res.json(newRecord);
        }

        return res.json({
            data: newRecord,
            message: `no records found with the id ${insertId}`
        })
    } catch (error) {

    }
};

exports.saveFake = async function (req, res) {
    try {

        let description, drugCode, diseaseCode, type;
        for (let i = 0; i < 5000; ++i) {
            description = faker.lorem.paragraph();
            drugCode = faker.random.alphaNumeric(10);
            diseaseCode = faker.random.alphaNumeric(10);
            type = Math.floor(Math.random() * Math.floor(2)) + 1;
            data = {
                description,
                drugCode,
                diseaseCode,
                type
            }
            await interaction.insert(data);

        }


        console.log("5000 rows inserted Successfully");


    } catch (error) {
        console.log(error);
    }
};


exports.getByDrugCode = async function (req, res) {
    try {
        if (isNaN(parseInt(req.params.drugCode, 10)))
            return res.json({
                message: "drugCode parameter is invalid!"
            })
        else {
            const results = await interaction.findByDrugCode(req.params.drugCode);

            if (typeof results != "undefined") {
                return res.json(results);
            }

            return res.json({
                // data: results,
                message: `no records found with the drug code ${req.params.drugCode}`
            })

        }
    } catch (error) {
        /*    console.log('error', error);
            res.sendStatus(500); */
        return res.json({
            //   data: results,
            message: `no records found with the drug code ${req.params.drugCode}`
        })
    }
};
exports.getByDiseaseCode = async function (req, res) {
    try {
        if (isNaN(parseInt(req.params.diseaseCode, 10)))
            return res.json({
                message: "diseaseCode parameter is invalid!"
            })
        else {
            const results = await interaction.findByDiseaseCode(req.params.diseaseCode);

            if (typeof results != "undefined") {
                return res.json(results);
            }

            return res.json({
                //  data: results,
                message: `no records found with the disease code ${req.params.diseaseCode}`
            })

        }
    } catch (error) {
        /*console.log('error', error);
        res.sendStatus(500);*/
        return res.json({
            //  data: results,
            message: `no records found with the disease code ${req.params.diseaseCode}`
        })
    }
};
exports.getByType = async function (req, res) {
    try {
        if (isNaN(parseInt(req.params.type, 10)))
            return res.json({
                message: "type parameter is invalid!"
            })
        else {
            const results = await interaction.findByType(req.params.type);

            if (typeof results != "undefined") {
                return res.json(results);
            }

            return res.json({
                //       data: results,
                message: `no records found with the type ${req.params.type}`
            })

        }
    } catch (error) {
        /*  console.log('error', error);
          res.sendStatus(500);*/

        return res.json({
            //       data: results,
            message: `no records found with the type ${req.params.type}`
        })
    }
};

exports.getByAll = async function (req, res) {
    try {
        if (isNaN(parseInt(req.params.type, 10)))
            return res.json({
                message: "type parameter is invalid!"
            })
        else {
            const results = await interaction.findByAll(req.params.drugCode, req.params.diseaseCode,
                req.params.type);

            if (typeof results != "undefined") {
                return res.json(results);
            }

            return res.json({
                data: results,
                message: `no records found with the drug code ${req.params.drugCode} and disease code ${req.params.diseaseCode} and type ${req.params.type}`
            })

        }
    } catch (error) {
        console.log('error', error);
        res.sendStatus(500);
    }
};
exports.delete = async function (req, res) {
    try {
        const results = await interaction.delete(req.params.id);

        if (typeof results != "undefined") {
            return res.json(results);
        }

        return res.json({
            data: results,
            message: `no records found with the id ${req.params.id}`
        })


    } catch (error) {
        console.log('error', error);
        res.sendStatus(500);
    }
};
exports.update = async function (req, res) {
    try {

        const results = await interaction.updateDescription(req.body.id, req.body.description);
        const { affectedRows } = results;

        //to display data of inserted one.

        if (typeof affectedRows != "undefined") {
            return res.json({
                NumberOfAffectedRows: affectedRows
            });
        }

        return res.json({
            message: `no records found with the id ${req.body.id}`
        })
    } catch (error) {

    }
};