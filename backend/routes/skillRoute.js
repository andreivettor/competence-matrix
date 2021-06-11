import { getSkills, getSkillById } from "../controllers/skillController.js";
import express from 'express';
const router = express.Router();


// express router method to create route for getting all Skills
router.route('/').get(getSkills);

// express router method to create route for getting Skills by id
router.route('/:id').get(getSkillById);

export default router;