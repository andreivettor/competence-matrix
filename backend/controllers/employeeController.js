import Employee from '../models/employeeModel.js';
import asyncHandler from 'express-async-handler';

export const getEmployees = asyncHandler(async (req, res) => {
    const employees = await Employee.find({})
        .populate({
            path: 'skills',
            populate: {
                path: 'ref',
                model: 'Skill'
            }
        });
    res.json(employees);
})

export const getEmployeeById = asyncHandler(async (req, res) => {
    const employee = await Employee.findById(req.params.id)
        .populate({
            path: 'skills',
            populate: {
                path: 'ref',
                model: 'Skill'
            }
        });

    if (employee) {
        res.json(employee);
    } else {
        res.status(404).json({
            message: "Employee not found"
        });
        res.status(404);
        throw new Error('Employee not found');
    }
})