const express = require('express');
const jwt = require('jsonwebtoken');
const Student = require("../databaseSchema/student.js");
const Announcement = require("../databaseSchema/announce.js");
const router = express.Router();
const { JWT_SECRET_PROFS } = require("../jwtcheck.js");
const { authProf } = require("../middlewares/authProf.js");
const {axios} = require('axios');
const Professor = require('../databaseSchema/professor.js');

// POST route for professor login
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
      const prof = await Professor.findOne({ email })

      const id = prof._id;
      const token = jwt.sign({ id }, JWT_SECRET_PROFS); // Set expiration time for token

      res.json({ prof, token });
      console.log("Login successful");
  } catch (error) {
      console.error("Error during login:", error);
      res.status(500).json({ error: 'Internal server error' });
  }
});
// router.get('/myprofile',authProf, async (req, res) => {
//   try{
//   console.log(req.id);
//   const data = await Professor.findOne({
//     _id: req.id
//   })
//   if (!data) {
//     return res.status(404).json({ error: 'Profile not found' });
//   }
//   console.log(data);
//   res.json({
//     data
//   })}
//   catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

// router.post("/manualattendance",authProf,async(req,res)=>{
//   const body = req.body;
//   const rollNumber = body.roll;
//   try{
//     for(let i = 0;i<rollNumber.length;i++) {
//       const student = await Student.findOne({
//         rollNo : rollNumber[i]
//       })
//       console.log(student.attendance);
//       student.attendance.subject[0]+=1;
//       student.attendance.subject[1]+=1;

//       await student.save();
//       res.json({
//         message : "Attendance saved"
//       })
//     }
//   }
//   catch(e){
//     console.log(e);
//   }}
// );

// router.post("/addannouncement",authProf,async (req,res)=>{
  
//     const { title, content, professorName } = req.body;
  
//     const newAnnouncement = new Announcement({
//       title,
//       content,
//       professorName
//     });
  
//     try {
//       const savedAnnouncement = await newAnnouncement.save();
//       res.status(201).json(savedAnnouncement);
//     } catch (err) {
//       res.status(400).json({ error: err.message });
//     }
//   });

// //photo attendance route
// router.post("/attendance",  async (req, res) => {
//   const { image } = req.body;

//     // Making the axios request to the external service
//   //   try {
//   //     const response = await axios.post(
//   //       'https://913d-34-67-182-191.ngrok-free.app/search_faces',
//   //       { image: image }, // Sending the image as part of the request body
//   //       {
//   //         headers: {
//   //           'Content-Type': 'application/json' // Ensure the content type is JSON
//   //         }
//   //       }
//   //     );
  
//   //   console.log(response);
//   // }
//     const response = await fetch('https://913d-34-67-182-191.ngrok-free.app/search_faces', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json' // Set content type to JSON
//       },
//       body: JSON.stringify({ image: image }) // Convert the body to JSON string
//     });
//     const data = await response.json(); // Parse the JSON response
//     console.log(data); // Handle the response data
  

//   // if (!response || !Array.isArray(response.data)) {
//   //   return res.status(400).json({ message: "Invalid response from external service" });
//   // }

//   const rollNumbers = data;
//     console.log(rollNumbers);
//   try {
//     // Looping through the roll numbers and processing each student
//     for (let i = 0; i < rollNumbers.rollNo.length; i++) {
//       // Extract roll number and attendance status
//       const [filename, status] = rollNumbers.rollNo[i];
//       const rollNumber = parseInt(filename.split('.').at(0)); // Extract roll number from filename
    
//       console.log(`Processing roll number: ${rollNumber}`);
    
//       // Find the student by roll number
//       const student = await Student.findOne({ rollNo: rollNumber });
//       console.log(`Student found:`, student);
    
//       if (!student) {
//         console.log(`Student with roll number ${rollNumber} not found.`);
//         continue; // Skip to the next iteration if the student isn't found
//       }
    
//       console.log(`Current attendance for student ${rollNumber}:`, student.attendance);
    
//       // Update attendance based on status
//       if (status === 1) {
//         student.attendance.subject[0] += 1; // Assuming subject[0] is for a specific subject
//         student.attendance.subject[1] += 1; // Assuming subject[1] is for a different subject
//       } else if (status === 0) {
//         student.attendance.subject[1] += 1; // Assuming subject[1] is for a different subject
//       }
    
//       // Save the updated student record
//       await student.save();
//     }
    
//     console.log("Attendance processing complete.");
    
//     // Sending a single response after processing all students
//     res.json({ message: "Attendance saved" });

//   } catch (e) {
//     console.error('Error processing attendance:', e);
//     res.status(500).json({ message: "Server error" });
//   }
// });


module.exports = router;
