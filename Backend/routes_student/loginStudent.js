// routes/student.js
const express = require('express');
const jwt = require('jsonwebtoken');
const Student = require('../databaseSchema/student.js');
const Announcement = require("../databaseSchema/announce.js");
const router = express.Router();
const {JWT_SECRET_STUDENT} = require("../jwtcheck.js");
const {authStudent} = require("../middlewares/authStudent.js");
const Class = require("../databaseSchema/class.js");
// POST route for student login
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const student = await Student.findOne({ email });
    // console.log(student);
    if (!student || student.password != password) {
      return res.status(400).json({ error: 'Invalid login credentials' });
    }
    const id = student._id;
    const token = await jwt.sign({id},JWT_SECRET_STUDENT)
    res.json({ student, token });
    // Remove the line that sets the token in localStorage
    console.log("Login successfull");
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/myprofile',authStudent, async (req, res) => {
  console.log(req.id);
  const data = await Student.findOne({
    _id: req.id
  })
  // console.log(data);
  res.json({
    data
  })
});

router.get("/totalattendance", authStudent, async (req, res) => {
  try {
      // Fetch the student document using the student ID from the request
      const data = await Student.findById(req.id).exec();

      if (!data) {
          return res.status(404).json({ message: "Student not found" });
      }

      // Initialize counters for total present and total classes
      let totalPresent = 0;
      let totalClasses = 0;

      // Iterate over the stats array to sum up the present and total values
      data.stats.forEach(innerArr => {
          if (innerArr.length === 4) {
              totalPresent += innerArr[2]; // Third element is present
              totalClasses += innerArr[3]; // Fourth element is total classes
          }
      });

      // Calculate the attendance percentage
      const percent = totalClasses > 0 ? Math.floor((totalPresent / totalClasses) * 100) : 0;

      // Send the response with calculated values
      res.status(200).json({
          percent,
          totalClasses,
          totalPresent
      });
  } catch (e) {
      console.error(e);
      res.status(500).json({
          message: "Server Error"
      });
  }
});

router.get("/examscores", authStudent, async (req, res) => {
  try {
      // Fetch the student document using the student ID from the request
      const data = await Student.findById(req.id).exec();

      if (!data) {
          return res.status(404).json({ message: "Student not found" });
      }

      // Initialize a counter for total performance index
      let totalPerformanceIndex = 0;

      // Iterate over the stats array to sum up the performance index
      data.stats.forEach(innerArr => {
          if (innerArr.length === 4) {
              totalPerformanceIndex += innerArr[1]; // Second element is performance index
          }
      });

      // Send the response with the total performance index
      res.status(200).json({
          totalPerformanceIndex
      });
  } catch (e) {
      console.error(e);
      res.status(500).json({
          message: "Server Error"
      });
  }
});

router.get('/announcements',authStudent, async (req, res) => {
  try {
    const announcements = await Announcement.find()
    // .sort({ date: -1 });
    console.log(announcements);
    res.json(announcements);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
router.get("/seeStats", authStudent, async (req, res) => {
  try {
      // Fetch the student document using the student ID from the request
      const data = await Student.findById(req.id).exec();

      if (!data) {
          return res.status(404).json({ message: "Student not found" });
      }

      // Extract the stats field
      const stats = data.stats;

      // Send the raw stats data
      res.status(200).json({
          stats
      });
  } catch (e) {
      console.error(e);
      res.status(500).json({
          message: "Server Error"
      });
  }
});
router.get("/results", authStudent, async (req, res) => {
  try {
      // Fetch the student document using the student ID from the request
      const data = await Student.findById(req.id).exec();

      if (!data) {
          return res.status(404).json({ message: "Student not found" });
      }

      // Extract the stats field
      const stats = data.stats;

      // Function to compute grade based on performance index
      const computeGrade = (performanceIndex) => {
          if (performanceIndex >= 90) return 'A';
          if (performanceIndex >= 80) return 'B';
          if (performanceIndex >= 70) return 'C';
          if (performanceIndex >= 60) return 'D';
          return 'F';
      };

      // Function to compute credits based on performance index
      const computeCredits = (performanceIndex) => {
          if (performanceIndex >= 90) return 4;
          if (performanceIndex >= 80) return 3;
          if (performanceIndex >= 70) return 2;
          if (performanceIndex >= 60) return 1;
          return 0;
      };

      // Transform the stats data to include grade and credits
      const results = stats.map(innerArr => {
          if (innerArr.length === 4) {
              const [subject, performanceIndex, present, totalClasses] = innerArr;
              return {
                  subject,
                  performance: performanceIndex,
                  grade: computeGrade(performanceIndex),
                  credits: computeCredits(performanceIndex)
              };
          }
          return null; // Handle unexpected data
      }).filter(item => item !== null); // Filter out any null entries

      // Send the response with the results data
      res.status(200).json({
          results
      });
  } catch (e) {
      console.error(e);
      res.status(500).json({
          message: "Server Error"
      });
  }
});
router.get("/timetable", authStudent, async (req, res) => {
  try {
      // Fetch the student document using the student ID from the request
      const student = await Student.findById(req.id).populate('class').exec();
      console.log(student);
      if (!student) {
          return res.status(404).json({ message: "Student not found" });
      }

      // Extract the class ID from the student document
      console.log(student.class);
      const classId = student.class._id;
      console.log(classId);
      // Fetch the class document using the class ID
      const classDoc = await Class.findById(classId).exec();

      if (!classDoc) {
          return res.status(404).json({ message: "Class not found" });
      }

      // Extract the timetable from the class document
      const timetable = classDoc.timetable;

      // Send the response with the timetable
      res.status(200).json({
          timetable
      });
  } catch (e) {
      console.error(e);
      res.status(500).json({
          message: "Server Error"
      });
  }
});

router.post("/classesForDay", authStudent, async (req, res) => {
  const { day } = req.body;

  // Validate the 'day' input
  const validDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday','Saturday','Sunday'];
  if (!validDays.includes(day)) {
      return res.status(400).json({ message: "Invalid day provided. Please use one of the following: Monday, Tuesday, Wednesday, Thursday, Friday." });
  }

  try {
      // Fetch the student document and populate the 'class' field
      const student = await Student.findById(req.id).populate('class').exec();

      if (!student) {
          return res.status(404).json({ message: "Student not found" });
      }

      // Get the timetable for the student's class
      const timetable = student.class.timetable;

      // Extract the classes for the specified day
      const classesForDay = timetable[day];

      // Send the response with the classes for the specified day
      res.status(200).json({
          day,
          classes: classesForDay
      });
  } catch (e) {
      console.error(e);
      res.status(500).json({
          message: "Server Error"
      });
  }
});
module.exports = router;
