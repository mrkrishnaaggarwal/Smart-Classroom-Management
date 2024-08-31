const db = require("./databaseSchema/student");
const express = require("express");
const loginStudent = require("./routes_student/loginStudent");
const loginProf = require("./routes_profs/loginProf");
const app = express();
const cors = require("cors");
app.use(cors({
    origin: 'http://localhost:5173'
  }));
const bodyParser = require('body-parser');
app.use(express.json({ limit: '20mb' })); // Increase the limit as needed
app.use(express.urlencoded({ limit: '20mb', extended: true }));
// const tryDb = async ()=>{
//     console.log(await db.create({
//         name : "Nikhil Sharma",
//         password : "OmSaiRam",
//         phone : "6376168554",
//         rollNo : "130",
//         address: "440,h8",
//         email : "123102130@gmail.com",
//         attendance : {
//             subject : [4,5]
//         }   
//     }));
// }
// tryDb();

app.use("/api/v1/student",loginStudent);
app.use("/api/v1/professor",loginProf);
app.listen(3000);