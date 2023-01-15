const express = require('express');
const router = express.Router();
const Quiz = require('./models/quiz');

// Get all quizzes
router.get('/quizzes', async (req, res) => {
    try {
        const quizzes = await Quiz.find();
        res.json(quizzes);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Get a single quiz
router.get('/quizzes/:id', getQuiz, (req, res) => {
    res.json(res.quiz);
});

async function getQuiz(req, res, next) {
    try {
        quiz = await Quiz.findById(req.params.id);
        if (quiz == null) {
            return res.status(404).json({ message: 'Cannot find quiz' });
        }
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }

    res.quiz = quiz;
    next();
}

// Create quiz
router.post('/quizzes', async (req, res) => {
    const quiz = new Quiz({
        title: req.body.title,
        description: req.body.description,
        questions: req.body.questions
    });
    try {
        const newQuiz = await quiz.save();
        res.status(201).json(newQuiz);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Participate in quiz
router.post('/quizzes/:id/participate', getQuiz, async (req, res) => {
    try {
        const quiz = res.quiz;
        quiz.participants.push(req.body.participant);
        await quiz.save();
        res.status(200).json(quiz);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;