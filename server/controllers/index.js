import express from 'express';
import db from '../db';

const router  = express.Router();

router.get('/api/tournaments',(req ,res) => {
  db.get((err, data)=>{
    console.log(err, data);  
    res.json(data);
  })});

export default router;