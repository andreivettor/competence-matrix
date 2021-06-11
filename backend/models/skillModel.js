import mongoose from 'mongoose';

const SkillSchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    description: {
        type: String,
    },
    area: {
        type: String,
    },
    levels: [{
        type: String,
    }],
}, {
    timestamps: true
});

const Skill = mongoose.model('Skill', SkillSchema);

export default Skill;