const {createPool } =require('mysql');
const pool = createPool({
    host:"localhost",
    user:"root",
    password:"!!Amans123",
    database:"webtdcc",
    connectionLimit:10,
});

// pool.query("select * from student",(err,result,field)=>{
//     if(err){
//         return console.log(err);
//     }
//     else{
//         return console.log(result);
//     }
// });

module.exports = pool;