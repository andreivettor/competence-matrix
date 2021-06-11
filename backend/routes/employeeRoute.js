import { getEmployees, getEmployeeById } from "../controllers/employeeController.js";
import express from 'express';
const router = express.Router();


// express router method to create route for getting all employees
router.route('/').get(getEmployees);

// express router method to create route for getting employees by id
router.route('/:id').get(getEmployeeById);

export default router;