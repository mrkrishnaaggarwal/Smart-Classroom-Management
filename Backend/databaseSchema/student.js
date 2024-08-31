const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://mrkrishnaaggarwal:Golgappe%404777@phoenix.koa7f6e.mongodb.net/Kaksha");
const studentSchema = new mongoose.Schema({
    name: { type: String, required: true },
    phone: { type: Number, required: true },
    rollNo: { type: Number, required: true },
    address: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    photograph: { type: String, },
    
    gender:{
        type : String,
        required:true
    },
    Age: { type: Number, required: true },
    Blood: { type: String, required: true },
    Father: { type: String, required: true },
    FatherNumber: { type: Number, required: true },
    Occupation: { type: Number, required: true },
    PreviousTerm: { type: Number, required: true },
    stats: {
        type: [[mongoose.Schema.Types.Mixed]],  // Array of arrays with mixed types (numbers and strings)
        validate: {
            validator: function(arr) {
                return arr.every(innerArr => 
                    innerArr.length === 4 &&         // Ensure there are 4 members in each inner array
                    typeof innerArr[0] === 'string'  && // Fourth element should be a string
                    typeof innerArr[1] === 'number'  &&// First three elements should be numbers
                    typeof innerArr[2] === 'number' &&
                    typeof innerArr[3] === 'number' 
                );
            },
            message: 'Each inner array must contain exactly 3 numbers followed by 1 string.'
        },
        required: true
    },
    class: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Class'  // Reference to the 'Class' model
    }
});

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;
