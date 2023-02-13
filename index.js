const express = require("express");
const cors = require("cors");
const pool = require("./database");

const app = express();

app.use(express.static("./public"));
app.use(express.json());
app.use(cors());

app.post("/teacher_register",(req,res)=>{
    console.log(req.body);
    const {name,email,e_id, password,school} = req.body;
    pool.query(
        `INSERT INTO teacher VALUES (?, ?, ?, ?,?,?)`,
        [name,email,e_id, password,school,Date.now()],
        (err,result,fields)=>{
            if(err){
                console.log(err);
               return res.send({success:false})
            }
            return res.send({success:true});
        });
})

app.post("/student_register",(req,res)=>{
    console.log(req.body);
    const {student_id,name,email,Roll_Number, Phone_Number,Course,school,tdcc} = req.body;
    pool.query(
        `INSERT INTO student VALUES (?, ?, ?, ?,?,?,?,?)`,
        [name,email,Roll_Number, Phone_Number,Course,school,tdcc,student_id],
        (err,result,fields)=>{
            if(err){
                console.log(err);
               return res.send({success:false})
            }
            return res.send({success:true});
        });
    
})

app.post("/coordinator_register",(req,res)=>{
    console.log(req.body);
    const {name,email,employee_id, password,school} = req.body;
    pool.query(
        `INSERT INTO coordinator VALUES (?, ?, ?, ?,?,?)`,
        [name,email,employee_id, password,school,Date.now()],
        (err,result,fields)=>{
            if(err){
                console.log(err);
               return res.send({success:false})
            }
            return res.send({success:true});
        });
    
})

app.listen(3000,()=>{
    console.log("listening on port 3000:");
    
    // pool.query(`CREATE TABLE coordinator(
    //     coordinator_id int NOT NULL AUTO_INCREMENT,
    //     name varchar(255) NOT NULL,
    //     email varchar(255)NOT NULL,
    //     employee_id varchar(255) NOT NULL,
    //     password varchar(255) NOT NULL,
    //     school varchar(255)NOT NULL,
    //     PRIMARY KEY (coordinator_id)
    // )`,(err,result,field)=>{
    //         if(err){
    //             return console.log(err);
    //         }
    //         else{
    //             return console.log(result);
    //         }
    //     });
    // console.log(pool);
});