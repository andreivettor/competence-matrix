import Skill from '../models/skillModel.js';
import asyncHandler from 'express-async-handler';

export const getSkills = asyncHandler(async (req, res) => {
    const Skills = await Skill.find({});

    res.json(Skills);
})

export const getSkillById = asyncHandler(async (req, res) => {
    const Skill = await Skill.findById(req.params.id);

    if (Skill) {
        res.json(Skill);
    } else {
        res.status(404).json({
            message: "Skill not found"
        });
        res.status(404);
        throw new Error('Skill not found');
    }
})