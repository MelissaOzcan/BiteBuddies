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
    })
    // I DONT KNOW WHAT THIS IS FOR !!!! BUT IT BREAKS WHEN I REMOVE IT !!!
    .post(async (req, res) => {
        try {
            res.render('layouts/suggestions');
        } catch (err) {
            res.json({
                message: err.message,
                error: err
            })
        }
    });

export default router;