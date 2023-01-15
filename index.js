const express = require('express');
const app = express();
const mongoose = require('mongoose');
const quizRouter = require('./routes');

require('dotenv').config();

mongoose.connect(process.env.dblink, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;

db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Connected to MongoDB'));

app.use(express.json());
app.use('/api/v1/', quizRouter);

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
