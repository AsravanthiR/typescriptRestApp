import { Router } from "express";

const router = Router();

router.post('/,createTodo');
router.get('/');
router.patch('/:id');
router.delete('/:id');

export default router;