import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
// import controllers from './controllers';
const router = express.Router();

// const response = {
//     success: (req: {}, res: {}, data: {}, status: number) => {
//         res.status(status || 200).send({
//             error: '',
//             body: data
//         });
//     },
//     error: (req: {}, res: {}, error: {}, status: number, message: string) => {
//         console.error(message);
//         res.status(status || 500).send({
//             error: error,
//             body: ''
//         });
//     }
// };

router.get('/flashcards', (req: {}, res: { send: (data: string) => void }) => {
    res.send('GET Flashcards');
});

router.post('/flashcards', (req: {}, res: { send: (data: string) => void }) => {
    res.send('POST Flashcards');
});

export default router;