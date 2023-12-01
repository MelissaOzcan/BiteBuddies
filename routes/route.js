import { Router } from 'express';
const router = Router();

router
    .route('/')
    .get(async (req, res) => {
        try {
            res.render('layouts/index');
        } catch (err) {
            res.json({
                message: err.message,
                error: err
            })
        }
    });

export default router;