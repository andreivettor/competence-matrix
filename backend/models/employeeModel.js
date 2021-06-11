import mongoose from 'mongoose';

const employeeSchema = mongoose.Schema({
    userid: {
        type: String,
        required: true
    },
    name:{
        type: String,
    },
    area: {
        type: String,
    },
    skills: [{
        ref: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Skill'
        },
        level: String
    }],
    supervising: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Employee',
    }]
}, {
    timestamps: true
});

const Employee = mongoose.model('Employee', employeeSchema);

export default Employee;