require('dotenv').config();
const cors = require("cors");
const express = require("express");
const db = require('./db')

const app = express();

const morgan = require("morgan");

app.use(cors());
app.use(express.json());

// using middleware -> tracking
// app.use(morgan('tiny'))
// app.use(morgan('dev'))

// app.use((req, res, next) =>{
//     console.log("yeah our middleware");
//     next();
// });

// example for 404 request
// app.use((req, res, next) =>{
//     console.log("yeah our 2nd middleware");
//    res.status(404).json({
//        status: "fail"
//    })
// })


// Dies ist eine API
app.get("/getRestaurants", (req, res) => {
    console.log("get all restaurants");
    // send only text
    // res.send("These are the restaurants")
    
    // json rückgabe mit status code
    res.status(404).json({
        status: "success",
        restaurant: "mc"
    });
});

app.get("/api/v1/restaurants", async (req, res) => {
    console.log("route handler ran");
    try {
        console.log("i am in");
        const results = await db.query('SELECT * FROM restaurant;');
        res.status(200).json({
            status: "success",
            results: results.rows.length,
            data: {
                restaurants: results.rows,
            },
        });
    } catch (err) {
        res.status(200).json({
            status: "error",
            error: err
        })
    }
});

app.get("/api/v1/restaurants/:id", async (req, res) => {
    console.log("route handler ran");
    try {
        console.log("i am in");
        console.log(req.params.id);
        
        // db kann so angegriffen werden. auf der webseite, kann man nachlesen, wie das
        // umgangen werden kann
        // const result = await db.query(
        //     `SELECT * FROM restaurant WHERE id = ${req.params.id};`);
        // console.log(result)
        
        // prevent from insults
        const result = await db.query(
            'SELECT * FROM restaurant WHERE id = $1', [req.params.id]);
        
        // const result = await db.query(
        // 'SELECT $2 FROM restaurant WHERE id = $1', [req.params.id, 'name']);
        
        
        if (result.rows.length === 1) {
            res.status(200).json({
                status: "success",
                results: result.rows.length,
                data: {
                    restaurant: result.rows[0],
                },
            });
        } else {
            res.status(200).json({
                status: "error",
                error: "No restaurant with this id"
            })
        }
    } catch (err) {
        res.status(200).json({
            status: "error",
            error: err
        })
    }
});

app.post("/api/v1/restaurants", (req, res) => {
    // console.log("post a restaurant")
    let data = req.body;
    console.log(data);
    res.status(201).json(data);
});

app.put("/api/v1/restaurants/:id", (req, res) => {
    console.log(req.params.id)
    console.log(req.body)
    res.status(200).json({
        status: "success",
        data: req.body
    });
});

app.delete("/api/v1/restaurants/:id", (req, res) => {
    res.status(204).json({
        status: "success"
    })
});

// Hier rufen wir die Server variablen auf oder geben einen Standard an.
const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log(`server is up listening on port ${port}`);
});