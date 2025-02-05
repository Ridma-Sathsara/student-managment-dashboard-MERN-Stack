import express from 'express';
import { addStudent, getStudents, getStudentById, updateStudent, deleteStudent } from '../controllers/student.controller.js';

const router = express.Router();

// Route to get all students
router.get('/', getStudents);

// Route to get a specific student by ID
router.get('/:id', getStudentById);

// Route to add a new student
router.post('/', addStudent);

// Route to update a student by ID
router.put('/:id', updateStudent);

// Route to delete a student by ID
router.delete('/:id', deleteStudent);

export default router;
