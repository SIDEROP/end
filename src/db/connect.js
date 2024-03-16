import mysql from "mysql";

let con = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:""
})

con.connect((err)=>{
    if (err) {
        console.log("err")
    } else{
        console.log("mysql connected successfuly")
    }
})

export default con