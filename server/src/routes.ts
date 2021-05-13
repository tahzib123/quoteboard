import express from 'express';
export const router  = express.Router();


router.get('/', async (req: any, res) => {
    res.json({});
});
