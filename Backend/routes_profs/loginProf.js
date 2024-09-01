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
router.get('/myprofile',authProf, async (req, res) => {
  try{
  console.log(req.id);
  const data = await Professor.findOne({
    _id: req.id
  })
  if (!data) {
    return res.status(404).json({ error: 'Profile not found' });
  }
  // const file = {
  //   data : data
  // }
  console.log(data);
  res.json({
    data
  })}
  catch (error) {
    res.status(500).json({ error: error.message });
  }
});

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

//photo attendance route
router.post("/attendance",  async (req, res) => {
  const { image,sub } = req.body;

    // Making the axios request to the external service
  //   try {
  //     const response = await axios.post(
  //       'https://913d-34-67-182-191.ngrok-free.app/search_faces',
  //       { image: image }, // Sending the image as part of the request body
  //       {
  //         headers: {
  //           'Content-Type': 'application/json' // Ensure the content type is JSON
  //         }
  //       }
  //     );
  
  //   console.log(response);
  // }
  console.log("Call to Ml model");
    const response = await fetch('https://3604-35-230-186-130.ngrok-free.app/search_faces', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json' // Set content type to JSON
      },
      body: JSON.stringify({ image: image }) // Convert the body to JSON string
    });
    const data = await response.json(); // Parse the JSON response
    console.log("Call to ML complete");
    console.log(data); // Handle the response data
    

                                                                                          // if (!response || !Array.isArray(response.data)) {
                                                                                          //   return res.status(400).json({ message: "Invalid response from external service" });
                                                                                          // }

  const rollNumbers = data;
  // const rollNumbers = {
  //   rollNo : [
  //     ["123103001.jpg",1], //46/50
  //     ["123103002.jpg",0], //10/50
  //     ["123103003.jpg",1], //7/50
  //     ["123103004.jpg",0] //18/50
  //   ]
  // }
    console.log(rollNumbers);
  try {
    // Looping through the roll numbers and processing each student
    for (let i = 0; i < rollNumbers.rollNo.length; i++) {
      // Extract roll number and attendance status
      const [filename, status] = rollNumbers.rollNo[i];
      const rollNumber = parseInt(filename.split('.').at(0)); // Extract roll number from filename
      
      console.log(`Processing roll number: ${rollNumber}`);
    
      // Find the student by roll number
      const student = await Student.findOne({ rollNo: rollNumber });
      console.log(`Student found:`, student);
    
      if (!student) {
        // console.log(`Student with roll number ${rollNumber} not found.`);
        continue; // Skip to the next iteration if the student isn't found
      }
                                                                                  
      let subjectIndex = student.stats.findIndex(subject => subject[0] === sub);

      if (subjectIndex !== -1) { // Ensure subject is found
          if (status === 1) {
              student.stats[subjectIndex][2] += 1; // Increase attended classes
              student.stats[subjectIndex][3] += 1; // Increase attended classes

          } else if (status === 0) {
              student.stats[subjectIndex][3] += 1; // Increase missed classes
      }
}
    
      // Save the updated student record
      await student.save();
    }
    
    console.log("Attendance processing complete.");
    
    // Sending a single response after processing all students
    res.json({ message: "Attendance saved" });

  } catch (e) {
    console.error('Error processing attendance:', e);
    res.status(500).json({ message: "Server error" });
  }
});


module.exports = router;
